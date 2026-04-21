from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter


ROOT = Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets"
OUT = ROOT / "instagram" / "output"
OUT.mkdir(parents=True, exist_ok=True)

SIZE = 1080
NAVY = "#1B3A5C"
NAVY_DARK = "#122840"
GOLD = "#C8952E"
GOLD_LIGHT = "#E8B94D"
CREAM = "#FAF7F2"
CREAM_DARK = "#F0EBE1"
WHITE = "#FFFFFF"
WARM_GRAY = "#6B6560"

GEORGIA = "/System/Library/Fonts/Supplemental/Georgia.ttf"
GEORGIA_BOLD = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"
ARIAL = "/System/Library/Fonts/Supplemental/Arial.ttf"
ARIAL_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"


def rgba(hex_color, alpha=255):
    hex_color = hex_color.lstrip("#")
    return tuple(int(hex_color[i:i + 2], 16) for i in (0, 2, 4)) + (alpha,)


def font(path, size):
    return ImageFont.truetype(path, size=size)


def cover(image, box):
    target_w = box[2] - box[0]
    target_h = box[3] - box[1]
    src_w, src_h = image.size
    scale = max(target_w / src_w, target_h / src_h)
    resized = image.resize((int(src_w * scale), int(src_h * scale)), Image.Resampling.LANCZOS)
    left = max(0, (resized.width - target_w) // 2)
    top = max(0, (resized.height - target_h) // 2)
    return resized.crop((left, top, left + target_w, top + target_h))


def rounded_mask(size, radius):
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((0, 0, size[0], size[1]), radius=radius, fill=255)
    return mask


def paste_rounded(base, image, box, radius):
    fitted = cover(image, box)
    mask = rounded_mask((box[2] - box[0], box[3] - box[1]), radius)
    base.paste(fitted, box, mask)


def draw_round_rect(draw, box, fill, radius, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def wrap_text(draw, text, max_width, text_font):
    words = text.split()
    lines = []
    current = []
    for word in words:
      trial = " ".join(current + [word])
      if draw.textlength(trial, font=text_font) <= max_width or not current:
          current.append(word)
      else:
          lines.append(" ".join(current))
          current = [word]
    if current:
        lines.append(" ".join(current))
    return lines


def draw_lines(draw, pos, lines, text_font, fill, spacing):
    x, y = pos
    for line in lines:
        draw.text((x, y), line, font=text_font, fill=fill)
        y += text_font.size + spacing
    return y


def add_brand_bar(base):
    draw = ImageDraw.Draw(base)
    portrait = Image.open(ASSETS / "jvs2.png").convert("RGB").resize((48, 48), Image.Resampling.LANCZOS)
    pill = (44, 34, 380, 96)
    draw_round_rect(draw, pill, rgba(NAVY_DARK, 236), 31, outline=rgba(GOLD_LIGHT, 120))
    mask = rounded_mask((48, 48), 24)
    base.paste(portrait, (58, 41), mask)
    draw.ellipse((58, 41, 106, 89), outline=rgba(WHITE, 60), width=2)
    serif = font(GEORGIA_BOLD, 21)
    sans = font(ARIAL, 13)
    draw.text((122, 48), "John VanScoyoc", fill=WHITE, font=serif)
    draw.text((124, 72), "BROOKLINE SELECT BOARD", fill=rgba(WHITE, 190), font=sans)


def add_election_pill(base, label):
    draw = ImageDraw.Draw(base)
    sans = font(ARIAL_BOLD, 18)
    width = int(draw.textlength(label, font=sans)) + 58
    x2 = SIZE - 44
    x1 = x2 - width
    box = (x1, 34, x2, 82)
    draw_round_rect(draw, box, rgba(NAVY_DARK, 236), 24, outline=rgba(GOLD_LIGHT, 120))
    draw.ellipse((x1 + 14, 52, x1 + 24, 62), fill=GOLD_LIGHT)
    draw.text((x1 + 34, 45), label, fill=(255, 255, 255, 235), font=sans)


def add_footer_tag(base, label):
    draw = ImageDraw.Draw(base)
    sans = font(ARIAL_BOLD, 16)
    width = int(draw.textlength(label, font=sans)) + 54
    box = (44, SIZE - 78, 44 + width, SIZE - 34)
    draw_round_rect(draw, box, rgba(NAVY_DARK, 236), 22, outline=rgba(GOLD_LIGHT, 110))
    draw.ellipse((58, SIZE - 60, 66, SIZE - 52), fill=GOLD_LIGHT)
    draw.text((78, SIZE - 69), label, fill=WHITE, font=sans)


def add_frame(base):
    draw = ImageDraw.Draw(base)
    draw.rectangle((24, 24, SIZE - 24, SIZE - 24), outline=GOLD_LIGHT, width=4)


def post_01():
    base = Image.new("RGBA", (SIZE, SIZE), NAVY)
    add_frame(base)
    add_brand_bar(base)
    add_election_pill(base, "May 5, 2026")
    photo_box = (44, 92, SIZE - 44, SIZE - 126)
    photo = Image.open(ASSETS / "flowers.png").convert("RGB")
    paste_rounded(base, photo, photo_box, 34)
    overlay = Image.new("RGBA", (photo_box[2] - photo_box[0], photo_box[3] - photo_box[1]), (0, 0, 0, 0))
    od = ImageDraw.Draw(overlay)
    od.rectangle((0, 0, overlay.width, overlay.height), fill=(0, 0, 0, 0))
    for i in range(overlay.height):
        alpha = int(max(0, (i / overlay.height - 0.40) / 0.60) * 205)
        od.line((0, i, overlay.width, i), fill=(18, 40, 64, alpha))
    base.alpha_composite(overlay, (photo_box[0], photo_box[1]))
    draw = ImageDraw.Draw(base)
    card = (64, 710, SIZE - 64, 978)
    draw_round_rect(draw, card, rgba(NAVY, 224), 26, outline=(255, 255, 255, 36))
    eyebrow = font(ARIAL_BOLD, 16)
    headline = font(GEORGIA_BOLD, 66)
    body = font(ARIAL, 28)
    draw.text((98, 744), "SPRING IN BROOKLINE", fill=GOLD_LIGHT, font=eyebrow)
    draw.text((98, 778), "Re-Elect John", fill=WHITE, font=headline)
    draw.text((98, 852), "VanScoyoc", fill=GOLD_LIGHT, font=headline)
    draw.text((98, 934), "Experience. Independence. Community.", fill=(255, 255, 255, 215), font=body)
    add_footer_tag(base, "millxing.github.io/JVS")
    base.convert("RGB").save(OUT / "ig01-spring-sign.png", quality=95)


def post_02():
    base = Image.new("RGBA", (SIZE, SIZE), CREAM)
    draw = ImageDraw.Draw(base)
    # soft background glow
    glow = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse((-180, -220, 420, 380), fill=rgba(GOLD_LIGHT, 70))
    glow = glow.filter(ImageFilter.GaussianBlur(60))
    base.alpha_composite(glow)
    # mini badge
    badge = (36, 36, 312, 94)
    draw_round_rect(draw, badge, rgba(NAVY, 238), 28)
    portrait = Image.open(ASSETS / "jvs2.png").convert("RGB").resize((36, 36), Image.Resampling.LANCZOS)
    base.paste(portrait, (48, 47), rounded_mask((36, 36), 18))
    mini_font = font(ARIAL_BOLD, 14)
    draw.text((96, 48), "John VanScoyoc", fill=WHITE, font=mini_font)
    draw.text((96, 66), "for Select Board", fill=(255, 255, 255, 210), font=font(ARIAL, 14))
    # photo
    photo_box = (84, 124, SIZE - 84, 812)
    photo = Image.open(ASSETS / "family2_upscaled.png").convert("RGB")
    paste_rounded(base, photo, photo_box, 36)
    # text
    serif = font(GEORGIA_BOLD, 62)
    sans = font(ARIAL, 30)
    draw.text((82, 858), "Brookline is about", fill=NAVY, font=serif)
    draw.text((82, 930), "family.", fill=GOLD, font=serif)
    body = "Strong neighborhoods, safe streets, and a town where the next generation can stay, grow, and belong."
    lines = wrap_text(draw, body, 760, sans)
    draw_lines(draw, (82, 1002), lines, sans, WARM_GRAY, 8)
    base.convert("RGB").save(OUT / "ig02-family.png", quality=95)


def post_03():
    base = Image.new("RGBA", (SIZE, SIZE), NAVY)
    # top glow
    glow = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse((620, -120, 1180, 380), fill=rgba(GOLD_LIGHT, 50))
    base.alpha_composite(glow.filter(ImageFilter.GaussianBlur(80)))
    add_frame(base)
    add_brand_bar(base)
    add_election_pill(base, "Trusted leadership")
    draw = ImageDraw.Draw(base)
    photo_box = (56, 118, 456, 1024)
    draw_round_rect(draw, photo_box, (255, 255, 255, 18), 30, outline=(255, 255, 255, 32))
    photo = Image.open(ASSETS / "profession.png").convert("RGB")
    paste_rounded(base, photo, photo_box, 30)
    serif = font(GEORGIA_BOLD, 68)
    sans = font(ARIAL_BOLD, 18)
    body = font(ARIAL, 28)
    draw.text((510, 230), "A RECORD OF SERVICE", fill=GOLD_LIGHT, font=sans)
    draw.text((510, 280), "Journalist.", fill=WHITE, font=serif)
    draw.text((510, 352), "Neighbor.", fill=WHITE, font=serif)
    draw.text((510, 424), "Advocate.", fill=WHITE, font=serif)
    draw.rounded_rectangle((510, 528, 650, 536), radius=4, fill=GOLD_LIGHT)
    copy = "Decades of listening, asking hard questions, and showing up for Brookline."
    lines = wrap_text(draw, copy, 460, body)
    draw_lines(draw, (510, 580), lines, body, (255, 255, 255, 215), 10)
    base.convert("RGB").save(OUT / "ig03-journalism.png", quality=95)


def post_04():
    base = Image.new("RGBA", (SIZE, SIZE), CREAM_DARK)
    draw = ImageDraw.Draw(base)
    pill_font = font(ARIAL_BOLD, 18)
    pill_text = "Results that matter"
    pill_w = int(draw.textlength(pill_text, font=pill_font)) + 34
    pill = (SIZE - 44 - pill_w, 34, SIZE - 44, 82)
    draw_round_rect(draw, pill, rgba(NAVY, 236), 24)
    draw.text((pill[0] + 17, 46), pill_text, fill=WHITE, font=pill_font)
    photo_box = (56, 126, SIZE - 56, 546)
    photo = Image.open(ASSETS / "accomplish.png").convert("RGB")
    paste_rounded(base, photo, photo_box, 28)
    serif = font(GEORGIA_BOLD, 60)
    eyebrow = font(ARIAL_BOLD, 17)
    bullet = font(ARIAL_BOLD, 24)
    draw.text((64, 610), "WORKING FOR BROOKLINE", fill=GOLD, font=eyebrow)
    draw.text((64, 648), "Experience you can", fill=NAVY, font=serif)
    draw.text((64, 714), "point to.", fill=NAVY, font=serif)
    items = [
        "Protecting neighborhood character",
        "Supporting local business and vitality",
        "Advocating for practical infrastructure fixes",
        "Focusing on steady, independent judgment",
    ]
    positions = [(64, 816), (540, 816), (64, 902), (540, 902)]
    for item, (x, y) in zip(items, positions):
        draw.ellipse((x, y + 12, x + 10, y + 22), fill=GOLD)
        lines = wrap_text(draw, item, 380, bullet)
        draw_lines(draw, (x + 24, y), lines, bullet, "#435162", 4)
    base.convert("RGB").save(OUT / "ig04-accomplishments.png", quality=95)


def post_05():
    base = Image.new("RGBA", (SIZE, SIZE), NAVY)
    glow = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse((720, -80, 1180, 300), fill=rgba(GOLD_LIGHT, 55))
    base.alpha_composite(glow.filter(ImageFilter.GaussianBlur(70)))
    add_brand_bar(base)
    add_election_pill(base, "Independent voice")
    photo_box = (64, 126, 504, 726)
    photo = Image.open(ASSETS / "turkey.png").convert("RGB")
    paste_rounded(base, photo, photo_box, 34)
    draw = ImageDraw.Draw(base)
    eyebrow = font(ARIAL_BOLD, 18)
    serif = font(GEORGIA_BOLD, 76)
    body = font(ARIAL, 28)
    stat = font(ARIAL_BOLD, 22)
    draw.text((560, 170), "CREATIVE BROOKLINE", fill=GOLD_LIGHT, font=eyebrow)
    draw.text((560, 224), "A town with", fill=WHITE, font=serif)
    draw.text((560, 302), "real character.", fill=WHITE, font=serif)
    copy = "Public art, neighborhood energy, local traditions, and the kind of civic life worth protecting."
    lines = wrap_text(draw, copy, 450, body)
    draw_lines(draw, (560, 426), lines, body, (255, 255, 255, 214), 10)
    stat_box = (560, 640, 1016, 840)
    draw.rounded_rectangle(stat_box, radius=24, fill=rgba(CREAM, 238))
    draw.rectangle((560, 640, 566, 840), fill=GOLD_LIGHT)
    stat_text = "Experience and independence matter because Brookline should stay unmistakably Brookline."
    stat_lines = wrap_text(draw, stat_text, 396, stat)
    draw_lines(draw, (592, 686), stat_lines, stat, NAVY, 10)
    base.convert("RGB").save(OUT / "ig05-community-color.png", quality=95)


if __name__ == "__main__":
    post_01()
    post_02()
    post_03()
    post_04()
    post_05()

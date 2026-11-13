"""Opus Dijital: hizmet sayfaları, blog, 404, sitemap ve robots üretir.
Çalıştırma: python3 site3d/kaynak/olustur.py  (çıktı: site3d/yayin)"""
import html, json, os, re, sys
from urllib.parse import quote
sys.path.insert(0, os.path.dirname(__file__))
from hizmetler import HIZMETLER
from blog import YAZILAR

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(KOK, 'yayin')
SITE = 'https://www.opusdijital.com'
TEL, TEL_TXT, WA_NO = '+905303533676', '+90 530 353 36 76', '905303533676'
BUGUN = '2026-11-13'
AYLAR = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık']

ana = open(os.path.join(OUT, 'index.html'), encoding='utf-8').read()
i = ana.index('<svg viewBox="0 0 100 104" class="mk" aria-hidden="true">'); MARK = ana[i:ana.index('</svg>', i) + 6]
H = {h['slug']: h for h in HIZMETLER}
Y = {y['slug']: y for y in YAZILAR}
esc = lambda s: html.escape(s, quote=True)
wa = lambda t: f'https://wa.me/{WA_NO}?text=' + quote(t)
tarih = lambda d: f"{int(d[8:10])} {AYLAR[int(d[5:7])-1]} {d[:4]}"
plain = lambda s: re.sub(r'<[^>]+>', '', s)

FONT = 'https://fonts.googleapis.com/css2?family=Unbounded:wght@400&family=DM+Serif+Display&family=JetBrains+Mono:wght@400&family=Inter:wght@400;500&display=swap'

CSS = """
:root{--night:#06171B;--panel:#0A2227;--sage:#7A9E8E;--bone:#F3F1EC;--sand:#E6B566;--kiremit:#B5543C;--mute:rgba(243,241,236,.66);--line:rgba(243,241,236,.14);
--head:'Unbounded','Unb-fb',system-ui,sans-serif;--mono:'JetBrains Mono',ui-monospace,monospace;--body:'Inter',system-ui,-apple-system,'Segoe UI',sans-serif;--pad:clamp(18px,4vw,56px)}
@font-face{font-family:'Unb-fb';src:local('Arial');size-adjust:112%;ascent-override:88%;descent-override:22%}
*{box-sizing:border-box;margin:0;padding:0}
html{background:var(--night);scroll-behavior:smooth}
body{background:radial-gradient(70% 520px at 78% 0,rgba(230,181,102,.10),transparent 70%),radial-gradient(60% 480px at 0 30%,rgba(122,158,142,.08),transparent 70%),var(--night);color:var(--bone);font-family:var(--body);font-size:17px;line-height:1.72;-webkit-font-smoothing:antialiased}
a{color:inherit}
::selection{background:var(--sand);color:var(--night)}
.mono{font-family:var(--mono);font-size:12px;letter-spacing:.16em;text-transform:uppercase}
.wrap{max-width:1160px;margin:0 auto;padding:0 var(--pad)}
.skip{position:absolute;left:-999px;top:8px;background:var(--bone);color:var(--night);padding:8px 14px;border-radius:8px;z-index:99}.skip:focus{left:8px}
header{position:sticky;top:0;z-index:20;background:rgba(6,23,27,.86);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.bar{display:flex;align-items:center;justify-content:space-between;gap:16px;height:72px}
.brand{display:flex;align-items:center;gap:6px;text-decoration:none}
.mk{width:40px;height:42px;display:block}
.mk .m-ring{stroke:var(--bone)}.mk .m-ringf{fill:var(--bone)}.mk .m-acc{stroke:var(--sand)}.mk .m-orb{stroke:var(--sage)}.mk .m-orbf{fill:var(--sage)}.mk .m-cut{stroke:var(--night)}.mk .m-cutl{stroke:var(--night);stroke-width:2}
.wm{display:flex;flex-direction:column;line-height:.8}.wm b{font-family:'DM Serif Display',Georgia,serif;font-weight:400;font-size:30px}.wm small{font-size:8px;letter-spacing:.46em;color:var(--sage);margin-top:4px;padding-left:14px;font-weight:500}
.links{display:flex;align-items:center;gap:22px}.links a{text-decoration:none;opacity:.82}.links a:hover,.links a[aria-current]{opacity:1;color:var(--sand)}
.btn{display:inline-flex;align-items:center;gap:10px;background:var(--kiremit);color:#fff;text-decoration:none;border-radius:999px;padding:16px 26px;font-family:var(--mono);font-size:12.5px;letter-spacing:.12em;text-transform:uppercase;transition:transform .3s}
.btn:hover{transform:scale(1.03)}.btn.sm{padding:11px 18px;font-size:11px}
.btn.ghost{background:none;border:1px solid var(--line);color:var(--bone)}.btn.ghost:hover{border-color:var(--bone)}
.crumb{display:flex;flex-wrap:wrap;gap:8px;color:var(--mute);margin-bottom:26px}.crumb a{text-decoration:none}.crumb a:hover{color:var(--bone)}.crumb li{list-style:none}.crumb li+li::before{content:'/';margin-right:8px;opacity:.5}
.hero{position:relative;padding:clamp(56px,9vw,120px) 0 clamp(48px,7vw,96px);overflow:hidden}
.hero::after{content:'';position:absolute;right:-180px;top:-120px;width:560px;height:560px;border-radius:50%;border:1px solid rgba(230,181,102,.22);box-shadow:inset 0 0 0 70px rgba(230,181,102,.025),0 0 0 120px rgba(122,158,142,.03);pointer-events:none}
.eyebrow{color:var(--sage);margin-bottom:22px}
h1,h2,h3.t{font-family:var(--head);font-weight:400;text-transform:uppercase;letter-spacing:.035em;word-spacing:.08em}
h1{font-size:clamp(30px,5.2vw,68px);line-height:1.04;max-width:20ch;position:relative;z-index:1;animation:up .9s cubic-bezier(.2,.8,.2,1) both}
.lead{font-size:clamp(17px,1.5vw,20px);color:var(--mute);max-width:62ch;margin-top:28px;position:relative;z-index:1}
.acts{display:flex;flex-wrap:wrap;gap:12px;margin-top:36px;position:relative;z-index:1}
@keyframes up{from{transform:translateY(14px)}to{transform:none}}
main section{padding:clamp(36px,5vw,64px) 0;border-top:1px solid var(--line)}
.content{max-width:760px}
.content h2{font-size:clamp(21px,2.4vw,32px);line-height:1.15;margin:56px 0 18px}.content h2:first-child{margin-top:0}
.content p{margin:0 0 18px;color:rgba(243,241,236,.86)}
.content p a,.content li a,.faq a{color:var(--sand);text-underline-offset:4px}
.content ul{margin:4px 0 22px;padding:0;list-style:none}.content ul li{position:relative;padding-left:26px;margin:8px 0}.content ul li::before{content:'';position:absolute;left:2px;top:.72em;width:9px;height:9px;border-radius:50%;border:1.5px solid var(--sand)}
.cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:14px;margin:8px 0 26px;max-width:none;width:min(1050px,calc(100vw - 2*var(--pad)))}
.card{background:linear-gradient(180deg,rgba(243,241,236,.045),rgba(243,241,236,.015));border:1px solid var(--line);border-radius:18px;padding:22px 22px 20px}
.card h3{font-family:var(--body);font-size:16px;font-weight:500;margin-bottom:8px;color:var(--bone)}.card p{font-size:15px;color:var(--mute);margin:0;line-height:1.6}
.steps{counter-reset:s;list-style:none;margin:8px 0 26px;padding:0}
.steps li{counter-increment:s;position:relative;padding:18px 0 18px 64px;border-top:1px solid var(--line)}.steps li:last-child{border-bottom:1px solid var(--line)}
.steps li::before{content:counter(s,decimal-leading-zero);position:absolute;left:0;top:18px;font-family:var(--mono);font-size:13px;letter-spacing:.12em;color:var(--sand)}
.steps b{display:block;font-weight:500;margin-bottom:4px}.steps span{color:var(--mute);font-size:15.5px}
.note{border-left:2px solid var(--sand);padding:12px 18px;background:rgba(230,181,102,.06);border-radius:0 12px 12px 0;color:var(--bone)!important;font-size:15.5px}
.faq details{border-top:1px solid var(--line);padding:18px 0}.faq details:last-child{border-bottom:1px solid var(--line)}
.faq summary{cursor:pointer;list-style:none;font-weight:500;display:flex;justify-content:space-between;gap:18px}.faq summary::-webkit-details-marker{display:none}
.faq summary::after{content:'+';font-family:var(--mono);color:var(--sand);font-size:20px;line-height:1}.faq details[open] summary::after{content:'–'}
.faq details p{color:var(--mute);margin-top:12px;max-width:70ch}
.sec-t{font-size:clamp(20px,2.2vw,30px);margin-bottom:22px}
.grid3{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:14px}
.tile{display:block;text-decoration:none;border:1px solid var(--line);border-radius:18px;padding:22px;transition:border-color .3s,transform .3s}.tile:hover{border-color:rgba(230,181,102,.6);transform:translateY(-2px)}
.tile .mono{color:var(--sage);display:block;margin-bottom:10px;font-size:11px}.tile b{display:block;font-weight:500;font-size:17px;line-height:1.35}.tile p{color:var(--mute);font-size:15px;margin-top:8px;line-height:1.55}
.band{text-align:center;padding:clamp(56px,8vw,110px) 0}
.band h2{font-size:clamp(26px,4vw,52px);line-height:1.05;max-width:18ch;margin:0 auto}.band p{color:var(--mute);margin:20px auto 0;max-width:52ch}.band .acts{justify-content:center}
.meta{color:var(--mute);margin-top:22px}
footer{border-top:1px solid var(--line);padding:44px 0 34px;color:var(--mute);font-size:14px}
.fgrid{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:28px}.fgrid h2{font-family:var(--mono);font-size:11px;letter-spacing:.16em;color:var(--sage);margin-bottom:12px;text-transform:uppercase}
.fgrid a{display:block;text-decoration:none;padding:3px 0}.fgrid a:hover{color:var(--bone)}
.fbot{display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-top:34px;padding-top:20px;border-top:1px solid var(--line);font-size:13px}
@media (max-width:760px){.links .opt{display:none}.links{gap:12px;font-size:11px;letter-spacing:.1em}.btn.sm{padding:9px 13px;font-size:10.5px}.mk{width:34px;height:36px}.wm b{font-size:26px}.fgrid{grid-template-columns:1fr 1fr}.fgrid>div:first-child{grid-column:1/-1}.hero::after{width:340px;height:340px;right:-160px;top:-80px}.steps li{padding-left:48px}}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}html{scroll-behavior:auto}}
"""


def blocks(bl):
    o = []
    for t, v in bl:
        if t == 'h2': o.append(f'<h2>{v}</h2>')
        elif t == 'p': o.append(f'<p>{v}</p>')
        elif t == 'note': o.append(f'<p class="note">{v}</p>')
        elif t == 'ul': o.append('<ul>' + ''.join(f'<li>{x}</li>' for x in v) + '</ul>')
        elif t == 'ol': o.append('<ol class="steps">' + ''.join(f'<li><b>{a}</b><span>{b}</span></li>' for a, b in v) + '</ol>')
        elif t == 'cards': o.append('<div class="cards">' + ''.join(f'<div class="card"><h3>{a}</h3><p>{b}</p></div>' for a, b in v) + '</div>')
    return '\n'.join(o)


def page(path, title, desc, body, ld, cur='', og_type='website', robots=None):
    url = SITE + path
    nav = [('/#hizmetler', 'Hizmetler', ''), ('/sekreterai', 'SekreterAI', 'opt'), ('/blog', 'Blog', '')]
    links = ''.join(f'<a class="{c}" href="{u}"{" aria-current=\"page\"" if cur == u else ""}>{n}</a>' for u, n, c in nav)
    svc_links = ''.join(f'<a href="/{h["slug"]}">{h["name"]}</a>' for h in HIZMETLER)
    post_links = ''.join(f'<a href="/blog/{y["slug"]}">{y["h1"]}</a>' for y in YAZILAR[:4])
    ldj = json.dumps(ld, ensure_ascii=False).replace('</', '<\\/')
    rob = f'<meta name="robots" content="{robots}">' if robots else ''
    return f"""<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(title)}</title>
<meta name="description" content="{esc(desc)}">
{rob}<link rel="canonical" href="{url}">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta name="theme-color" content="#06171B">
<meta property="og:type" content="{og_type}"><meta property="og:url" content="{url}"><meta property="og:title" content="{esc(title)}"><meta property="og:description" content="{esc(desc)}">
<meta property="og:image" content="{SITE}/og.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:locale" content="tr_TR"><meta property="og:site_name" content="Opus Dijital">
<meta name="twitter:card" content="summary_large_image">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="{FONT}" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="{FONT}"></noscript>
<style>{re.sub(r'\s*\n\s*', '', CSS)}</style>
<script type="application/ld+json">{ldj}</script>
</head>
<body>
<a class="skip" href="#icerik">İçeriğe geç</a>
<header><div class="wrap bar"><a class="brand" href="/" aria-label="Opus Dijital ana sayfa">{MARK}<span class="wm"><b>pus</b><small>DİJİTAL</small></span></a>
<nav class="links mono" aria-label="Ana menü">{links}<a class="btn sm" href="{wa('Merhaba, bilgi almak istiyorum.')}" rel="noopener">WhatsApp</a></nav></div></header>
<main id="icerik">
{body}
</main>
<footer><div class="wrap">
<div class="fgrid">
<div><a class="brand" href="/" aria-label="Opus Dijital ana sayfa">{MARK}<span class="wm"><b>pus</b><small>DİJİTAL</small></span></a>
<p style="margin-top:14px;max-width:40ch">İzmir'de web tasarım, SEO, reklam, sosyal medya, e-ticaret ve yapay zeka çözümleri sunan dijital ajans.</p>
<p style="margin-top:12px"><a href="tel:{TEL}">{TEL_TXT}</a><a href="tel:+905015699564">+90 501 569 95 64</a><a href="mailto:opus.digital25@gmail.com">opus.digital25@gmail.com</a><a href="https://instagram.com/opus.dijital" rel="noopener">Instagram · @opus.dijital</a></p></div>
<div><h2>Hizmetler</h2>{svc_links}</div>
<div><h2>Blog</h2>{post_links}<a href="/blog">Tüm yazılar →</a></div>
</div>
<div class="fbot"><span>© 2026 Opus Dijital · İzmir</span><span>Uygar Akhanlı</span></div>
</div></footer>
</body>
</html>
"""


def crumb_ld(items):
    return {"@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": i + 1, "name": n, "item": SITE + u} for i, (n, u) in enumerate(items)]}


def crumb_html(items):
    return '<ol class="crumb mono" aria-label="Konum">' + ''.join(
        f'<li><a href="{u}">{n}</a></li>' if k < len(items) - 1 else f'<li aria-current="page">{n}</li>' for k, (n, u) in enumerate(items)) + '</ol>'


def faq_html(faq):
    return '<div class="faq">' + ''.join(f'<details><summary>{q}</summary><p>{a}</p></details>' for q, a in faq) + '</div>'


ORG = {"@id": SITE + "/#isletme"}
os.makedirs(os.path.join(OUT, 'blog'), exist_ok=True)
urls = [('/', '1.0')]

# ---- hizmet sayfaları
for h in HIZMETLER:
    path = '/' + h['slug']
    cr = [('Ana sayfa', '/'), ('Hizmetler', '/#hizmetler'), (h['name'], path)] if h['slug'] != 'sekreterai' else [('Ana sayfa', '/'), (h['name'], path)]
    rel = ''.join(f'<a class="tile" href="/{r}"><span class="mono">Hizmet</span><b>{H[r]["name"]}</b><p>{plain(H[r]["desc"])[:120].rsplit(" ",1)[0]}…</p></a>' for r in h['related'])
    rel += ''.join(f'<a class="tile" href="/blog/{p}"><span class="mono">Blog</span><b>{Y[p]["h1"]}</b><p>{Y[p]["summary"]}</p></a>' for p in h['posts'])
    body = f"""<div class="hero"><div class="wrap">{crumb_html(cr)}
<p class="eyebrow mono">{h['eyebrow']}</p>
<h1>{h['h1']}</h1>
<p class="lead">{h['lead']}</p>
<div class="acts"><a class="btn" href="{wa(h['wa'])}" rel="noopener">WhatsApp'tan bilgi alın →</a><a class="btn ghost" href="tel:{TEL}">Hemen arayın</a></div>
</div></div>
<section><div class="wrap content">{blocks(h['blocks'])}</div></section>
<section><div class="wrap"><h2 class="sec-t">Sık sorulan sorular</h2>{faq_html(h['faq'])}</div></section>
<section><div class="wrap"><h2 class="sec-t">İlgili sayfalar</h2><div class="grid3">{rel}</div></div></section>
<section class="band"><div class="wrap"><h2>Sıradaki hikâye sizinki olsun.</h2><p>İhtiyacınızı dinleyelim, işletmeniz için en doğru adımı birlikte belirleyelim. Ön görüşme ücretsizdir.</p>
<div class="acts"><a class="btn" href="{wa(h['wa'])}" rel="noopener">Ücretsiz ön görüşme →</a></div></div></section>"""
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "Service", "@id": SITE + path + "#hizmet", "name": h['name'], "serviceType": h['name'], "description": h['desc'], "url": SITE + path,
         "provider": {"@type": "ProfessionalService", "@id": SITE + "/#isletme", "name": "Opus Dijital", "url": SITE + "/", "telephone": TEL, "address": {"@type": "PostalAddress", "addressLocality": "İzmir", "addressCountry": "TR"}},
         "areaServed": [{"@type": "City", "name": "İzmir"}, {"@type": "Country", "name": "Türkiye"}]},
        crumb_ld(cr),
        {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": plain(a)}} for q, a in h['faq']]}]}
    open(os.path.join(OUT, h['slug'] + '.html'), 'w', encoding='utf-8').write(page(path, h['title'], h['desc'], body, ld, cur=path))
    urls.append((path, '0.9'))

# ---- blog yazıları
for y in YAZILAR:
    path = '/blog/' + y['slug']
    cr = [('Ana sayfa', '/'), ('Blog', '/blog'), (y['h1'], path)]
    s = H[y['service']]
    others = [o for o in YAZILAR if o['slug'] != y['slug']][:3]
    rel = f'<a class="tile" href="/{s["slug"]}"><span class="mono">İlgili hizmet</span><b>{s["name"]}</b><p>{plain(s["lead"])[:130].rsplit(" ",1)[0]}…</p></a>'
    rel += ''.join(f'<a class="tile" href="/blog/{o["slug"]}"><span class="mono">Blog</span><b>{o["h1"]}</b><p>{o["summary"]}</p></a>' for o in others)
    body = f"""<article><div class="hero"><div class="wrap">{crumb_html(cr)}
<p class="eyebrow mono">Blog · {s['name']}</p>
<h1>{y['h1']}</h1>
<p class="lead">{y['summary']}</p>
<p class="meta mono">Uygar Akhanlı · <time datetime="{y['date']}">{tarih(y['date'])}</time></p>
</div></div>
<section><div class="wrap content">{blocks(y['blocks'])}</div></section></article>
<section><div class="wrap"><h2 class="sec-t">Bunlar da ilginizi çekebilir</h2><div class="grid3">{rel}</div></div></section>
<section class="band"><div class="wrap"><h2>Bir sorunuz mu var?</h2><p>İşletmenize özel durumu konuşalım. WhatsApp'tan yazmanız yeterli.</p>
<div class="acts"><a class="btn" href="{wa('Merhaba, blogdaki yazınızı okudum, bilgi almak istiyorum.')}" rel="noopener">WhatsApp'tan yazın →</a></div></div></section>"""
    ld = {"@context": "https://schema.org", "@graph": [
        {"@type": "BlogPosting", "headline": y['h1'], "description": y['desc'], "datePublished": y['date'], "dateModified": y['date'], "inLanguage": "tr-TR",
         "mainEntityOfPage": SITE + path, "image": SITE + "/og.jpg", "author": {"@type": "Person", "name": "Uygar Akhanlı", "url": SITE + "/"},
         "publisher": {"@type": "Organization", "name": "Opus Dijital", "url": SITE + "/", "logo": {"@type": "ImageObject", "url": SITE + "/apple-touch-icon.png"}}},
        crumb_ld(cr)]}
    open(os.path.join(OUT, 'blog', y['slug'] + '.html'), 'w', encoding='utf-8').write(page(path, y['title'] + ' · Opus Dijital', y['desc'], body, ld, cur='/blog', og_type='article'))
    urls.append((path, '0.7'))

# ---- blog listesi
cr = [('Ana sayfa', '/'), ('Blog', '/blog')]
tiles = ''.join(f'<a class="tile" href="/blog/{y["slug"]}"><span class="mono">{H[y["service"]]["name"]} · {tarih(y["date"])}</span><b>{y["h1"]}</b><p>{y["summary"]}</p></a>' for y in YAZILAR)
body = f"""<div class="hero"><div class="wrap">{crumb_html(cr)}<p class="eyebrow mono">Blog</p><h1>Dijitalde büyümek için rehberler</h1>
<p class="lead">Web sitesi, Google'da görünürlük, reklam, e-ticaret ve yapay zeka üzerine işletmeler için sade ve uygulanabilir yazılar.</p></div></div>
<section><div class="wrap"><div class="grid3">{tiles}</div></div></section>"""
ld = {"@context": "https://schema.org", "@graph": [{"@type": "Blog", "name": "Opus Dijital Blog", "url": SITE + "/blog", "inLanguage": "tr-TR", "publisher": ORG,
      "blogPost": [{"@type": "BlogPosting", "headline": y['h1'], "url": SITE + "/blog/" + y['slug'], "datePublished": y['date']} for y in YAZILAR]}, crumb_ld(cr)]}
open(os.path.join(OUT, 'blog', 'index.html'), 'w', encoding='utf-8').write(page('/blog', 'Blog | Web Tasarım, SEO, Reklam ve E-ticaret Rehberleri · Opus Dijital',
    "İşletmeler için web sitesi, yerel SEO, Google İşletme Profili, Google ve Meta reklamları, Shopify e-ticaret ve yapay zeka sekreter üzerine rehber yazılar.", body, ld, cur='/blog'))
urls.insert(1, ('/blog', '0.8'))

# ---- 404
tiles = ''.join(f'<a class="tile" href="/{h["slug"]}"><span class="mono">Hizmet</span><b>{h["name"]}</b></a>' for h in HIZMETLER)
body = f"""<div class="hero"><div class="wrap"><p class="eyebrow mono">404</p><h1>Aradığınız sayfa bulunamadı.</h1>
<p class="lead">Sayfa taşınmış ya da adres yanlış yazılmış olabilir. Ana sayfaya dönebilir ya da hizmetlerimize göz atabilirsiniz.</p>
<div class="acts"><a class="btn" href="/">Ana sayfaya dön →</a></div></div></div>
<section><div class="wrap"><div class="grid3">{tiles}</div></div></section>"""
open(os.path.join(OUT, '404.html'), 'w', encoding='utf-8').write(page('/404', 'Sayfa bulunamadı · Opus Dijital', 'Aradığınız sayfa bulunamadı.', body, {"@context": "https://schema.org", "@type": "WebPage", "name": "404"}, robots='noindex'))

# ---- sitemap + robots
sm = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + ''.join(
    f'  <url><loc>{SITE}{u}</loc><lastmod>{BUGUN}</lastmod><priority>{p}</priority></url>\n' for u, p in urls) + '</urlset>\n'
open(os.path.join(OUT, 'sitemap.xml'), 'w', encoding='utf-8').write(sm)
open(os.path.join(OUT, 'robots.txt'), 'w', encoding='utf-8').write(f'User-agent: *\nAllow: /\n\nSitemap: {SITE}/sitemap.xml\n')
print(len(urls), 'adres')

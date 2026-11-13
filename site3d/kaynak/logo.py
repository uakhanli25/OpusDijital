"""Opus Dijital logosu: altın pusula 'O' + 'PUS' harfleri, hafif kabartma (3D) etkisiyle.
logo(id)  -> tam logo (pusula + PUS), viewBox 0 0 296 104
pusula(id) -> yalnızca pusula (favicon, ikon)"""

P_HARF = 'M118 90V16.5H137A18.75 18.75 0 0 1 137 54H118'
U_HARF = 'M182 10V63.5A20 20 0 0 0 222 63.5V10'
S_HARF = 'M279 22.5A17 16.75 0 1 0 266 50A17 16.75 0 1 1 252.98 77.52'


def _defs(k):
    return f'''<defs>
<linearGradient id="g{k}" x1="8" y1="6" x2="92" y2="96" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FCE9BC"/><stop offset=".38" stop-color="#E6B566"/><stop offset=".72" stop-color="#A9742F"/><stop offset="1" stop-color="#F0C97F"/></linearGradient>
<linearGradient id="b{k}" x1="0" y1="10" x2="0" y2="92" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".55" stop-color="#F3F1EC"/><stop offset="1" stop-color="#BDB8AC"/></linearGradient>
<linearGradient id="n{k}" x1="0" y1="20" x2="0" y2="50" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#FFF1CC"/><stop offset="1" stop-color="#D9A24F"/></linearGradient>
</defs>'''


def _pusula(k):
    tik = ''.join(f'<line x1="50" y1="12.5" x2="50" y2="{17.5 if a % 90 == 0 else 15}" transform="rotate({a} 50 50)"/>' for a in range(0, 360, 45))
    return f'''<g class="lg-o">
<circle cx="52.4" cy="53" r="43.5" fill="none" stroke="#5E4219" stroke-width="13" opacity=".9"/>
<circle cx="50" cy="50" r="43.5" fill="none" stroke="url(#g{k})" stroke-width="13"/>
<circle cx="50" cy="50" r="49" fill="none" stroke="#FFF3D6" stroke-width=".8" opacity=".55"/>
<circle cx="50" cy="50" r="33" fill="none" stroke="#E6B566" stroke-width="1" opacity=".55"/>
<g stroke="#E6B566" stroke-width="1.6" stroke-linecap="round" opacity=".8">{tik}</g>
<g class="lg-needle" transform="rotate(40 50 50)">
<path d="M50 21 56 50H44Z" fill="url(#n{k})"/><path d="M50 21 50 50H44Z" fill="#FFF7E2" opacity=".35"/>
<path d="M44 50H56L50 79Z" fill="#7A9E8E"/><path d="M50 50H56L50 79Z" fill="#3E5A50"/>
</g>
<circle cx="50" cy="50" r="4.6" fill="#06171B" stroke="url(#g{k})" stroke-width="2.2"/>
</g>'''


def logo(k='a', cls='logo', label=None):
    harfler = ''.join(f'<path d="{d}"/>' for d in (P_HARF, U_HARF, S_HARF))
    return f'''<svg class="{cls}" viewBox="0 0 296 104" {('role="img" aria-label="'+label+'"') if label else 'aria-hidden="true"'} xmlns="http://www.w3.org/2000/svg">{_defs(k)}
{_pusula(k)}
<g fill="none" stroke-width="13" stroke-linejoin="round"><g stroke="#2C463F" transform="translate(2.4 3)">{harfler}</g><g stroke="url(#b{k})">{harfler}</g></g>
</svg>'''


def pusula(k='i', size=None, bg=True):
    arka = '<rect x="-8" y="-6" width="116" height="116" rx="28" fill="#06171B"/>' if bg else ''
    return f'<svg viewBox="-8 -6 116 116" xmlns="http://www.w3.org/2000/svg">{arka}{_defs(k)}{_pusula(k)}</svg>'


if __name__ == '__main__':
    import sys
    open(sys.argv[1], 'w').write(f'<html><body style="margin:0;background:#06171B;padding:40px;display:grid;gap:40px">{logo("x")}<div style="width:520px">{logo("y")}</div><div style="width:150px">{logo("z")}</div><div style="width:64px">{pusula("w")}</div><div style="width:24px">{pusula("v")}</div></body></html>'.replace('<svg class="logo"', '<svg class="logo" style="width:100%;display:block"'))

/* Kho đề Toán 10 – trích từ snippet iMaths Studio (registerMathTopicGenerator) */

(function() {
    if (typeof window.registerMathTopicGenerator !== 'function') return;
    const F = window.IMATHS_FMT;

    // Làm sạch danh sách Module Khối 10 trước khi nạp trọn bộ 35 Module chuẩn
    if (window.IMATHS_ADMIN_GENERATORS) {
        window.IMATHS_ADMIN_GENERATORS['10'] = {};
    }

    // ===================================================================
    // THƯ VIỆN HÌNH VẼ SVG TỔNG HỢP CHO TOÀN BỘ 35 MODULE TOÁN 10
    // ===================================================================
    const G10_ALL_SVG = {
        numLine: function(c, a, b, d) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 250 100" width="230" height="95">' +
                '<line x1="15" y1="50" x2="235" y2="50" stroke="#cbd5e1" stroke-width="1.8"/><polygon points="240,50 231,45 231,55" fill="#cbd5e1"/>' +
                '<line x1="98" y1="40" x2="106" y2="60" stroke="#ef4444" stroke-width="1.4"/><line x1="115" y1="40" x2="123" y2="60" stroke="#ef4444" stroke-width="1.4"/><line x1="132" y1="40" x2="140" y2="60" stroke="#ef4444" stroke-width="1.4"/>' +
                '<text x="45" y="54" fill="#fde047" font-size="14" font-weight="bold">[</text><text x="85" y="54" fill="#38bdf8" font-size="14" font-weight="bold">]</text>' +
                '<text x="155" y="54" fill="#38bdf8" font-size="14" font-weight="bold">(</text><text x="198" y="54" fill="#fde047" font-size="14" font-weight="bold">]</text>' +
                '<text x="40" y="74" fill="#fde047" font-size="11" font-weight="bold">' + c + '</text><text x="80" y="74" fill="#38bdf8" font-size="11" font-weight="bold">' + a + '</text>' +
                '<text x="152" y="74" fill="#38bdf8" font-size="11" font-weight="bold">' + b + '</text><text x="195" y="74" fill="#fde047" font-size="11" font-weight="bold">' + d + '</text>' +
            '</svg></div>';
        },
        numberLineUnion: function(l1, r1, l2, r2, labelTxt) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 250 105" width="235" height="100">' +
                '<line x1="15" y1="58" x2="232" y2="58" stroke="#94a3b8" stroke-width="1.8"/><polygon points="237,58 228,53 228,63" fill="#94a3b8"/>' +
                '<line x1="48" y1="58" x2="195" y2="58" stroke="#38bdf8" stroke-width="3.2"/>' +
                '<text x="44" y="62" fill="#fde047" font-size="14" font-weight="bold">[</text>' +
                '<text x="98" y="62" fill="#4ade80" font-size="14" font-weight="bold">(</text>' +
                '<text x="145" y="62" fill="#38bdf8" font-size="14" font-weight="bold">)</text>' +
                '<text x="192" y="62" fill="#fde047" font-size="14" font-weight="bold">]</text>' +
                '<text x="40" y="80" fill="#fde047" font-size="11" font-weight="bold">' + l1 + '</text>' +
                '<text x="96" y="80" fill="#4ade80" font-size="11" font-weight="bold">' + l2 + '</text>' +
                '<text x="143" y="80" fill="#38bdf8" font-size="11" font-weight="bold">' + r1 + '</text>' +
                '<text x="190" y="80" fill="#fde047" font-size="11" font-weight="bold">' + r2 + '</text>' +
                '<text x="125" y="25" fill="#cbd5e1" font-size="10.5" font-weight="bold" text-anchor="middle">' + labelTxt + '</text>' +
            '</svg></div>';
        },
        vennTwoClubs: function(totalN, lbl1, cnt1, lbl2, cnt2, midTxt) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 135" width="235" height="130">' +
                '<rect x="12" y="10" width="221" height="115" rx="10" fill="#040b16" stroke="#475569" stroke-width="1.5"/>' +
                '<circle cx="95" cy="70" r="38" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" stroke-width="1.8"/>' +
                '<circle cx="145" cy="70" r="38" fill="rgba(250,204,21,0.2)" stroke="#fde047" stroke-width="1.8"/>' +
                '<text x="72" y="66" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">' + lbl1 + '</text>' +
                '<text x="72" y="80" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">(' + cnt1 + ')</text>' +
                '<text x="168" y="66" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">' + lbl2 + '</text>' +
                '<text x="168" y="80" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">(' + cnt2 + ')</text>' +
                '<text x="120" y="74" fill="#4ade80" font-size="11" font-weight="bold" text-anchor="middle">' + midTxt + '</text>' +
                '<text x="122" y="24" fill="#cbd5e1" font-size="10.5" font-weight="bold" text-anchor="middle">Tổng số: ' + totalN + ' học sinh</text>' +
            '</svg></div>';
        },
        unitCircleCoord: function(angLbl) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 140" width="235" height="135">' +
                '<line x1="18" y1="108" x2="225" y2="108" stroke="#94a3b8" stroke-width="1.5"/><polygon points="229,108 221,104 221,112" fill="#94a3b8"/>' +
                '<line x1="120" y1="130" x2="120" y2="12" stroke="#94a3b8" stroke-width="1.5"/><polygon points="120,8 116,16 124,16" fill="#94a3b8"/>' +
                '<path d="M 50 108 A 70 70 0 0 1 190 108" fill="none" stroke="#38bdf8" stroke-width="2.2"/>' +
                '<line x1="120" y1="108" x2="72" y2="57" stroke="#fde047" stroke-width="2"/>' +
                '<line x1="72" y1="57" x2="72" y2="108" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="72" y1="57" x2="120" y2="57" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<path d="M 142 108 A 22 22 0 0 0 104 91" fill="none" stroke="#4ade80" stroke-width="1.5"/>' +
                '<circle cx="72" cy="57" r="3.5" fill="#fde047"/>' +
                '<text x="32" y="52" fill="#fde047" font-size="10.5" font-weight="bold">M(x₀; y₀)</text>' +
                '<text x="66" y="122" fill="#38bdf8" font-size="10.5" font-weight="bold">x₀</text>' +
                '<text x="125" y="61" fill="#4ade80" font-size="10.5" font-weight="bold">y₀</text>' +
                '<text x="136" y="92" fill="#fde047" font-size="10.5" font-weight="bold">' + angLbl + '</text>' +
                '<text x="108" y="122" fill="#cbd5e1" font-size="10.5">O</text>' +
                '<text x="218" y="122" fill="#cbd5e1" font-size="11" font-style="italic">x</text>' +
                '<text x="127" y="20" fill="#cbd5e1" font-size="11" font-style="italic">y</text>' +
            '</svg></div>';
        },
        halfPlaneLine: function(xCut, yCut, shadeOrigin) {
            const polyPts = shadeOrigin ? '18,12 168,128 18,128' : '62,12 222,12 222,128 168,128';
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 240 140" width="230" height="135">' +
                '<polygon points="' + polyPts + '" fill="rgba(239,68,68,0.22)"/>' +
                '<line x1="18" y1="100" x2="222" y2="100" stroke="#94a3b8" stroke-width="1.5"/><polygon points="226,100 218,96 218,104" fill="#94a3b8"/>' +
                '<line x1="82" y1="132" x2="82" y2="12" stroke="#94a3b8" stroke-width="1.5"/><polygon points="82,8 78,16 86,16" fill="#94a3b8"/>' +
                '<line x1="62" y1="12" x2="168" y2="128" stroke="#f87171" stroke-width="2.2"/>' +
                '<circle cx="82" cy="34" r="3.2" fill="#fde047"/><circle cx="142" cy="100" r="3.2" fill="#fde047"/>' +
                '<text x="65" y="38" fill="#fde047" font-size="11" font-weight="bold">' + yCut + '</text>' +
                '<text x="138" y="116" fill="#fde047" font-size="11" font-weight="bold">' + xCut + '</text>' +
                '<text x="68" y="115" fill="#cbd5e1" font-size="10.5">O</text>' +
                '<text x="50" y="24" fill="#f87171" font-size="11" font-weight="bold" font-style="italic">d</text>' +
                '<text x="214" y="115" fill="#cbd5e1" font-size="11" font-style="italic">x</text>' +
                '<text x="90" y="20" fill="#cbd5e1" font-size="11" font-style="italic">y</text>' +
            '</svg></div>';
        },
        triangleSystemRegion: function(negA) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 240 140" width="230" height="135">' +
                '<polygon points="75,35 75,95 135,95" fill="rgba(74,222,128,0.28)" stroke="#4ade80" stroke-width="2"/>' +
                '<line x1="20" y1="95" x2="220" y2="95" stroke="#94a3b8" stroke-width="1.5"/><polygon points="224,95 216,91 216,99" fill="#94a3b8"/>' +
                '<line x1="135" y1="130" x2="135" y2="12" stroke="#94a3b8" stroke-width="1.5"/><polygon points="135,8 131,16 139,16" fill="#94a3b8"/>' +
                '<line x1="75" y1="15" x2="75" y2="125" stroke="#fde047" stroke-width="1.5" stroke-dasharray="4 2"/>' +
                '<line x1="55" y1="15" x2="165" y2="125" stroke="#38bdf8" stroke-width="1.8"/>' +
                '<circle cx="75" cy="95" r="3" fill="#fde047"/><circle cx="75" cy="35" r="3" fill="#fde047"/><circle cx="135" cy="95" r="3" fill="#fde047"/>' +
                '<text x="54" y="110" fill="#fde047" font-size="10.5" font-weight="bold">&minus;' + negA + '</text>' +
                '<text x="140" y="38" fill="#4ade80" font-size="10.5" font-weight="bold">' + negA + '</text>' +
                '<text x="140" y="109" fill="#cbd5e1" font-size="10.5">O</text>' +
                '<text x="92" y="82" fill="#fde047" font-size="10.5" font-weight="bold">S = ?</text>' +
                '<text x="212" y="110" fill="#cbd5e1" font-size="11" font-style="italic">x</text>' +
                '<text x="143" y="18" fill="#cbd5e1" font-size="11" font-style="italic">y</text>' +
            '</svg></div>';
        },
        quadPolygonOxy: function(bCoordLbl, maxAxisX, maxAxisY) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 140" width="235" height="135">' +
                '<polygon points="55,108 55,34 128,56 168,108" fill="rgba(56,189,248,0.22)" stroke="#38bdf8" stroke-width="2"/>' +
                '<line x1="20" y1="108" x2="225" y2="108" stroke="#94a3b8" stroke-width="1.5"/><polygon points="229,108 221,104 221,112" fill="#94a3b8"/>' +
                '<line x1="55" y1="130" x2="55" y2="12" stroke="#94a3b8" stroke-width="1.5"/><polygon points="55,8 51,16 59,16" fill="#94a3b8"/>' +
                '<circle cx="55" cy="34" r="3.2" fill="#fde047"/><circle cx="128" cy="56" r="3.6" fill="#4ade80"/><circle cx="168" cy="108" r="3.2" fill="#fde047"/>' +
                '<text x="41" y="122" fill="#cbd5e1" font-size="10.5">O</text>' +
                '<text x="32" y="38" fill="#fde047" font-size="10.5" font-weight="bold">' + maxAxisY + '</text>' +
                '<text x="162" y="123" fill="#fde047" font-size="10.5" font-weight="bold">' + maxAxisX + '</text>' +
                '<text x="134" y="53" fill="#4ade80" font-size="10.5" font-weight="bold">B' + bCoordLbl + '</text>' +
                '<text x="216" y="122" fill="#cbd5e1" font-size="11" font-style="italic">x</text>' +
                '<text x="63" y="20" fill="#cbd5e1" font-size="11" font-style="italic">y</text>' +
            '</svg></div>';
        },
        quadGarden: function(ac, bd, oa, ob) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 140" width="230" height="132">' +
                '<polygon points="35,112 195,118 212,28 55,22" fill="rgba(74,222,128,0.14)" stroke="#4ade80" stroke-width="2"/>' +
                '<line x1="35" y1="112" x2="212" y2="28" stroke="#38bdf8" stroke-width="1.6"/>' +
                '<line x1="55" y1="22" x2="195" y2="118" stroke="#38bdf8" stroke-width="1.6"/>' +
                '<path d="M 108 77 A 18 18 0 0 0 132 78" fill="none" stroke="#fde047" stroke-width="1.6"/>' +
                '<circle cx="120" cy="70" r="3" fill="#fde047"/>' +
                '<text x="20" y="118" fill="#fde047" font-size="11" font-weight="bold">A</text>' +
                '<text x="200" y="125" fill="#fde047" font-size="11" font-weight="bold">B</text>' +
                '<text x="217" y="28" fill="#e2e8f0" font-size="11" font-weight="bold">C</text>' +
                '<text x="40" y="20" fill="#e2e8f0" font-size="11" font-weight="bold">D</text>' +
                '<text x="116" y="62" fill="#fde047" font-size="10.5" font-weight="bold">O</text>' +
                '<text x="110" y="92" fill="#fde047" font-size="10" font-weight="bold">60°</text>' +
                '<text x="65" y="96" fill="#cbd5e1" font-size="9.5">OA=' + oa + '</text>' +
                '<text x="152" y="96" fill="#cbd5e1" font-size="9.5">OB=' + ob + '</text>' +
            '</svg></div>';
        },
        pavedCourtyard: function(ab, bc, cd, angB, angC) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 250 145" width="235" height="138">' +
                '<defs><pattern id="brickPat" width="16" height="8" patternUnits="userSpaceOnUse">' +
                    '<rect width="16" height="8" fill="#0f172a"/><path d="M 0 0 L 16 0 M 0 8 L 16 8 M 8 0 L 8 8" stroke="#334155" stroke-width="1"/>' +
                '</pattern></defs>' +
                '<polygon points="28,22 78,118 175,118 212,48" fill="url(#brickPat)" stroke="#38bdf8" stroke-width="2.2"/>' +
                '<line x1="78" y1="118" x2="212" y2="48" stroke="#fde047" stroke-width="1.7" stroke-dasharray="4 2"/>' +
                '<line x1="28" y1="22" x2="175" y2="118" stroke="#94a3b8" stroke-width="1.1" stroke-dasharray="3 3"/>' +
                '<circle cx="28" cy="22" r="3" fill="#fde047"/><circle cx="78" cy="118" r="3" fill="#fde047"/>' +
                '<circle cx="175" cy="118" r="3" fill="#fde047"/><circle cx="212" cy="48" r="3" fill="#fde047"/>' +
                '<text x="15" y="20" fill="#fde047" font-size="11.5" font-weight="bold">A</text>' +
                '<text x="68" y="132" fill="#fde047" font-size="11.5" font-weight="bold">B</text>' +
                '<text x="173" y="132" fill="#fde047" font-size="11.5" font-weight="bold">C</text>' +
                '<text x="218" y="48" fill="#fde047" font-size="11.5" font-weight="bold">D</text>' +
                '<text x="26" y="78" fill="#4ade80" font-size="10.5" font-weight="bold">' + ab + 'm</text>' +
                '<text x="118" y="132" fill="#4ade80" font-size="10.5" font-weight="bold">' + bc + 'm</text>' +
                '<text x="200" y="92" fill="#4ade80" font-size="10.5" font-weight="bold">' + cd + 'm</text>' +
                '<text x="80" y="105" fill="#fde047" font-size="10" font-weight="bold">' + angB + '°</text>' +
                '<text x="150" y="112" fill="#fde047" font-size="10" font-weight="bold">' + angC + '°</text>' +
            '</svg></div>';
        },
        forestFire: function(abDist, angA, angB) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 135" width="230" height="128">' +
                '<polygon points="38,110 205,110 105,24" fill="rgba(251,146,60,0.15)" stroke="#fb923c" stroke-width="2" stroke-dasharray="4 2"/>' +
                '<line x1="38" y1="110" x2="205" y2="110" stroke="#38bdf8" stroke-width="2.2"/>' +
                '<circle cx="105" cy="24" r="4" fill="#ef4444"/>' +
                '<text x="92" y="16" fill="#ef4444" font-size="11" font-weight="bold">🔥 M</text>' +
                '<text x="24" y="115" fill="#fde047" font-size="11.5" font-weight="bold">A</text>' +
                '<text x="212" y="115" fill="#fde047" font-size="11.5" font-weight="bold">B</text>' +
                '<text x="55" y="103" fill="#4ade80" font-size="10.5" font-weight="bold">' + angA + '°</text>' +
                '<text x="172" y="103" fill="#4ade80" font-size="10.5" font-weight="bold">' + angB + '°</text>' +
                '<text x="105" y="126" fill="#38bdf8" font-size="11" font-weight="bold">' + abDist + ' km</text>' +
            '</svg></div>';
        },
        antennaTower: function(hVal, angD, angC) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 140" width="230" height="132">' +
                '<line x1="20" y1="118" x2="225" y2="118" stroke="#94a3b8" stroke-width="1.6"/>' +
                '<rect x="175" y="55" width="28" height="63" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" stroke-width="1.8"/>' +
                '<line x1="189" y1="18" x2="189" y2="55" stroke="#fde047" stroke-width="2.5"/>' +
                '<line x1="38" y1="118" x2="189" y2="55" stroke="#4ade80" stroke-width="1.4" stroke-dasharray="4 2"/>' +
                '<line x1="38" y1="118" x2="189" y2="18" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4 2"/>' +
                '<circle cx="38" cy="118" r="3" fill="#fde047"/><circle cx="189" cy="55" r="3" fill="#38bdf8"/><circle cx="189" cy="18" r="3" fill="#ef4444"/>' +
                '<text x="26" y="131" fill="#fde047" font-size="11" font-weight="bold">A</text>' +
                '<text x="184" y="131" fill="#cbd5e1" font-size="11" font-weight="bold">H</text>' +
                '<text x="196" y="58" fill="#38bdf8" font-size="11" font-weight="bold">D</text>' +
                '<text x="196" y="22" fill="#ef4444" font-size="11" font-weight="bold">C</text>' +
                '<text x="206" y="92" fill="#4ade80" font-size="10.5" font-weight="bold">' + hVal + 'm</text>' +
                '<text x="72" y="114" fill="#cbd5e1" font-size="9.5">' + angD + '° / ' + angC + '°</text>' +
            '</svg></div>';
        },
        buildingTwoPoints: function(icVal, abDist, angA, angB) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 250 145" width="235" height="138">' +
                '<line x1="15" y1="122" x2="235" y2="122" stroke="#94a3b8" stroke-width="1.6"/>' +
                '<rect x="30" y="52" width="34" height="70" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" stroke-width="1.8"/>' +
                '<line x1="47" y1="18" x2="47" y2="52" stroke="#fde047" stroke-width="2.5"/>' +
                '<line x1="47" y1="18" x2="140" y2="122" stroke="#4ade80" stroke-width="1.6" stroke-dasharray="4 2"/>' +
                '<line x1="47" y1="18" x2="218" y2="122" stroke="#f87171" stroke-width="1.6" stroke-dasharray="4 2"/>' +
                '<circle cx="47" cy="18" r="3.2" fill="#ef4444"/><circle cx="47" cy="52" r="3" fill="#fde047"/>' +
                '<circle cx="140" cy="122" r="3" fill="#4ade80"/><circle cx="218" cy="122" r="3" fill="#f87171"/>' +
                '<text x="53" y="20" fill="#ef4444" font-size="11" font-weight="bold">C</text>' +
                '<text x="20" y="54" fill="#fde047" font-size="11" font-weight="bold">I (' + icVal + 'm)</text>' +
                '<text x="42" y="135" fill="#cbd5e1" font-size="11" font-weight="bold">H</text>' +
                '<text x="135" y="135" fill="#4ade80" font-size="11" font-weight="bold">A</text>' +
                '<text x="215" y="135" fill="#f87171" font-size="11" font-weight="bold">B</text>' +
                '<text x="108" y="117" fill="#4ade80" font-size="10" font-weight="bold">' + angA + '°</text>' +
                '<text x="182" y="117" fill="#f87171" font-size="10" font-weight="bold">' + angB + '°</text>' +
                '<text x="166" y="136" fill="#fde047" font-size="10.5" font-weight="bold">' + abDist + ' m</text>' +
            '</svg></div>';
        },
        flagpoleObserver: function(distCD, hObs, angA, angB) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 250 148" width="235" height="140">' +
                '<line x1="15" y1="128" x2="235" y2="128" stroke="#94a3b8" stroke-width="1.8"/>' +
                '<rect x="28" y="48" width="54" height="80" fill="rgba(148,163,184,0.25)" stroke="#94a3b8" stroke-width="1.8"/>' +
                '<line x1="82" y1="16" x2="82" y2="48" stroke="#fde047" stroke-width="2.6"/>' +
                '<rect x="204" y="96" width="8" height="32" fill="rgba(56,189,248,0.3)" stroke="#38bdf8" stroke-width="1.5"/>' +
                '<line x1="82" y1="96" x2="208" y2="96" stroke="#cbd5e1" stroke-width="1.3" stroke-dasharray="4 2"/>' +
                '<line x1="208" y1="96" x2="82" y2="48" stroke="#4ade80" stroke-width="1.6" stroke-dasharray="4 2"/>' +
                '<line x1="208" y1="96" x2="82" y2="16" stroke="#f87171" stroke-width="1.6" stroke-dasharray="4 2"/>' +
                '<circle cx="82" cy="16" r="3" fill="#ef4444"/><circle cx="82" cy="48" r="3" fill="#fde047"/>' +
                '<circle cx="82" cy="96" r="2.8" fill="#cbd5e1"/><circle cx="208" cy="96" r="3" fill="#38bdf8"/>' +
                '<text x="88" y="18" fill="#ef4444" font-size="11" font-weight="bold">B</text>' +
                '<text x="88" y="50" fill="#fde047" font-size="11" font-weight="bold">A</text>' +
                '<text x="68" y="94" fill="#cbd5e1" font-size="10.5" font-weight="bold">D</text>' +
                '<text x="68" y="125" fill="#cbd5e1" font-size="10.5" font-weight="bold">E</text>' +
                '<text x="214" y="95" fill="#38bdf8" font-size="11" font-weight="bold">C</text>' +
                '<text x="215" y="125" fill="#cbd5e1" font-size="10.5" font-weight="bold">F</text>' +
                '<text x="135" y="109" fill="#fde047" font-size="10.5" font-weight="bold">' + distCD + ' m</text>' +
                '<text x="178" y="116" fill="#38bdf8" font-size="10" font-weight="bold">' + hObs + 'm</text>' +
                '<text x="155" y="92" fill="#4ade80" font-size="9.5" font-weight="bold">' + angA + '°</text>' +
                '<text x="132" y="72" fill="#f87171" font-size="9.5" font-weight="bold">' + angB + '°</text>' +
            '</svg></div>';
        },
        twoBoatsAngle: function(s1, s2, angVal) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 135" width="235" height="130">' +
                '<polygon points="42,108 198,108 105,24" fill="rgba(56,189,248,0.14)" stroke="#38bdf8" stroke-width="2"/>' +
                '<line x1="105" y1="24" x2="198" y2="108" stroke="#f87171" stroke-width="2" stroke-dasharray="4 2"/>' +
                '<path d="M 66 108 A 24 24 0 0 0 56 89" fill="none" stroke="#fde047" stroke-width="1.6"/>' +
                '<circle cx="42" cy="108" r="3.5" fill="#fde047"/><circle cx="105" cy="24" r="3.5" fill="#4ade80"/><circle cx="198" cy="108" r="3.5" fill="#4ade80"/>' +
                '<text x="25" y="115" fill="#fde047" font-size="11.5" font-weight="bold">A</text>' +
                '<text x="78" y="20" fill="#4ade80" font-size="10.5" font-weight="bold">⛵ Tàu 1 (' + s1 + ')</text>' +
                '<text x="155" y="124" fill="#4ade80" font-size="10.5" font-weight="bold">⛵ Tàu 2 (' + s2 + ')</text>' +
                '<text x="68" y="98" fill="#fde047" font-size="10.5" font-weight="bold">' + angVal + '°</text>' +
                '<text x="156" y="62" fill="#f87171" font-size="11" font-weight="bold">d = ?</text>' +
            '</svg></div>';
        },
        triangleIncircle: function(subLabel) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 240 138" width="230" height="132">' +
                '<polygon points="115,16 42,116 196,116" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" stroke-width="2.2"/>' +
                '<circle cx="116" cy="82" r="34" fill="rgba(250,204,21,0.12)" stroke="#fde047" stroke-width="1.8"/>' +
                '<line x1="116" y1="82" x2="116" y2="116" stroke="#4ade80" stroke-width="1.6" stroke-dasharray="3 2"/>' +
                '<circle cx="116" cy="82" r="3" fill="#fde047"/>' +
                '<text x="110" y="12" fill="#fde047" font-size="11.5" font-weight="bold">A</text>' +
                '<text x="27" y="120" fill="#e2e8f0" font-size="11.5" font-weight="bold">B</text>' +
                '<text x="202" y="120" fill="#e2e8f0" font-size="11.5" font-weight="bold">C</text>' +
                '<text x="122" y="102" fill="#4ade80" font-size="10.5" font-weight="bold">r</text>' +
                '<text x="120" y="131" fill="#cbd5e1" font-size="10.5" font-weight="bold" text-anchor="middle">' + subLabel + '</text>' +
            '</svg></div>';
        }
    };

    // ===================================================================
    // PHẦN A: 8 MODULE ĐỀ ÔN TẬP GIỮA KÌ I (29/10/2026)
    // ===================================================================
    window.registerMathTopicGenerator('10', 'g10_tap_hop_so_nguyen', {
        title: '📚 [Đề 1] Tập hợp: Đếm số nguyên A ∩ B & Phép hiệu B \\ A (Kèm SVG)',
        shortLabel: '📚 Tập hợp A ∩ B',
        keywords: /tập hợp|số nguyên|giao|hiệu|phần tử|trục số/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                const a = -((seed + step) % 3 + 1);
                const b = ((seed * 2 + step) % 4) + 3;
                const c = a - ((step % 5) + 3);
                const d = b + ((seed + step * 3) % 6 + 4);
                const totalInt = (a - c + 1) + (d - b);
                return {
                    q: '[Toán 10] Cho hai tập hợp ' + F.m('A = (&minus;&infin;; ' + a + '] &cup; (' + b + '; +&infin;)') + ' và ' + F.m('B = [' + c + '; ' + d + ']') + ' (minh họa trục số). Tập hợp ' + F.m('A &cap; B') + ' có bao nhiêu số nguyên?' + G10_ALL_SVG.numLine(c, a, b, d),
                    ans: String(totalInt)
                };
            } else {
                const rMax = ((seed + step) % 4) + 3;
                const kSq  = (rMax * rMax) + 2;
                const multCnt = ((seed * 2 + step) % 5) + 4;
                const maxN = (multCnt - 1) * 3 + 1;
                let inA = 0;
                for (let i = 0; i < multCnt; i++) {
                    if ((i * 3) <= rMax) inA++;
                }
                return {
                    q: '[Toán 10] Cho hai tập hợp ' + F.m('A = {n &isin; Z | n<sup>2</sup> &lt; ' + kSq + '}') + ' và ' + F.m('B = {n &isin; N | n &lt; ' + maxN + ', n &#8942; 3}') + '. Khi đó, tập hợp ' + F.m('B \\ A') + ' có bao nhiêu phần tử?',
                    ans: String(multCnt - inA)
                };
            }
        }
    });

    window.registerMathTopicGenerator('10', 'g10_tap_hop_tham_so_m', {
        title: '🔍 [Đề 1] Tập hợp chứa tham số m: Điều kiện B ∩ T ≠ ∅',
        shortLabel: '🔍 Tham số m Tập hợp',
        keywords: /tham số|khác rỗng|giao/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const a = ((seed + step) % 3) + 1;
            const k = a + ((step % 4) + 2);
            const b = 2 * (((seed * 2 + step) % 4) + 3);
            const minM = a - k;
            const maxBound = Math.min(k, b / 2);
            return {
                q: '[Toán 10] Cho tập hợp ' + F.m('B = [' + a + '; ' + b + ']') + ' và ' + F.m('T = {x &isin; R | 2m &lt; x &le; m + ' + k + '}') + ' với ' + F.m('m') + ' là tham số thực. Có bao nhiêu giá trị nguyên của ' + F.m('m') + ' để ' + F.m('B &cap; T &ne; &empty;') + '?',
                ans: String(maxBound - minM)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_bieu_do_ven_clb', {
        title: '👥 [Đề 1] Biểu đồ Ven: CLB Văn học & CLB Toán học (Kèm SVG)',
        shortLabel: '👥 CLB Văn & Toán',
        keywords: /câu lạc bộ|biểu đồ ven|văn học|toán học|học sinh/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const both = ((seed + step) % 6) + 4;
            const onlyVan = ((seed * 2 + step) % 10) + 14;
            const onlyToan = ((seed * 3 + step) % 8) + 9;
            const none = ((seed + step * 2) % 6) + 4;
            const van = onlyVan + both;
            const toan = onlyToan + both;
            const total = onlyVan + onlyToan + both + none;
            const svg = G10_ALL_SVG.vennTwoClubs(total, 'CLB Văn', van, 'CLB Toán', toan, '?');
            return {
                q: '[Toán 10] Lớp 10A có ' + F.m(total) + ' học sinh, trong đó có ' + F.m(van) + ' học sinh tham gia CLB Văn học, ' + F.m(toan) + ' học sinh tham gia CLB Toán học và ' + F.m(none) + ' học sinh không tham gia CLB nào (như biểu đồ Ven). Hỏi có bao nhiêu học sinh tham gia đúng một trong hai câu lạc bộ trên?' + svg,
                ans: String(onlyVan + onlyToan)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_luong_giac_goc', {
        title: '🧭 [Đề 1] Giá trị lượng giác góc 0°–180° & Công thức bù/phụ (Kèm SVG)',
        shortLabel: '🧭 Lượng giác 0°–180°',
        keywords: /lượng giác|sin|cos|tan|cot|đường tròn đơn vị/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const k = ((seed + step) % 6) + 3;
            const m = ((seed * 2 + step) % 9) + 2;
            const k2 = k * k;
            return {
                q: '[Toán 10] Cho góc ' + F.m('&alpha;') + ' thỏa mãn ' + F.m('0° &lt; &alpha; &lt; 90°') + ' và ' + F.m('sin &alpha; = ' + F.frac('1', k)) + '. Tính giá trị của biểu thức ' + F.m('A = ' + k + ' sin(180° &minus; &alpha;) + ' + k2 + ' cos(90° &minus; &alpha;)sin &alpha; + ' + m) + '.' + G10_ALL_SVG.unitCircleCoord('&alpha;'),
                ans: String(m + 2)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_mien_nghiem_bpt', {
        title: '📊 [Đề 1] Miền nghiệm BPT bậc nhất hai ẩn ax + y ≤ c (Kèm SVG)',
        shortLabel: '📊 Miền nghiệm BPT',
        keywords: /miền nghiệm|hệ bất phương trình|tọa độ/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const x0 = ((seed + step) % 5) + 2;
            const k  = ((step % 3) + 2);
            const y0 = x0 * k;
            return {
                q: '[Toán 10] Phần không bị gạch (chứa gốc tọa độ ' + F.m('O') + ') trong hình vẽ bên dưới là miền nghiệm của bất phương trình bậc nhất hai ẩn có dạng ' + F.m('ax + y &le; c') + '. Tính giá trị của ' + F.m('T = a + c') + '.' + G10_ALL_SVG.halfPlaneLine(x0, y0, false),
                ans: String(k + y0)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_bpt_ga_ran', {
        title: '🍟 [Đề 1] Lập BPT Doanh thu Cửa hàng Gà rán & Khoai tây chiên',
        shortLabel: '🍟 BPT Gà rán & Khoai',
        keywords: /gà rán|khoai tây|cửa hàng|doanh thu tối thiểu/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const kUnit = 20;
            const m = ((seed + step) % 3) + 2;
            const mClean = (m === 3) ? 4 : m;
            const n = ((seed * 2 + step) % 16) + 25;
            const priceGa    = 3 * kUnit;
            const priceKhoai = mClean * kUnit;
            const minRev     = n * kUnit;
            const ansT       = (mClean * mClean) + (n * n);
            return {
                q: '[Toán 10] Một cửa hàng đồ ăn nhanh kinh doanh hai mặt hàng là gà rán và khoai tây chiên. Mỗi suất gà rán có giá bán ' + F.m(priceGa + '.000') + ' đồng, mỗi suất khoai tây chiên có giá bán ' + F.m(priceKhoai + '.000') + ' đồng. Cửa hàng cần đạt được tổng doanh thu ít nhất là ' + F.m(minRev + '.000') + ' đồng. Gọi ' + F.m('x, y') + ' lần lượt là số suất gà rán và khoai tây chiên bán được, bất phương trình bậc nhất hai ẩn thể hiện điều kiện về doanh thu tối thiểu là ' + F.m('3x + my &ge; n') + '. Giá trị của biểu thức ' + F.m('T = m<sup>2</sup> + n<sup>2</sup>') + ' là bao nhiêu?',
                ans: String(ansT)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_quy_hoach_thuc_pham', {
        title: '🏭 [Đề 1] Quy hoạch tuyến tính: Sản xuất Thực phẩm X & Y từ Bột và Đường',
        shortLabel: '🏭 Thực phẩm X & Y',
        keywords: /công ty|thực phẩm|bột|đường|doanh thu tối đa|quy hoạch/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const kScale = (step % 3) + 1;
            const bot    = 18 * kScale;
            const duong  = 15 * kScale;
            const pX     = ((seed + step) % 5 + 8) * 10;
            const pY     = ((seed * 2 + step) % 4 + 5) * 10;
            const revA = (45 * kScale) * pY;
            const revB = (40 * kScale * pX) + (15 * kScale * pY);
            const revC = (50 * kScale) * pX;
            return {
                q: '[Toán 10] Một công ty sản xuất hai loại thực phẩm ' + F.m('X') + ' và ' + F.m('Y') + '. Nguyên liệu gồm bột và đường với lượng dự trữ tương ứng là ' + F.m(bot) + ' tấn bột và ' + F.m(duong) + ' tấn đường. Để sản xuất mỗi tấn thực phẩm ' + F.m('X') + ' cần ' + F.m('0,3') + ' tấn bột và ' + F.m('0,3') + ' tấn đường; mỗi tấn thực phẩm ' + F.m('Y') + ' cần ' + F.m('0,4') + ' tấn bột và ' + F.m('0,2') + ' tấn đường. Biết giá bán mỗi tấn ' + F.m('X') + ' là ' + F.m(pX) + ' triệu đồng, mỗi tấn ' + F.m('Y') + ' là ' + F.m(pY) + ' triệu đồng. Tìm doanh thu tối đa (đơn vị: triệu đồng) của công ty.',
                ans: String(Math.max(revA, revB, revC))
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_he_thuc_luong_thuc_te', {
        title: '⛵ [Đề 1] Hệ thức lượng Tam giác: Phân giác AD & Tàu du lịch S75°E',
        shortLabel: '⛵ Phân giác & Tàu biển',
        keywords: /tam giác|bán kính|ngoại tiếp|phân giác|tàu du lịch/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                const pairs = [
                    { c: 3,  b: 6,  ad: 2 },
                    { c: 4,  b: 12, ad: 3 },
                    { c: 6,  b: 12, ad: 4 },
                    { c: 10, b: 15, ad: 6 }
                ];
                const mult = (step % 3) + 1;
                const pk   = pairs[(seed + step) % pairs.length];
                return {
                    q: '[Toán 10] Cho tam giác ' + F.m('ABC') + ' có ' + F.m('AB = ' + (pk.c * mult)) + ', ' + F.m('AC = ' + (pk.b * mult)) + '. Đường phân giác trong góc ' + F.m('A') + ' cắt cạnh ' + F.m('BC') + ' tại điểm ' + F.m('D') + '. Biết rằng ' + F.m(F.ang('BAD') + ' = ' + F.ang('CAD') + ' = 60°') + ', tính độ dài đoạn thẳng ' + F.m('AD') + '.',
                    ans: String(pk.ad * mult)
                };
            } else {
                const navCases = [
                    { v1: 40, t1: 2, v2: 25, t2: 2, ac: 70 },
                    { v1: 40, t1: 2, v2: 15, t2: 2, ac: 70 },
                    { v1: 50, t1: 3, v2: 35, t2: 2, ac: 130 },
                    { v1: 80, t1: 2, v2: 50, t2: 2, ac: 140 }
                ];
                const nc = navCases[(seed + step) % navCases.length];
                return {
                    q: '[Toán 10] Một tàu du lịch xuất phát từ cảng biển ' + F.m('A') + ' đi thẳng theo hướng ' + F.m('S75°E') + ' với vận tốc ' + F.m(nc.v1) + ' hải lí/giờ. Sau ' + F.m(nc.t1) + ' giờ đến vị trí ' + F.m('B') + ', tàu bị hỏng động cơ nên trôi thẳng theo hướng Tây Nam (' + F.m('S45°W') + ') với vận tốc ' + F.m(nc.v2) + ' hải lí/giờ. Tính khoảng cách (đơn vị: hải lí) từ cảng biển ' + F.m('A') + ' đến vị trí tàu du lịch sau khi tàu đã trôi được ' + F.m(nc.t2) + ' giờ.',
                    ans: String(nc.ac)
                };
            }
        }
    });

    // ===================================================================
    // PHẦN B: 8 MODULE ĐỀ THAM KHẢO 3 & 4 (FILE 10-web-1.pdf)
    // ===================================================================
    window.registerMathTopicGenerator('10', 'g10_tap_hop_doi_xung_m', {
        title: '🧩 [Đề 2] Tập hợp: Hiệu đối xứng (A\\B)∪(B\\A) & Khoảng dịch chuyển m',
        shortLabel: '🧩 Hiệu đối xứng & Khoảng m',
        keywords: /hiệu đối xứng|tham số m|khác rỗng|tập con/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                const c = -((seed + step) % 4 + 1);
                const d = ((seed * 2 + step) % 5) + 3;
                const p = ((step % 3) + 1);
                const q = ((seed + step * 2) % 4) + 2;
                return {
                    q: '[Toán 10] Cho hai tập hợp ' + F.m('A = [' + c + '; ' + d + ')') + ' và ' + F.m('B = (m &minus; ' + p + '; m + ' + q + ']') + '. Có tất cả bao nhiêu giá trị nguyên của tham số ' + F.m('m') + ' để ' + F.m('A &cap; B &ne; &empty;') + '?',
                    ans: String((d - c) + p + q)
                };
            } else {
                const nA = ((seed + step) % 5) + 5;
                const nB = ((seed * 2 + step) % 5) + 4;
                const common = ((step % 3) + 2);
                return {
                    q: '[Toán 10] Cho hai tập hợp hữu hạn ' + F.m('A') + ' có ' + F.m(nA) + ' phần tử, tập hợp ' + F.m('B') + ' có ' + F.m(nB) + ' phần tử và ' + F.m('A &cap; B') + ' có ' + F.m(common) + ' phần tử. Hỏi tập hợp ' + F.m('(A \\ B) &cup; (B \\ A)') + ' có bao nhiêu phần tử?',
                    ans: String((nA - common) + (nB - common))
                };
            }
        }
    });

    window.registerMathTopicGenerator('10', 'g10_ven_3_tap_hop', {
        title: '🏅 [Đề 2] Biểu đồ Ven 3 tập hợp: Đội tuyển Toán–Lí–Hóa & Hội khỏe Phù Đổng',
        shortLabel: '🏅 Biểu đồ Ven 3 Môn',
        keywords: /hội khỏe phù đổng|vật lí|hóa học|cả ba môn|chạy cự ly/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const all3 = ((seed + step) % 5) + 2;
            const abOnly = ((seed * 2 + step) % 5) + 4;
            const bcOnly = ((seed * 3 + step) % 4) + 3;
            const caOnly = ((seed + step * 2) % 5) + 3;
            const aOnly  = ((seed + step) % 8) + 8;
            const bOnly  = ((seed * 2 + step) % 7) + 7;
            const cOnly  = ((seed * 3 + step) % 6) + 6;
            const nToan = aOnly + abOnly + caOnly + all3;
            const nLi   = bOnly + abOnly + bcOnly + all3;
            const nHoa  = cOnly + bcOnly + caOnly + all3;
            const nAB   = abOnly + all3;
            const nBC   = bcOnly + all3;
            const nCA   = caOnly + all3;
            const totalUnion = aOnly + bOnly + cOnly + abOnly + bcOnly + caOnly + all3;
            return {
                q: '[Toán 10] Trong đợt thi chọn đội tuyển học sinh giỏi của trường, có ' + F.m(totalUnion) + ' học sinh tham gia dự thi ít nhất một trong ba môn Toán, Vật lí, Hóa học. Biết rằng có ' + F.m(nToan) + ' em thi Toán, ' + F.m(nLi) + ' em thi Vật lí, ' + F.m(nHoa) + ' em thi Hóa học; trong đó có ' + F.m(nAB) + ' em thi cả Toán và Vật lí, ' + F.m(nBC) + ' em thi cả Vật lí và Hóa học, ' + F.m(nCA) + ' em thi cả Toán và Hóa học. Hỏi có bao nhiêu học sinh dự thi đồng thời cả ba môn Toán, Vật lí và Hóa học?',
                ans: String(all3)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_bpt_luong_dung_dich', {
        title: '🧪 [Đề 2] BPT Thực tế: Lương Part-time & Pha chế dung dịch hồ bơi',
        shortLabel: '🧪 Lương & Pha dung dịch',
        keywords: /part-time|bán hàng|hồ bơi|dung dịch|khử trùng|cuối tuần/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                const wRate = 25;
                const eRate = 40;
                const wHours = ((seed + step) % 9) + 12;
                const minWeekendHours = ((seed * 2 + step) % 8) + 6;
                const targetIncome = (wRate * wHours) + (eRate * minWeekendHours);
                return {
                    q: '[Toán 10] Một nhân viên bán hàng part-time nhận được mức lương làm việc ngày thường là ' + F.m(wRate) + ' nghìn đồng/giờ và làm việc ngày cuối tuần là ' + F.m(eRate) + ' nghìn đồng/giờ. Trong một tuần, bạn ấy muốn kiếm được ít nhất ' + F.m(targetIncome) + ' nghìn đồng. Nếu tuần đó bạn đã làm việc ' + F.m(wHours) + ' giờ vào ngày thường thì bạn cần làm thêm tối thiểu bao nhiêu giờ vào ngày cuối tuần?',
                    ans: String(minWeekendHours)
                };
            } else {
                const xMax = (((seed + step) % 3) + 1) * 20;
                const xAct = 0.15 * xMax;
                const yMin = (((seed * 2 + step) % 5) + 3) * 5;
                const reqActive = xAct + (0.4 * yMin);
                const maxTotalL = xMax + yMin + 15;
                return {
                    q: '[Toán 10] Một hồ bơi tiêu chuẩn cần duy trì nồng độ chất khử trùng mỗi tuần bằng cách pha chế dung dịch loại ' + F.m('X') + ' (chứa ' + F.m('15%') + ' hoạt chất) và dung dịch loại ' + F.m('Y') + ' (chứa ' + F.m('40%') + ' hoạt chất). Để đạt chuẩn vệ sinh, tổng lượng dung dịch đổ vào hồ không vượt quá ' + F.m(maxTotalL) + ' lít nhưng lượng hoạt chất nguyên chất phải đạt tối thiểu ' + F.m(reqActive) + ' lít. Nếu tuần này nhân viên kỹ thuật chỉ sử dụng tối đa ' + F.m(xMax) + ' lít dung dịch loại ' + F.m('X') + ', thì cần dùng ít nhất bao nhiêu lít dung dịch loại ' + F.m('Y') + '?',
                    ans: String(yMin)
                };
            }
        }
    });

    window.registerMathTopicGenerator('10', 'g10_quy_hoach_van_tai_co_khi', {
        title: '🚚 [Đề 2] Quy hoạch tuyến tính: Thuê xe vận tải & Xưởng cơ khí làm bàn sắt',
        shortLabel: '🚚 Vận tải & Cơ khí',
        keywords: /vận tải|thuê xe|xưởng cơ khí|bàn sắt|sơn tĩnh điện|cắt gọt/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const k = (step % 2) + 1;
            const peopleReq = 140 * k;
            const tonsReq   = 9 * k;
            const maxA      = 10 * k;
            const maxB      = 9 * k;
            const costA     = ((seed + step) % 3) + 4;
            const costB     = costA - 1;
            const minCost   = (5 * k * costA) + (4 * k * costB);
            return {
                q: '[Toán 10] Một công ty vận tải cần điều động xe chở ít nhất ' + F.m(peopleReq) + ' người và ' + F.m(tonsReq) + ' tấn hàng hóa tới khu vực hội chợ. Tại bãi xe có ' + F.m(maxA) + ' chiếc xe loại A và ' + F.m(maxB) + ' chiếc xe loại B. Mỗi xe loại A chở được tối đa ' + F.m('20') + ' người và ' + F.m('0,6') + ' tấn hàng với giá thuê ' + F.m(costA) + ' triệu đồng/chuyến; mỗi xe loại B chở được tối đa ' + F.m('10') + ' người và ' + F.m('1,5') + ' tấn hàng với giá thuê ' + F.m(costB) + ' triệu đồng/chuyến. Tìm chi phí thuê xe thấp nhất (đơn vị: triệu đồng) để hoàn thành công việc.',
                ans: String(minCost)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_dien_tich_mien_nghiem', {
        title: '📐 [Đề 2] Hệ BPT: Diện tích tam giác miền nghiệm của hệ 3 BPT',
        shortLabel: '📐 Diện tích Miền nghiệm',
        keywords: /diện tích của tam giác|tứ giác oabc|miền nghiệm của hệ/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const k = ((seed + step) % 4) + 1;
            const c1 = 2 * k;
            const c2 = 6 * k;
            return {
                q: '[Toán 10] Cho hệ bất phương trình bậc nhất hai ẩn: ' + F.m('x &minus; y + ' + c1 + ' &ge; 0') + ', ' + F.m('x + y &minus; ' + c2 + ' &le; 0') + ' và ' + F.m('y &ge; ' + k) + '. Biết miền nghiệm của hệ trên mặt phẳng tọa độ ' + F.m('Oxy') + ' là một miền tam giác ' + F.m('ABC') + ', hãy tính diện tích của tam giác ' + F.m('ABC') + '.',
                ans: String(9 * k * k)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_heron_duong_cao_goc', {
        title: '📏 [Đề 2] Tam giác: Công thức Heron, Đường cao hₐ & Hệ thức Cosin tìm góc',
        shortLabel: '📏 Heron & Đường cao hₐ',
        keywords: /đường cao|heron|ba cạnh|số đo góc/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const heronTriples = [
                { a: 14, b: 13, c: 15, s: 84, ha: 12 },
                { a: 4,  b: 13, c: 15, s: 24, ha: 12 },
                { a: 21, b: 10, c: 17, s: 84, ha: 8 },
                { a: 10, b: 13, c: 13, s: 60, ha: 12 }
            ];
            const mult = (step % 2) + 1;
            const tr = heronTriples[(seed + step) % heronTriples.length];
            return {
                q: '[Toán 10] Cho tam giác ' + F.m('ABC') + ' có độ dài ba cạnh lần lượt là ' + F.m('BC = a = ' + (tr.a * mult)) + ', ' + F.m('CA = b = ' + (tr.b * mult)) + ' và ' + F.m('AB = c = ' + (tr.c * mult)) + '. Tính độ dài đường cao ' + F.m('h<sub>a</sub>') + ' kẻ từ đỉnh ' + F.m('A') + ' của tam giác ' + F.m('ABC') + '.',
                ans: String(tr.ha * mult)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_tu_giac_hai_duong_cheo', {
        title: '🌳 [Đề 2] Toán thực tế: Mảnh vườn tứ giác lồi & Hai đường chéo (Kèm SVG)',
        shortLabel: '🌳 Mảnh vườn Tứ giác',
        keywords: /mảnh vườn|tứ giác lồi|đường chéo|tường rào/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const niceOAOB = [
                { oa: 8,  ob: 5,  ab: 7 },
                { oa: 8,  ob: 3,  ab: 7 },
                { oa: 15, ob: 7,  ab: 13 },
                { oa: 10, ob: 10, ab: 10 }
            ];
            const mult = (step % 2) + 1;
            const pk   = niceOAOB[(seed + step) % niceOAOB.length];
            const oa   = pk.oa * mult;
            const ob   = pk.ob * mult;
            const ab   = pk.ab * mult;
            const svg  = G10_ALL_SVG.quadGarden(oa * 2 + 4, ob * 2 + 6, oa, ob);
            return {
                q: '[Toán 10] Một mảnh vườn hình tứ giác lồi ' + F.m('ABCD') + ' có hai đường chéo ' + F.m('AC') + ' và ' + F.m('BD') + ' cắt nhau tại ' + F.m('O') + ' tạo thành góc ' + F.m(F.ang('AOB') + ' = 60°') + ' (như hình vẽ). Biết ' + F.m('OA = ' + oa + ' m') + ' và ' + F.m('OB = ' + ob + ' m') + ', tính chiều dài bức tường rào thẳng nối từ đỉnh ' + F.m('A') + ' đến đỉnh ' + F.m('B') + ' (đơn vị: mét).' + svg,
                ans: String(ab)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_do_dac_chay_rung_anten', {
        title: '📡 [Đề 2] Toán thực tế: Trạm kiểm lâm cháy rừng & Cột ăng-ten (Kèm SVG)',
        shortLabel: '📡 Cháy rừng & Ăng-ten',
        keywords: /kiểm lâm|cháy rừng|hồ nước|ăng-ten|tòa nhà|góc nâng/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                const abKm = ((seed + step) % 7) + 6;
                const maDist = (abKm * Math.sin(55 * Math.PI / 180)) / Math.sin(45 * Math.PI / 180);
                const ansRound = Math.round(maDist * 10) / 10;
                return {
                    q: '[Toán 10] Hai trạm kiểm lâm ' + F.m('A') + ' và ' + F.m('B') + ' đặt cách nhau ' + F.m(abKm + ' km') + '. Cùng lúc đó, hai trạm phát hiện một cột khói đám cháy rừng tại vị trí ' + F.m('M') + ' (như hình vẽ). Biết góc nhìn từ trạm ' + F.m('A') + ' và trạm ' + F.m('B') + ' tới đám cháy lần lượt là ' + F.m(F.ang('MAB') + ' = 80°') + ' và ' + F.m(F.ang('MBA') + ' = 55°') + '. Khoảng cách từ trạm kiểm lâm gần hơn tới đám cháy là bao nhiêu kilômét (làm tròn đến hàng phần mười)?' + G10_ALL_SVG.forestFire(abKm, 80, 55),
                    ans: String(ansRound)
                };
            } else {
                const hVal = (((seed + step) % 5) + 2) * 10;
                const ansCD = Math.round(hVal * (Math.sqrt(3) - 1) * 10) / 10;
                return {
                    q: '[Toán 10] Trên đỉnh một tòa nhà cao ' + F.m('h = ' + hVal + ' m') + ' có dựng một cột ăng-ten thẳng đứng ' + F.m('CD') + '. Từ vị trí quan sát ' + F.m('A') + ' trên mặt đất, người ta nhìn thấy đỉnh cột ' + F.m('C') + ' và chân cột ' + F.m('D') + ' dưới các góc nâng lần lượt là ' + F.m(F.ang('CAH') + ' = 60°') + ' và ' + F.m(F.ang('DAH') + ' = 45°') + ' (như hình vẽ). Tính chiều cao ' + F.m('CD') + ' của cột ăng-ten (đơn vị: mét, làm tròn đến hàng phần mười).' + G10_ALL_SVG.antennaTower(hVal, 45, 60),
                    ans: String(ansCD)
                };
            }
        }
    });

    // ===================================================================
    // PHẦN C: 7 MODULE ĐỀ THPT XUÂN PHƯƠNG - HÀ NỘI
    // ===================================================================
    window.registerMathTopicGenerator('10', 'g10_xp_pt_tich_tap_hop', {
        title: '🔢 [THPT Xuân Phương] Giao tập nghiệm phương trình tích trên Z & Tập N',
        shortLabel: '🔢 PT tích & Tập hợp',
        keywords: /phương trình tích|tập hợp|số tự nhiên|số nguyên|xuân phương/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const x1 = ((seed + step) % 3) + 1;
            const x2 = x1 + ((step % 3) + 1);
            const bMax = x2 + ((seed * 2 + step) % 4) + 2;
            const k = ((seed + step) % 3) + 2;
            const S = x1 + x2;
            const P = x1 * x2;
            return {
                q: '[Toán 10] Cho hai tập hợp ' + F.m('A = {x &isin; N | &minus;5 &lt; x &le; ' + bMax + '}') + ' và ' + F.m('B = {x &isin; Z | (' + k + 'x<sup>2</sup> + x)(x<sup>2</sup> &minus; ' + S + 'x + ' + P + ') = 0}') + '. Tính tổng tất cả các phần tử của tập hợp ' + F.m('A &cap; B') + '.',
                ans: String(S)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_xp_ven_ti_le_bong_da', {
        title: '⚽ [THPT Xuân Phương] Biểu đồ Ven tỉ lệ phần tử: Hội thi Bóng đá & Bóng rổ',
        shortLabel: '⚽ Bóng đá & Bóng rổ',
        keywords: /bóng đá|bóng rổ|gấp hai lần|một nửa|thể dục thể thao/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const xBoth = ((seed + step) % 8) + 5;
            const kMult = ((step % 2) + 2);
            const kText = (kMult === 2) ? 'hai lần' : 'ba lần';
            const bongRo = 2 * xBoth;
            const bongDa = kMult * bongRo;
            const totalUnion = bongDa + bongRo - xBoth;
            return {
                q: '[Toán 10] Trong hội thi thể dục thể thao của trường, lớp 10A có ' + F.m(totalUnion) + ' học sinh tham gia ít nhất một trong hai môn thi là Bóng đá và Bóng rổ. Biết rằng số học sinh tham gia đồng thời cả hai môn bằng một nửa số học sinh tham gia môn Bóng rổ và số học sinh tham gia môn Bóng đá gấp ' + kText + ' số học sinh tham gia môn Bóng rổ. Hỏi lớp 10A có bao nhiêu bạn tham gia thi môn Bóng đá?',
                ans: String(bongDa)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_xp_luong_giac_goc_tu', {
        title: '🧭 [THPT Xuân Phương] Lượng giác góc tù (90° < a < 180°) & Điểm M(x₀; y₀) (Kèm SVG)',
        shortLabel: '🧭 Lượng giác góc tù',
        keywords: /góc tù|đường tròn đơn vị|x0|y0|90/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const k = ((seed + step) % 6) + 3;
            const mAdd = ((seed * 2 + step) % 7) + 2;
            return {
                q: '[Toán 10] Trên nửa đường tròn đơn vị, cho góc ' + F.m('&alpha;') + ' thỏa mãn ' + F.m('90° &lt; &alpha; &lt; 180°') + ' và ' + F.m('sin &alpha; = ' + F.frac('1', k)) + ' (như hình vẽ). Tính giá trị của biểu thức ' + F.m('T = ' + F.frac('1', 'tan<sup>2</sup>&alpha;') + ' + ' + mAdd) + '.' + G10_ALL_SVG.unitCircleCoord('&alpha;'),
                ans: String((k * k - 1) + mAdd)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_xp_trong_rau_hoa', {
        title: '🌱 [THPT Xuân Phương] Quy hoạch tuyến tính: Trồng Rau & Hoa trên khu đất',
        shortLabel: '🌱 Trồng Rau & Hoa',
        keywords: /trồng rau|trồng hoa|khu đất|công lao động|ha/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const k = (step % 3) + 1;
            const totalHa   = 8 * k;
            const totalWork = 180 * k;
            const pRau = ((seed + step) % 3) + 3;
            const pHoa = pRau + 1;
            const maxProfit = Math.max((8 * k) * pRau, (6 * k) * pRau + (2 * k) * pHoa, (6 * k) * pHoa);
            return {
                q: '[Toán 10] Một gia đình dự định trồng rau và hoa trên một khu đất có diện tích tối đa ' + F.m(totalHa + ' ha') + '. Nếu trồng rau thì cần ' + F.m('20') + ' công và thu lợi ' + F.m(pRau) + ' triệu đồng trên mỗi ha; nếu trồng hoa thì cần ' + F.m('30') + ' công và thu lợi ' + F.m(pHoa) + ' triệu đồng trên mỗi ha. Biết tổng số công không được vượt quá ' + F.m(totalWork) + '. Tìm tổng lợi nhuận lớn nhất (đơn vị: triệu đồng) mà gia đình đó có thể thu được.',
                ans: String(maxProfit)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_xp_tham_so_m_he_bpt', {
        title: '🎯 [THPT Xuân Phương] Tìm tham số m để BPT đúng với mọi (x; y) thuộc Hệ BPT',
        shortLabel: '🎯 Tham số m Hệ BPT',
        keywords: /nghiệm đúng với mọi cặp số|tham số m|hệ bất phương trình/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const yMax = ((seed + step) % 3) + 3;
            const xAtB = 4 - yMax;
            const minF = (2 * xAtB) - (5 * yMax);
            const mMin = -minF;
            const mUpper = mMin + ((seed * 2 + step) % 8) + 5;
            return {
                q: '[Toán 10] Cho hệ bất phương trình ' + F.m('(I): x + y &ge; 4, 2x &minus; y &le; 2, y &le; ' + yMax) + '. Có bao nhiêu giá trị nguyên dương của tham số ' + F.m('m &isin; [10; ' + mUpper + ']') + ' để bất phương trình ' + F.m('2x &minus; 5y + m &ge; 0') + ' nghiệm đúng với mọi cặp số ' + F.m('(x; y)') + ' thỏa mãn hệ bất phương trình ' + F.m('(I)') + '?',
                ans: String(mUpper - mMin + 1)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_xp_lat_san_tu_giac', {
        title: '🧱 [THPT Xuân Phương] Toán thực tế: Chi phí lát gạch sân tứ giác lồi ABCD (Kèm SVG)',
        shortLabel: '🧱 Lát sân Tứ giác',
        keywords: /lát toàn bộ phần sân|gạch bê tông|tứ giác lồi abcd|đơn vị thi công/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const aSide = ((seed + step) % 3 + 2) * 2;
            const bSide = ((seed * 2 + step) % 4 + 3) * 2;
            const pricePerM2 = (((step % 3) + 2) * 100);
            const sABD = (3 * aSide * bSide) / 4;
            const sBCD = (aSide * aSide * Math.sqrt(3)) / 4;
            const totalCost = Math.round(pricePerM2 * (sABD + sBCD));
            return {
                q: '[Toán 10] Một gia đình muốn lát toàn bộ phần sân có dạng tứ giác lồi ' + F.m('ABCD') + ' bằng gạch bê tông giả đá như hình minh họa. Biết ' + F.m('AB = ' + bSide + ' m, BC = CD = ' + aSide + ' m, ' + F.ang('ABC') + ' = 150°, ' + F.ang('BCD') + ' = 120°') + '. Đơn vị thi công báo giá trọn gói ' + F.m(pricePerM2 + '.000') + ' đồng cho mỗi mét vuông sân. Tổng số tiền gia đình phải trả để lát toàn bộ phần sân trên là bao nhiêu nghìn đồng (làm tròn đến hàng đơn vị)?' + G10_ALL_SVG.pavedCourtyard(bSide, aSide, aSide, 150, 120),
                ans: String(totalCost)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_xp_chieu_cao_toa_nha', {
        title: '🏢 [THPT Xuân Phương] Đo chiều cao tòa nhà có cột ăng-ten từ 2 vị trí A, B (Kèm SVG)',
        shortLabel: '🏢 Chiều cao Tòa nhà',
        keywords: /nóc tòa nhà|cột ăng-ten|hai vị trí quan sát|chiều cao tòa nhà/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const anglePairs = [
                { angA: 50, angB: 30 },
                { angA: 60, angB: 30 },
                { angA: 55, angB: 35 }
            ];
            const pk = anglePairs[(seed + step) % anglePairs.length];
            const abDist = (((seed + step) % 4) + 2) * 10;
            const icAnt  = ((step % 4) + 3);
            const radA = pk.angA * Math.PI / 180;
            const radB = pk.angB * Math.PI / 180;
            const radDiff = (pk.angA - pk.angB) * Math.PI / 180;
            const chTotal = (abDist * Math.sin(radB) * Math.sin(radA)) / Math.sin(radDiff);
            const ihBuilding = Math.round((chTotal - icAnt) * 10) / 10;
            return {
                q: '[Toán 10] Trên một nóc tòa nhà có một cột ăng-ten cao ' + F.m('IC = ' + icAnt + ' m') + '. Từ hai vị trí quan sát ' + F.m('A') + ' và ' + F.m('B') + ' cách nhau ' + F.m(abDist + ' m') + ' (thẳng hàng với chân tòa nhà ' + F.m('H') + '), người ta nhìn thấy đỉnh ' + F.m('C') + ' của cột ăng-ten dưới góc nâng lần lượt là ' + F.m(pk.angA + '°') + ' và ' + F.m(pk.angB + '°') + ' so với phương nằm ngang (như hình vẽ). Tính chiều cao ' + F.m('IH') + ' của tòa nhà (đơn vị: mét, làm tròn đến hàng phần chục).' + G10_ALL_SVG.buildingTwoPoints(icAnt, abDist, pk.angA, pk.angB),
                ans: String(ihBuilding)
            };
        }
    });

    // ===================================================================
    // PHẦN D: 12 MODULE ĐỀ THPT QUANG TRUNG - ĐỐNG ĐA - HÀ NỘI
    // ===================================================================
    window.registerMathTopicGenerator('10', 'g10_qt_hop_tap_hop_truc_so', {
        title: '📏 [THPT Quang Trung] Hợp hai tập hợp A ∪ B & Biểu diễn nửa khoảng (Kèm SVG)',
        shortLabel: '📏 Hợp A ∪ B & Trục số',
        keywords: /hợp của hai tập hợp|nửa khoảng|trục số|quang trung/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const a = -(((seed + step) % 5) + 2);
            const b = ((seed * 2 + step) % 5) + 4;
            const c = ((step % 3));
            const d = b + ((seed + step * 2) % 5) + 2;
            const svg = G10_ALL_SVG.numberLineUnion(a, b, c, d, 'A = [' + a + '; ' + b + '), B = (' + c + '; ' + d + ']');
            if (step % 2 === 0) {
                return {
                    q: '[Toán 10] Cho hai tập hợp ' + F.m('A = [' + a + '; ' + b + ')') + ' và ' + F.m('B = (' + c + '; ' + d + ']') + ' (biểu diễn trên trục số như hình vẽ). Biết tập hợp ' + F.m('A &cup; B = [m; n]') + ', tính giá trị của biểu thức ' + F.m('T = n &minus; m') + '.' + svg,
                    ans: String(d - a)
                };
            } else {
                return {
                    q: '[Toán 10] Cho tập hợp ' + F.m('C = {x &isin; R | ' + c + ' &lt; x &le; ' + d + '}') + '. Khi viết tập hợp ' + F.m('C') + ' dưới dạng nửa khoảng ' + F.m('(a; b]') + ', hãy tính tổng ' + F.m('S = a + b') + ' của hai đầu mút.' + svg,
                    ans: String(c + d)
                };
            }
        }
    });

    window.registerMathTopicGenerator('10', 'g10_qt_menh_de_phu_dinh', {
        title: '🔍 [THPT Quang Trung] Mệnh đề & Mệnh đề phủ định chứa lượng từ ∀, ∃',
        shortLabel: '🔍 Mệnh đề phủ định',
        keywords: /mệnh đề phủ định|phát biểu nào|lượng từ/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const x0 = ((seed + step) % 6) + 2;
            const twoX0 = 2 * x0;
            const x0Sq  = x0 * x0;
            return {
                q: '[Toán 10] Lập mệnh đề phủ định ' + F.m('<span style="text-decoration:overline;">P</span>') + ' của mệnh đề ' + F.m('P: "&forall;x &isin; R, x<sup>2</sup> &minus; ' + twoX0 + 'x + ' + x0Sq + ' &gt; 0"') + '. Tìm giá trị thực của ' + F.m('x') + ' để mệnh đề phủ định ' + F.m('<span style="text-decoration:overline;">P</span>') + ' là một mệnh đề đúng.',
                ans: String(x0)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_qt_tham_so_m_nguyen_am', {
        title: '🎯 [THPT Quang Trung] Đếm số giá trị nguyên âm của m để [m; m+k] ∩ [0; +∞) ≠ ∅ (Kèm SVG)',
        shortLabel: '🎯 Nguyên âm m (A ∩ B ≠ ∅)',
        keywords: /nguyên âm của m|khác rỗng|m\+6/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const kLen = ((seed + step) % 8) + 4;
            const svg  = G10_ALL_SVG.numberLineUnion('m', 'm+' + kLen, 0, '+&infin;', 'Điều kiện để [m; m+' + kLen + '] &cap; [0; +&infin;) &ne; &empty;');
            return {
                q: '[Toán 10] Cho hai tập hợp ' + F.m('A = [m; m + ' + kLen + ']') + ' và ' + F.m('B = [0; +&infin;)') + ' (minh họa trên trục số). Có tất cả bao nhiêu giá trị nguyên âm của tham số ' + F.m('m') + ' để ' + F.m('A &cap; B &ne; &empty;') + '?' + svg,
                ans: String(kLen)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_qt_clb_the_thao_am_nhac', {
        title: '🎵 [THPT Quang Trung] Biểu đồ Ven: CLB Thể thao & CLB Âm nhạc (Kèm SVG)',
        shortLabel: '🎵 CLB Thể thao & Nhạc',
        keywords: /câu lạc bộ thể thao|câu lạc bộ âm nhạc|không tham gia/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const bothN  = ((seed + step) % 5) + 4;
            const sportN = bothN + ((seed * 2 + step) % 10) + 14;
            const musicN = bothN + ((seed * 3 + step) % 8) + 10;
            const noneN  = ((seed + step * 2) % 9) + 7;
            const totalN = (sportN + musicN - bothN) + noneN;
            const svg    = G10_ALL_SVG.vennTwoClubs(totalN, 'Thể thao', sportN, 'Âm nhạc', musicN, bothN);
            return {
                q: '[Toán 10] Lớp 10A có ' + F.m(totalN) + ' học sinh, trong đó có ' + F.m(sportN) + ' học sinh tham gia câu lạc bộ thể thao, ' + F.m(musicN) + ' học sinh tham gia câu lạc bộ âm nhạc, và có ' + F.m(bothN) + ' học sinh tham gia cả hai câu lạc bộ thể thao và âm nhạc (như biểu đồ Ven). Hỏi có bao nhiêu học sinh của lớp không tham gia cả hai câu lạc bộ trên?' + svg,
                ans: String(noneN)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_qt_dien_tich_tam_giac_he_bpt', {
        title: '📐 [THPT Quang Trung] Hệ BPT: Tính diện tích miền tam giác nghiệm x ≥ −a, x+y ≤ 0 (Kèm SVG)',
        shortLabel: '📐 Diện tích Δ Hệ BPT',
        keywords: /miền tam giác có diện tích|x\+y<=0|x>=-1/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const aVal = ((seed + step) % 6) + 1;
            const areaS = (aVal * aVal) / 2;
            return {
                q: '[Toán 10] Trên mặt phẳng tọa độ ' + F.m('Oxy') + ', miền nghiệm của hệ bất phương trình ' + F.m('x &ge; &minus;' + aVal + ', x + y &le; 0, y &ge; 0') + ' là một miền tam giác (phần tô màu trên hình vẽ). Tính diện tích ' + F.m('S') + ' của miền tam giác đó.' + G10_ALL_SVG.triangleSystemRegion(aVal),
                ans: String(areaS)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_qt_doc_do_thi_bpt_mn', {
        title: '📈 [THPT Quang Trung] Đồ thị BPT: Tìm hệ số m, n của mx + y ≥ n và tính 3m − n (Kèm SVG)',
        shortLabel: '📈 Đồ thị mx + y ≥ n',
        keywords: /nửa mặt phẳng bờ d|3m-n|mx\+y>=n/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const x0 = ((seed + step) % 4) + 2;
            const mCoeff = ((step % 3) + 1);
            const nConst = x0 * mCoeff;
            const ansS   = (3 * mCoeff) - nConst;
            return {
                q: '[Toán 10] Phần nửa mặt phẳng bờ ' + F.m('d') + ' không bị gạch (không chứa gốc tọa độ ' + F.m('O') + ') ở hình vẽ bên dưới là miền nghiệm của bất phương trình ' + F.m('mx + y &ge; n') + '. Tính giá trị của biểu thức ' + F.m('S = 3m &minus; n') + '.' + G10_ALL_SVG.halfPlaneLine(x0, nConst, true),
                ans: String(ansS)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_qt_cuc_tri_diem_x0_y0', {
        title: '🏆 [THPT Quang Trung] Hệ BPT: Tìm điểm (x₀; y₀) đạt GTLN của F(x; y) và tính y₀ − x₀ (Kèm SVG)',
        shortLabel: '🏆 Điểm cực đại (x₀; y₀)',
        keywords: /đạt giá trị lớn nhất tại điểm|y0-x0|5x\+4y/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const k = ((seed + step) % 4) + 1;
            const x0 = 3 * k;
            const y0 = 2 * k;
            const c1 = 5 * k;
            const c2 = 8 * k;
            const svg = G10_ALL_SVG.quadPolygonOxy('(' + x0 + ';' + y0 + ')', 4 * k, 5 * k);
            return {
                q: '[Toán 10] Cho hệ bất phương trình ' + F.m('x + y &le; ' + c1 + ', 2x + y &le; ' + c2 + ', x &ge; 0, y &ge; 0') + ' có miền nghiệm là tứ giác ' + F.m('OABC') + ' như hình vẽ. Biết biểu thức ' + F.m('F(x; y) = 5x + 4y') + ' đạt giá trị lớn nhất tại điểm ' + F.m('(x<sub>0</sub>; y<sub>0</sub>)') + '. Tính giá trị của hiệu ' + F.m('T = y<sub>0</sub> &minus; x<sub>0</sub>') + '.' + svg,
                ans: String(y0 - x0)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_qt_xuong_ban_ghe_cong_nhan', {
        title: '🪑 [THPT Quang Trung] Quy hoạch tuyến tính: Xưởng sản xuất Bàn & Ghế y ≤ 3,5x (Kèm SVG)',
        shortLabel: '🪑 Xưởng Bàn & Ghế',
        keywords: /xưởng sản xuất bàn và ghế|lắp ráp|hoàn thiện|3,5 lần/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const k = (step % 2) + 1;
            const wLapRap    = 3 * k;
            const wHoanThien = 4 * k;
            const pBan = (((seed + step) % 3) + 5) * 100;
            const pGhe = 450;
            const xOpt = 8 * k;
            const yOpt = 12 * k;
            const maxProfit = (xOpt * pBan) + (yOpt * pGhe);
            const svg = G10_ALL_SVG.quadPolygonOxy('(' + xOpt + ';' + yOpt + ')', 16 * k, 16 * k);
            return {
                q: '[Toán 10] Một xưởng sản xuất bàn và ghế. Một chiếc bàn cần ' + F.m('1,5') + ' giờ lắp ráp và ' + F.m('1') + ' giờ hoàn thiện; một chiếc ghế cần ' + F.m('1') + ' giờ lắp ráp và ' + F.m('2') + ' giờ hoàn thiện. Bộ phận lắp ráp có ' + F.m(wLapRap) + ' công nhân, bộ phận hoàn thiện có ' + F.m(wHoanThien) + ' công nhân, mỗi công nhân làm việc ' + F.m('8') + ' giờ/ngày. Biết số ghế tiêu thụ không quá ' + F.m('3,5') + ' lần số bàn, một chiếc bàn lãi ' + F.m(pBan) + ' nghìn đồng, một chiếc ghế lãi ' + F.m(pGhe) + ' nghìn đồng. Tính tổng tiền lãi cao nhất (đơn vị: nghìn đồng) mà xưởng thu được trong một ngày.' + svg,
                ans: String(maxProfit)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_qt_luong_giac_can_phan_so', {
        title: '🧭 [THPT Quang Trung] Lượng giác: Biểu thức chứa căn tan α = −√2 & Phân số tối giản m/n',
        shortLabel: '🧭 Biểu thức tan α = −√2',
        keywords: /phân số tối giản|m\+n|phụ nhau/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const a = ((seed + step) % 4) + 2;
            const b = ((step % 3) + 1);
            const c = ((seed * 2 + step) % 4) + 3;
            const d = c - 1;
            const mVal = a + b;
            const nVal = 1;
            const bStr = (b === 1) ? '' : String(b);
            return {
                q: '[Toán 10] Cho ' + F.m('tan &alpha; = &minus;' + F.sqrt('2')) + ' và biểu thức ' + F.m('P = ' + F.frac(a + ' sin &alpha; &minus; ' + bStr + F.sqrt('2') + ' cos &alpha;', c + ' sin &alpha; + ' + d + F.sqrt('2') + ' cos &alpha;')) + '. Biết ' + F.m('P = ' + F.frac('m', 'n')) + ' (với ' + F.m('m &isin; Z, n &isin; N*') + ' và ' + F.m(F.frac('m', 'n')) + ' là phân số tối giản). Tính giá trị của biểu thức ' + F.m('A = m + n') + '.',
                ans: String(mVal + nVal)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_qt_cot_co_dai_quan_sat', {
        title: '🚩 [THPT Quang Trung] Toán thực tế: Đo cột cờ trên đỉnh tòa nhà từ đài quan sát cao 5m (Kèm SVG)',
        shortLabel: '🚩 Cột cờ & Đài quan sát',
        keywords: /đài quan sát|cột cờ|anh việt|40|50/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const dist = ((seed + step) % 6 + 3) * 3;
            const hObs = ((step % 4) + 3);
            const angA = 40;
            const angB = 50;
            const svg  = G10_ALL_SVG.flagpoleObserver(dist, hObs, angA, angB);
            const radA = angA * Math.PI / 180;
            const radB = angB * Math.PI / 180;
            if (step % 2 === 0) {
                const h1Building = Math.round((dist * Math.tan(radA) + hObs) * 10) / 10;
                return {
                    q: '[Toán 10] Để đo chiều cao của một tòa nhà và cột cờ trên đỉnh tòa nhà, anh Việt đứng trên một đài quan sát có tầm mắt ' + F.m('C') + ' cao ' + F.m(hObs + ' m') + ' so với mặt đất, cách chân tòa nhà ' + F.m(dist + ' m') + ' (như hình vẽ). Anh đo được góc nâng nhìn chân cột cờ ' + F.m('A') + ' là ' + F.m(angA + '°') + ' và góc nâng nhìn đỉnh cột cờ ' + F.m('B') + ' là ' + F.m(angB + '°') + '. Tính chiều cao ' + F.m('AE') + ' của tòa nhà (đơn vị: mét, làm tròn đến hàng phần mười).' + svg,
                    ans: String(h1Building)
                };
            } else {
                const h2Flag = Math.round(dist * (Math.tan(radB) - Math.tan(radA)) * 10) / 10;
                return {
                    q: '[Toán 10] Để đo chiều cao của một cột cờ ' + F.m('AB') + ' trên đỉnh một tòa nhà, anh Việt đứng trên một đài quan sát có tầm mắt ' + F.m('C') + ' cao ' + F.m(hObs + ' m') + ' so với mặt đất, cách tòa nhà ' + F.m(dist + ' m') + ' (như hình vẽ). Anh đo được góc nâng nhìn chân cột cờ ' + F.m('A') + ' là ' + F.m(angA + '°') + ' và góc nâng nhìn đỉnh cột cờ ' + F.m('B') + ' là ' + F.m(angB + '°') + '. Tính chiều cao ' + F.m('AB') + ' của cột cờ (đơn vị: mét, làm tròn đến hàng phần mười).' + svg,
                    ans: String(h2Flag)
                };
            }
        }
    });

    window.registerMathTopicGenerator('10', 'g10_qt_hai_tau_danh_ca', {
        title: '⛵ [THPT Quang Trung] Toán thực tế: Hai tàu đánh cá xuất phát từ bến A tạo góc 75° (Kèm SVG)',
        shortLabel: '⛵ Hai tàu đánh cá',
        keywords: /hai tàu đánh cá|bến a|hải lí|75/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const v1 = ((seed + step) % 5 + 4) * 2;
            const v2 = v1 + 4;
            const tHours = 2.5;
            const s1 = v1 * tHours;
            const s2 = v2 * tHours;
            const rad75 = 75 * Math.PI / 180;
            const distD = Math.sqrt((s1 * s1) + (s2 * s2) - (2 * s1 * s2 * Math.cos(rad75)));
            const ansRound = Math.round(distD * 10) / 10;
            return {
                q: '[Toán 10] Hai tàu đánh cá cùng xuất phát từ bến ' + F.m('A') + ' và đi thẳng đều về hai vùng biển khác nhau theo hai hướng tạo với nhau một góc ' + F.m('75°') + ' (như hình vẽ). Tàu thứ nhất đi với tốc độ ' + F.m(v1) + ' hải lí/giờ và tàu thứ hai đi với tốc độ ' + F.m(v2) + ' hải lí/giờ. Hỏi sau ' + F.m('2,5') + ' giờ thì khoảng cách giữa hai tàu là bao nhiêu hải lí (làm tròn kết quả đến hàng phần mười)?' + G10_ALL_SVG.twoBoatsAngle(s1 + ' hl', s2 + ' hl', 75),
                ans: String(ansRound)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_qt_ba_duong_cao_ban_kinh_r', {
        title: '⭕ [THPT Quang Trung] Tam giác: Hệ thức 1/hₐ + 1/h_b + 1/h_c = 1/r & Bán kính R (Kèm SVG)',
        shortLabel: '⭕ 3 Đường cao & Bán kính r',
        keywords: /đường tròn nội tiếp|ba đường cao|1\/ha|1\/r/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                const k = ((seed + step) % 6) + 2;
                const ha = 3 * k;
                const hb = 6 * k;
                const hc = 2 * k;
                return {
                    q: '[Toán 10] Cho tam giác ' + F.m('ABC') + ' có độ dài ba đường cao kẻ từ các đỉnh ' + F.m('A, B, C') + ' lần lượt là ' + F.m('h<sub>a</sub> = ' + ha + ', h<sub>b</sub> = ' + hb + ', h<sub>c</sub> = ' + hc) + '. Áp dụng hệ thức ' + F.m(F.frac('1', 'h<sub>a</sub>') + ' + ' + F.frac('1', 'h<sub>b</sub>') + ' + ' + F.frac('1', 'h<sub>c</sub>') + ' = ' + F.frac('1', 'r')) + ', hãy tính bán kính ' + F.m('r') + ' của đường tròn nội tiếp tam giác ' + F.m('ABC') + '.' + G10_ALL_SVG.triangleIncircle('1/r = 1/hₐ + 1/h_b + 1/h_c'),
                    ans: String(k)
                };
            } else {
                const aEdge = ((seed + step) % 9) + 6;
                return {
                    q: '[Toán 10] Cho tam giác ' + F.m('ABC') + ' biết cạnh ' + F.m('BC = ' + aEdge) + ', góc ' + F.m(F.ang('B') + ' = 105°') + ' và góc ' + F.m(F.ang('C') + ' = 45°') + '. Tính bán kính ' + F.m('R') + ' của đường tròn ngoại tiếp tam giác ' + F.m('ABC') + '.' + G10_ALL_SVG.triangleIncircle('BC = ' + aEdge + ', B = 105°, C = 45°'),
                    ans: String(aEdge)
                };
            }
        }
    });

    if (typeof window.refreshAdminTopicDropdown === 'function') {
        window.refreshAdminTopicDropdown();
    }
})();
//=====================
(function() {
    if (typeof window.registerMathTopicGenerator !== 'function') return;
    const F = window.IMATHS_FMT;

    const G10_HV_SVG = {
        bptFracIntercept: function(xLbl, yLbl) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 240 145" width="230" height="138">' +
                '<polygon points="158,12 225,12 225,132 78,132" fill="rgba(148,163,184,0.32)"/>' +
                '<line x1="18" y1="62" x2="225" y2="62" stroke="#60a5fa" stroke-width="1.5"/><polygon points="229,62 221,58 221,66" fill="#60a5fa"/>' +
                '<line x1="102" y1="135" x2="102" y2="12" stroke="#60a5fa" stroke-width="1.5"/><polygon points="102,8 98,16 106,16" fill="#60a5fa"/>' +
                '<line x1="78" y1="132" x2="158" y2="12" stroke="#f8fafc" stroke-width="2.2"/>' +
                '<circle cx="102" cy="62" r="3" fill="#38bdf8"/>' +
                '<circle cx="132" cy="62" r="3.5" fill="#fde047"/>' +
                '<circle cx="102" cy="107" r="3.5" fill="#fde047"/>' +
                '<text x="89" y="76" fill="#cbd5e1" font-size="10.5" font-style="italic">O</text>' +
                '<text x="124" y="52" fill="#fde047" font-size="11" font-weight="bold">' + xLbl + '</text>' +
                '<text x="80" y="111" fill="#fde047" font-size="11" font-weight="bold">' + yLbl + '</text>' +
                '<text x="216" y="54" fill="#60a5fa" font-size="11" font-style="italic">x</text>' +
                '<text x="88" y="20" fill="#60a5fa" font-size="11" font-style="italic">y</text>' +
            '</svg></div>';
        },
        numberLineSet: function(aVal, bVal, subTxt) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 100" width="230" height="95">' +
                '<line x1="18" y1="52" x2="226" y2="52" stroke="#94a3b8" stroke-width="1.8"/><polygon points="231,52 222,47 222,57" fill="#94a3b8"/>' +
                '<line x1="68" y1="52" x2="168" y2="52" stroke="#4ade80" stroke-width="3.2"/>' +
                '<text x="64" y="56" fill="#fde047" font-size="14" font-weight="bold">[</text>' +
                '<text x="164" y="56" fill="#38bdf8" font-size="14" font-weight="bold">)</text>' +
                '<text x="60" y="74" fill="#fde047" font-size="11" font-weight="bold">' + aVal + '</text>' +
                '<text x="162" y="74" fill="#38bdf8" font-size="11" font-weight="bold">' + bVal + '</text>' +
                '<text x="122" y="24" fill="#cbd5e1" font-size="10.5" font-weight="bold" text-anchor="middle">' + subTxt + '</text>' +
            '</svg></div>';
        },
        triangleGeneral: function(cLbl, bLbl, aLbl, subCenter) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 240 135" width="230" height="130">' +
                '<polygon points="92,18 36,112 204,112" fill="rgba(56,189,248,0.14)" stroke="#38bdf8" stroke-width="2.2"/>' +
                '<circle cx="92" cy="18" r="3" fill="#fde047"/><circle cx="36" cy="112" r="3" fill="#fde047"/><circle cx="204" cy="112" r="3" fill="#fde047"/>' +
                '<text x="88" y="13" fill="#fde047" font-size="11.5" font-weight="bold">A</text>' +
                '<text x="22" y="116" fill="#fde047" font-size="11.5" font-weight="bold">B</text>' +
                '<text x="210" y="116" fill="#fde047" font-size="11.5" font-weight="bold">C</text>' +
                '<text x="42" y="62" fill="#4ade80" font-size="10.5" font-weight="bold">' + cLbl + '</text>' +
                '<text x="156" y="62" fill="#4ade80" font-size="10.5" font-weight="bold">' + bLbl + '</text>' +
                '<text x="120" y="127" fill="#4ade80" font-size="10.5" font-weight="bold" text-anchor="middle">' + aLbl + '</text>' +
                '<text x="115" y="86" fill="#fde047" font-size="10.5" font-weight="bold" text-anchor="middle">' + subCenter + '</text>' +
            '</svg></div>';
        },
        gridTriangleRegion: function(kScale) {
            const xA = 1 * kScale, yA = 2 * kScale;
            const xB = 2 * kScale, yB = 1 * kScale;
            const cut3 = 3 * kScale;
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 145" width="235" height="138">' +
                '<line x1="45" y1="25" x2="215" y2="25" stroke="#1e293b" stroke-width="1"/>' +
                '<line x1="45" y1="50" x2="215" y2="50" stroke="#1e293b" stroke-width="1"/>' +
                '<line x1="45" y1="75" x2="215" y2="75" stroke="#1e293b" stroke-width="1"/>' +
                '<line x1="105" y1="12" x2="105" y2="130" stroke="#1e293b" stroke-width="1"/>' +
                '<line x1="135" y1="12" x2="135" y2="130" stroke="#1e293b" stroke-width="1"/>' +
                '<line x1="165" y1="12" x2="165" y2="130" stroke="#1e293b" stroke-width="1"/>' +
                '<polygon points="75,100 105,50 135,75" fill="rgba(74,222,128,0.35)" stroke="#4ade80" stroke-width="2.2"/>' +
                '<line x1="25" y1="100" x2="222" y2="100" stroke="#94a3b8" stroke-width="1.5"/><polygon points="226,100 218,96 218,104" fill="#94a3b8"/>' +
                '<line x1="75" y1="132" x2="75" y2="12" stroke="#94a3b8" stroke-width="1.5"/><polygon points="75,8 71,16 79,16" fill="#94a3b8"/>' +
                '<line x1="57" y1="130" x2="126" y2="15" stroke="#38bdf8" stroke-width="1.5"/>' +
                '<line x1="45" y1="125" x2="195" y2="25" stroke="#38bdf8" stroke-width="1.5"/>' +
                '<line x1="55" y1="8" x2="185" y2="116" stroke="#f87171" stroke-width="1.5"/>' +
                '<circle cx="75" cy="100" r="3" fill="#fde047"/><circle cx="105" cy="50" r="3.5" fill="#fde047"/><circle cx="135" cy="75" r="3.5" fill="#fde047"/>' +
                '<text x="62" y="114" fill="#cbd5e1" font-size="10">O</text>' +
                '<text x="100" y="114" fill="#fde047" font-size="10" font-weight="bold">' + xA + '</text>' +
                '<text x="131" y="114" fill="#fde047" font-size="10" font-weight="bold">' + xB + '</text>' +
                '<text x="161" y="114" fill="#cbd5e1" font-size="10">' + cut3 + '</text>' +
                '<text x="60" y="78" fill="#fde047" font-size="10" font-weight="bold">' + yB + '</text>' +
                '<text x="60" y="53" fill="#fde047" font-size="10" font-weight="bold">' + yA + '</text>' +
                '<text x="108" y="45" fill="#4ade80" font-size="10" font-weight="bold">A(' + xA + ';' + yA + ')</text>' +
                '<text x="142" y="76" fill="#4ade80" font-size="10" font-weight="bold">B(' + xB + ';' + yB + ')</text>' +
            '</svg></div>';
        },
        vennToanVan: function(totalHS, toanHS, bothHS, noneHS) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 135" width="235" height="130">' +
                '<rect x="12" y="10" width="221" height="115" rx="10" fill="#040b16" stroke="#475569" stroke-width="1.5"/>' +
                '<circle cx="95" cy="70" r="38" fill="rgba(56,189,248,0.22)" stroke="#38bdf8" stroke-width="1.8"/>' +
                '<circle cx="145" cy="70" r="38" fill="rgba(250,204,21,0.22)" stroke="#fde047" stroke-width="1.8"/>' +
                '<text x="72" y="65" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Thích Toán</text>' +
                '<text x="72" y="80" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">(' + toanHS + ')</text>' +
                '<text x="168" y="65" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">Chỉ Văn</text>' +
                '<text x="168" y="80" fill="#4ade80" font-size="11" font-weight="bold" text-anchor="middle">(?)</text>' +
                '<text x="120" y="74" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">' + bothHS + '</text>' +
                '<text x="122" y="24" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">Lớp: ' + totalHS + ' HS (Không thích cả 2: ' + noneHS + ' HS)</text>' +
            '</svg></div>';
        },
        pentagonRegion: function(xC, yC, xD, yD) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 142" width="235" height="136">' +
                '<polygon points="52,110 52,38 118,38 158,82 158,110" fill="rgba(56,189,248,0.24)" stroke="#38bdf8" stroke-width="2"/>' +
                '<line x1="20" y1="110" x2="225" y2="110" stroke="#94a3b8" stroke-width="1.5"/><polygon points="229,110 221,106 221,114" fill="#94a3b8"/>' +
                '<line x1="52" y1="132" x2="52" y2="12" stroke="#94a3b8" stroke-width="1.5"/><polygon points="52,8 48,16 56,16" fill="#94a3b8"/>' +
                '<circle cx="52" cy="38" r="3" fill="#fde047"/><circle cx="118" cy="38" r="3.8" fill="#4ade80"/>' +
                '<circle cx="158" cy="82" r="3" fill="#fde047"/><circle cx="158" cy="110" r="3" fill="#fde047"/>' +
                '<text x="38" y="123" fill="#cbd5e1" font-size="10">O</text>' +
                '<text x="18" y="42" fill="#fde047" font-size="10" font-weight="bold">A(0;' + yC + ')</text>' +
                '<text x="98" y="28" fill="#4ade80" font-size="10.5" font-weight="bold">C(' + xC + ';' + yC + ')</text>' +
                '<text x="163" y="84" fill="#fde047" font-size="10" font-weight="bold">D(' + xD + ';' + yD + ')</text>' +
                '<text x="145" y="124" fill="#cbd5e1" font-size="10">E(' + xD + ';0)</text>' +
            '</svg></div>';
        },
        fourAnglesBuilding: function(lDist, a1, a2, b1, b2) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 255 148" width="240" height="140">' +
                '<line x1="18" y1="124" x2="238" y2="124" stroke="#94a3b8" stroke-width="1.8"/>' +
                '<line x1="36" y1="16" x2="36" y2="124" stroke="#38bdf8" stroke-width="2.5"/>' +
                '<rect x="36" y="116" width="8" height="8" fill="none" stroke="#cbd5e1" stroke-width="1.2"/>' +
                '<line x1="36" y1="16" x2="132" y2="124" stroke="#fde047" stroke-width="1.6"/>' +
                '<line x1="36" y1="66" x2="132" y2="124" stroke="#4ade80" stroke-width="1.6"/>' +
                '<line x1="36" y1="16" x2="222" y2="124" stroke="#fde047" stroke-width="1.5" stroke-dasharray="4 2"/>' +
                '<line x1="36" y1="66" x2="222" y2="124" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="4 2"/>' +
                '<circle cx="36" cy="16" r="3.5" fill="#ef4444"/><circle cx="36" cy="66" r="3.5" fill="#fde047"/>' +
                '<circle cx="36" cy="124" r="3" fill="#cbd5e1"/><circle cx="132" cy="124" r="3.5" fill="#4ade80"/><circle cx="222" cy="124" r="3.5" fill="#38bdf8"/>' +
                '<text x="21" y="20" fill="#ef4444" font-size="11" font-weight="bold">O</text>' +
                '<text x="15" y="45" fill="#fde047" font-size="11" font-weight="bold" font-style="italic">h</text>' +
                '<text x="21" y="70" fill="#fde047" font-size="11" font-weight="bold">C</text>' +
                '<text x="21" y="136" fill="#cbd5e1" font-size="11" font-weight="bold">H</text>' +
                '<text x="128" y="138" fill="#4ade80" font-size="11" font-weight="bold">B</text>' +
                '<text x="218" y="138" fill="#38bdf8" font-size="11" font-weight="bold">A</text>' +
                '<text x="172" y="137" fill="#fde047" font-size="10.5" font-weight="bold">l = ' + lDist + 'm</text>' +
                '<text x="86" y="119" fill="#4ade80" font-size="9.5" font-weight="bold">' + b1 + '°/' + b2 + '°</text>' +
                '<text x="166" y="119" fill="#38bdf8" font-size="9.5" font-weight="bold">' + a1 + '°/' + a2 + '°</text>' +
            '</svg></div>';
        }
    };

    window.registerMathTopicGenerator('10', 'g10_hv_mien_nghiem_phan_so', {
        title: '📈 Đồ thị BPT: Đường biên cắt trục tại điểm phân số (THPT Hòa Vang - Câu 1 Phần I)',
        shortLabel: '📈 Đồ thị BPT (Câu 1)',
        keywords: /không tô đậm|kể cả đường thẳng|3\/2|hòa vang/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const a = ((step % 3) + 2);
            const c = a * (((seed + step) % 3) + 1) + 1;
            const xLbl = c + '/' + a;
            const yLbl = '&minus;' + c;
            const svg  = G10_HV_SVG.bptFracIntercept(xLbl, '-' + c);
            return {
                q: '[Toán 10] Trong mặt phẳng ' + F.m('Oxy') + ', phần nửa mặt phẳng không tô đậm (kể cả bờ là đường thẳng đi qua ' + F.m('(' + F.frac(c, a) + '; 0)') + ' và ' + F.m('(0; ' + yLbl + ')') + ', chứa gốc tọa độ ' + F.m('O') + ') trong hình vẽ bên dưới biểu diễn miền nghiệm của bất phương trình có dạng ' + F.m('ax &minus; y &le; c') + '. Tính tổng ' + F.m('T = a + c') + '.' + svg,
                ans: String(a + c)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_hv_hieu_phan_bu_truc_so', {
        title: '📏 Tập hợp: Phép hiệu A \\ B & Phần bù C_R(A) trên trục số (Câu 2, 6 Phần I & Câu 3 Phần II)',
        shortLabel: '📏 Hiệu A\\B & Phần bù',
        keywords: /phần bù|a\\b|c_ra|hiệu hai tập hợp/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const mode = step % 3;
            if (mode === 0) {
                const a = -(((seed + step) % 4) + 1);
                const c = ((step % 4) + 2);
                const b = c + ((seed * 2 + step) % 4) + 2;
                const d = b + 4;
                const svg = G10_HV_SVG.numberLineSet(a, c, 'A = (' + a + '; ' + b + '], B = (' + c + '; ' + d + ')');
                return {
                    q: '[Toán 10] Cho hai tập hợp ' + F.m('A = (' + a + '; ' + b + ']') + ' và ' + F.m('B = (' + c + '; ' + d + ')') + '. Biết tập hợp ' + F.m('A \\ B = (m; n]') + ' (minh họa như hình vẽ), hãy tính giá trị của biểu thức ' + F.m('P = n &minus; m') + '.' + svg,
                    ans: String(c - a)
                };
            } else if (mode === 1) {
                const a = -(((seed + step) % 5) + 2);
                const b = ((seed * 2 + step) % 6) + 4;
                const svg = G10_HV_SVG.numberLineSet(a, b, 'Tìm phần bù C_R(A) của A = [' + a + '; ' + b + ')');
                return {
                    q: '[Toán 10] Cho tập hợp ' + F.m('A = [' + a + '; ' + b + ')') + ' như hình vẽ. Biết phần bù của ' + F.m('A') + ' trong ' + F.m('R') + ' có dạng ' + F.m('C<sub>R</sub>A = (&minus;&infin;; m) &cup; [n; +&infin;)') + '. Tính tổng ' + F.m('T = m + n') + '.' + svg,
                    ans: String(a + b)
                };
            } else {
                const b = ((seed + step) % 4) + 1;
                const a = b + ((step % 4) + 2);
                const countInt = 2 * b + 1;
                const svg = G10_HV_SVG.numberLineSet(-b, b, 'A = (-' + a + '; ' + a + '), B = [-' + b + '; ' + b + ']');
                return {
                    q: '[Toán 10] Cho hai tập hợp ' + F.m('A = (&minus;' + a + '; ' + a + ')') + ' và ' + F.m('B = [&minus;' + b + '; ' + b + ']') + '. Tập hợp ' + F.m('A &cap; B') + ' có tất cả bao nhiêu số nguyên?' + svg,
                    ans: String(countInt)
                };
            }
        }
    });

    window.registerMathTopicGenerator('10', 'g10_hv_tinh_sin_tu_dien_tich', {
        title: '📐 Tam giác: Tính sin A khi biết diện tích S và hai cạnh AB, AC (Câu 3, 4 Phần I)',
        shortLabel: '📐 Tính sin A từ S',
        keywords: /giá trị sin a|có diện tích bằng|bán kính đường tròn ngoại tiếp/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const cases = [
                { c: 8,  b: 18, s: 64, num: 8, den: 9 },
                { c: 10, b: 12, s: 48, num: 4, den: 5 },
                { c: 6,  b: 14, s: 36, num: 6, den: 7 },
                { c: 12, b: 15, s: 54, num: 3, den: 5 },
                { c: 9,  b: 16, s: 48, num: 2, den: 3 }
            ];
            const pk  = cases[(seed + step) % cases.length];
            const svg = G10_HV_SVG.triangleGeneral('AB=' + pk.c, 'AC=' + pk.b, 'BC=a', 'S = ' + pk.s);
            if (step % 2 === 0) {
                return {
                    q: '[Toán 10] Cho tam giác ' + F.m('ABC') + ' có độ dài cạnh ' + F.m('AB = ' + pk.c + ' cm, AC = ' + pk.b + ' cm') + ' và có diện tích bằng ' + F.m(pk.s + ' cm<sup>2</sup>') + ' (như hình vẽ). Biết ' + F.m('sin A = ' + F.frac('m', 'n')) + ' (với ' + F.m(F.frac('m', 'n')) + ' là phân số tối giản), tính tổng ' + F.m('T = m + n') + '.' + svg,
                    ans: String(pk.num + pk.den)
                };
            } else {
                const aSide = 2 * pk.num * (((seed + step) % 3) + 1);
                const radiusR = (aSide * pk.den) / (2 * pk.num);
                return {
                    q: '[Toán 10] Cho tam giác ' + F.m('ABC') + ' có ' + F.m('AB = ' + pk.c + ' cm, AC = ' + pk.b + ' cm') + ', diện tích ' + F.m('S = ' + pk.s + ' cm<sup>2</sup>') + ' và cạnh ' + F.m('BC = ' + aSide + ' cm') + '. Áp dụng định lý sin ' + F.m(F.frac('a', 'sin A') + ' = 2R') + ', hãy tính bán kính ' + F.m('R') + ' của đường tròn ngoại tiếp tam giác ' + F.m('ABC') + '.' + svg,
                    ans: String(radiusR)
                };
            }
        }
    });

    window.registerMathTopicGenerator('10', 'g10_hv_diem_thuoc_bpt', {
        title: '📍 Bất phương trình: Kiểm tra điểm thuộc miền nghiệm 2x + y < c (Câu 5, 10 Phần I)',
        shortLabel: '📍 Điểm thuộc BPT',
        keywords: /không thuộc miền nghiệm|2x\+y<1|hệ bất phương trình nào/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const a = ((seed + step) % 4) + 2;
            const b = ((step % 3) + 1);
            const x0 = ((seed * 2 + step) % 4) + 1;
            const y0 = ((seed + step * 3) % 4) + 1;
            const valAtM = (a * x0) + (b * y0);
            const minM   = valAtM + 1;
            return {
                q: '[Toán 10] Trong mặt phẳng tọa độ ' + F.m('Oxy') + ', cho điểm ' + F.m('Q(' + x0 + '; ' + y0 + ')') + ' và bất phương trình bậc nhất hai ẩn ' + F.m(a + 'x + ' + b + 'y &lt; m') + '. Tìm giá trị nguyên nhỏ nhất của tham số ' + F.m('m') + ' để điểm ' + F.m('Q') + ' thuộc miền nghiệm của bất phương trình đã cho.',
                ans: String(minM)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_hv_goc_bu_nhau', {
        title: '🧭 Lượng giác: Đẳng thức hai góc bù nhau (180° − α) với 90° < α < 180° (Câu 7 Phần I)',
        shortLabel: '🧭 Góc bù (180° − α)',
        keywords: /180-\alpha|đẳng thức nào sau đây sai|90<\alpha<180/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const a = ((seed + step) % 6) + 2;
            const b = ((seed * 2 + step) % 5) + 3;
            const c = ((step % 7) + 4);
            const ansP = a + b + c;
            return {
                q: '[Toán 10] Với góc ' + F.m('&alpha;') + ' thỏa mãn ' + F.m('90° &lt; &alpha; &lt; 180°') + ', áp dụng tính chất giá trị lượng giác của hai góc bù nhau, hãy tính giá trị của biểu thức ' + F.m('P = ' + a + ' &middot; ' + F.frac('sin(180° &minus; &alpha;)', 'sin &alpha;') + ' &minus; ' + b + ' &middot; ' + F.frac('cos(180° &minus; &alpha;)', 'cos &alpha;') + ' &minus; ' + c + ' &middot; ' + F.frac('tan(180° &minus; &alpha;)', 'tan &alpha;')) + '.',
                ans: String(ansP)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_hv_menh_de_chia_het', {
        title: '🧠 Mệnh đề: Tính đúng sai của mệnh đề chia hết n(n+1) & Số chính phương (Câu 1 Phần II)',
        shortLabel: '🧠 Mệnh đề Chia hết',
        keywords: /n\(n\+1\)|số chính phương|hình thoi|4x\^2-1=0/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const evenConst = (((seed + step) % 5) + 2) * 2;
            const isSquareCase = (step % 2 === 0);
            const numCheck = isSquareCase
                ? Math.pow(((seed + step) % 5) + 4, 2)
                : (Math.pow(((seed + step) % 5) + 3, 2) + 1);
            const trueCount = isSquareCase ? 2 : 1;
            return {
                q: '[Toán 10] Cho 4 mệnh đề sau:<br>' +
                   '(1) ' + F.m('"&forall;n &isin; N, n(n + 1) + ' + evenConst + ' chia hết cho 2"') + ';<br>' +
                   '(2) ' + F.m('"&exist;x &isin; Z, 4x<sup>2</sup> &minus; 1 = 0"') + ';<br>' +
                   '(3) "Một tứ giác là hình thoi khi và chỉ khi nó có hai đường chéo vuông góc với nhau";<br>' +
                   '(4) "' + F.m(numCheck) + ' là số chính phương".<br>' +
                   'Hỏi trong 4 mệnh đề trên có tất cả bao nhiêu mệnh đề đúng?',
                ans: String(trueCount)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_hv_tap_nghiem_nguyen_pt', {
        title: '🔢 Tập hợp: Liệt kê phần tử A = {x ∈ Z | ax² + bx + c = 0} & Giao A ∩ B (Câu 9, 11 Phần I)',
        shortLabel: '🔢 Nghiệm nguyên ax²+bx+c=0',
        keywords: /2x\^2\+3x-5=0|liệt kê các phần tử|-2;-1;3;5;7/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                const a  = ((step % 3) + 2);
                const x1 = ((seed + step) % 5) + 1;
                const p  = a * (((seed * 2 + step) % 3) + 1) + 1;
                const bCoeff = p - (a * x1);
                const cCoeff = p * x1;
                const bStr = (bCoeff >= 0) ? ('+ ' + bCoeff + 'x') : ('&minus; ' + Math.abs(bCoeff) + 'x');
                return {
                    q: '[Toán 10] Cho tập hợp ' + F.m('A = {x &isin; Z | ' + a + 'x<sup>2</sup> ' + bStr + ' &minus; ' + cCoeff + ' = 0}') + '. Tìm phần tử nguyên duy nhất của tập hợp ' + F.m('A') + '.',
                    ans: String(x1)
                };
            } else {
                const c1 = -(((seed + step) % 4) + 2);
                const c2 = ((seed * 2 + step) % 4) + 4;
                const c3 = c2 + ((step % 3) + 2);
                const onlyA1 = -1, onlyA2 = 3;
                const onlyB1 = c3 + 4, onlyB2 = c3 + 6;
                const sumCommon = c1 + c2 + c3;
                return {
                    q: '[Toán 10] Cho hai tập hợp ' + F.m('A = {' + c1 + '; ' + onlyA1 + '; ' + onlyA2 + '; ' + c2 + '; ' + c3 + '}') + ' và ' + F.m('B = {' + c1 + '; ' + c2 + '; ' + c3 + '; ' + onlyB1 + '; ' + onlyB2 + '}') + '. Tính tổng tất cả các phần tử thuộc tập hợp giao ' + F.m('A &cap; B') + '.',
                    ans: String(sumCommon)
                };
            }
        }
    });

    window.registerMathTopicGenerator('10', 'g10_hv_tinh_cos_b_ba_canh', {
        title: '📐 Tam giác: Tính cos B khi biết độ dài 3 cạnh AB, BC, AC (Câu 12 Phần I - Kèm SVG)',
        shortLabel: '📐 Tính cos B từ 3 cạnh',
        keywords: /tính cos b|bc=6|ac=7|ab=5/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const niceCosTriples = [
                { a: 6,  b: 7,  c: 5,  cosVal: 0.2 },
                { a: 5,  b: 6,  c: 5,  cosVal: 0.28 },
                { a: 8,  b: 7,  c: 5,  cosVal: 0.5 },
                { a: 10, b: 12, c: 10, cosVal: 0.28 },
                { a: 4,  b: 4,  c: 5,  cosVal: 0.625 }
            ];
            const mult = (step % 2) + 1;
            const pk   = niceCosTriples[(seed + step) % niceCosTriples.length];
            const a = pk.a * mult, b = pk.b * mult, c = pk.c * mult;
            const svg = G10_HV_SVG.triangleGeneral('AB=' + c, 'AC=' + b, 'BC=' + a, 'cos B = ?');
            return {
                q: '[Toán 10] Cho tam giác ' + F.m('ABC') + ' có các cạnh ' + F.m('BC = ' + a + ' cm, AC = ' + b + ' cm, AB = ' + c + ' cm') + ' (như hình vẽ). Tính giá trị của ' + F.m('cos B') + ' (viết kết quả dưới dạng số thập phân).' + svg,
                ans: String(pk.cosVal)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_hv_he_bpt_tam_giac_luoi', {
        title: '📊 Hệ BPT: Tìm GTLN của F(x; y) = ax + by trên miền tam giác lưới Oxy (Câu 2 Phần II)',
        shortLabel: '📊 GTLN Δ Lưới Oxy',
        keywords: /-x\+2y>=0|2x-y>=0|x\+y-3<=0|f\(x;y\)=3x\+y/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const k = ((seed + step) % 3) + 1;
            const p = ((seed * 2 + step) % 4) + 2;
            const q = ((step % 3) + 1);
            const cut3 = 3 * k;
            const valA = (p * k) + (q * 2 * k);
            const valB = (p * 2 * k) + (q * k);
            const maxF = Math.max(valA, valB);
            const svg  = G10_HV_SVG.gridTriangleRegion(k);
            return {
                q: '[Toán 10] Cho hệ bất phương trình ' + F.m('&minus;x + 2y &ge; 0, 2x &minus; y &ge; 0, x + y &minus; ' + cut3 + ' &le; 0') + ' có miền nghiệm là miền tam giác ' + F.m('OAB') + ' được tô màu trên mặt phẳng tọa độ như hình vẽ. Với ' + F.m('(x; y)') + ' thỏa mãn hệ đã cho, tìm giá trị lớn nhất của biểu thức ' + F.m('F(x; y) = ' + p + 'x + ' + q + 'y') + '.' + svg,
                ans: String(maxF)
            };
        }
    });

    window.registerMathTopicGenerator('10', 'g10_hv_giai_tam_giac_goc_60', {
        title: '📐 Giải tam giác: Tính bình phương cạnh AC², diện tích S khi biết AB, BC, B = 60° (Câu 4 Phần II)',
        shortLabel: '📐 Tam giác B = 60°',
        keywords: /ab=13|bc=15|195|199/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const cSide = ((seed + step) % 8) + 8;
            const aSide = cSide + ((step % 4) + 2);
            const acSq  = (cSide * cSide) + (aSide * aSide) - (cSide * aSide);
            const svg   = G10_HV_SVG.triangleGeneral('AB=' + cSide, 'AC=?', 'BC=' + aSide, 'B = 60°');
            if (step % 2 === 0) {
                return {
                    q: '[Toán 10] Cho tam giác ' + F.m('ABC') + ' biết ' + F.m('AB = ' + cSide + ' cm, BC = ' + aSide + ' cm') + ' và góc ' + F.m(F.ang('B') + ' = 60°') + ' (như hình vẽ). Tính bình phương độ dài cạnh ' + F.m('AC') + ' (tức tính giá trị của ' + F.m('AC<sup>2</sup>') + ').' + svg,
                    ans: String(acSq)
                };
            } else {
                return {
                    q: '[Toán 10] Cho tam giác ' + F.m('ABC') + ' biết ' + F.m('AB = ' + cSide + ' cm, BC = ' + aSide + ' cm') + ' và góc ' + F.m(F.ang('B') + ' = 60°') + ' (như hình vẽ). Biết diện tích tam giác ' + F.m('ABC') + ' có dạng ' + F.m('S = ' + F.frac('m' + F.sqrt('3'), '4') + ' (cm<sup>2</sup>)') + ', hãy tìm giá trị của ' + F.m('m') + '.' + svg,
                    ans: String(cSide * aSide)
                };
            }
        }
    });

    window.registerMathTopicGenerator('10', 'g10_hv_quy_hoach_gio_xach_ven', {
        title: '👜 Tự luận: Biểu đồ Ven Toán–Văn & Quy hoạch tuyến tính sản xuất Giỏ xách (Câu 1, 2 Phần III)',
        shortLabel: '👜 Giỏ xách & Ven Tự luận',
        keywords: /giỏ xách tay|loại i và loại ii|chỉ thích môn văn|6480/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const mode = step % 3;
            if (mode === 0) {
                const totalHS = ((seed + step) % 10) + 38;
                const toanHS  = ((seed * 2 + step) % 8) + 18;
                const bothHS  = ((step % 4) + 4);
                const noneHS  = ((seed + step * 2) % 5) + 3;
                const onlyVan = totalHS - noneHS - toanHS;
                const likeVan = onlyVan + bothHS;
                const svg     = G10_HV_SVG.vennToanVan(totalHS, toanHS, bothHS, noneHS);
                return {
                    q: '[Toán 10] Một lớp có ' + F.m(totalHS) + ' học sinh, trong đó có ' + F.m(toanHS) + ' học sinh thích môn Toán, ' + F.m(bothHS) + ' học sinh thích cả 2 môn Toán và Văn, ' + F.m(noneHS) + ' học sinh không thích cả 2 môn Toán và Văn (như biểu đồ Ven). Tính tổng của (số học sinh chỉ thích môn Văn) và (số học sinh thích môn Văn).' + svg,
                    ans: String(onlyVan + likeVan)
                };
            }
            const k = (step % 2) + 1;
            const rateII = 60 * k;
            const maxI   = 200 * k;
            const maxII  = 240 * k;
            const pI     = 24;
            const pII    = 15;
            const xOpt   = 120 * k;
            const yOpt   = 240 * k;
            const maxProfit = (xOpt * pI) + (yOpt * pII);
            const svg    = G10_HV_SVG.pentagonRegion(xOpt, yOpt, maxI, 80 * k);
            if (mode === 1) {
                return {
                    q: '[Toán 10] Một phân xưởng sản xuất hai loại giỏ xách tay loại I và loại II. Thời gian để làm ra một cái giỏ loại I nhiều gấp hai lần thời gian làm ra một cái giỏ loại II. Nếu chỉ sản xuất toàn giỏ loại II thì trong ' + F.m('1') + ' giờ phân xưởng làm được ' + F.m(rateII) + ' cái. Phân xưởng làm việc không quá ' + F.m('8') + ' tiếng mỗi ngày và thị trường tiêu thụ tối đa mỗi ngày là ' + F.m(maxI) + ' cái giỏ loại I và ' + F.m(maxII) + ' cái giỏ loại II (miền nghiệm là ngũ giác ' + F.m('ACDEO') + ' như hình vẽ). Tiền lãi khi bán một cái giỏ loại I là ' + F.m(pI) + ' nghìn đồng, một cái giỏ loại II là ' + F.m(pII) + ' nghìn đồng. Tính tổng tiền lãi cao nhất (đơn vị: nghìn đồng) mà phân xưởng thu được trong một ngày.' + svg,
                    ans: String(maxProfit)
                };
            } else {
                return {
                    q: '[Toán 10] Một phân xưởng sản xuất hai loại giỏ xách tay loại I và loại II. Thời gian để làm ra một cái giỏ loại I nhiều gấp hai lần thời gian làm ra một cái giỏ loại II. Nếu chỉ sản xuất toàn giỏ loại II thì trong ' + F.m('1') + ' giờ phân xưởng làm được ' + F.m(rateII) + ' cái. Phân xưởng làm việc không quá ' + F.m('8') + ' tiếng mỗi ngày và thị trường tiêu thụ tối đa mỗi ngày là ' + F.m(maxI) + ' cái giỏ loại I và ' + F.m(maxII) + ' cái giỏ loại II. Tiền lãi khi bán một cái giỏ loại I là ' + F.m(pI) + ' nghìn đồng, một cái giỏ loại II là ' + F.m(pII) + ' nghìn đồng. Để tiền lãi thu được là cao nhất, tổng số giỏ cả loại I và loại II cần sản xuất trong ngày là bao nhiêu cái?' + svg,
                    ans: String(xOpt + yOpt)
                };
            }
        }
    });

    window.registerMathTopicGenerator('10', 'g10_hv_oanh_cuong_4_goc_nang', {
        title: '🏢 Toán thực tế Vận dụng cao: Đo khoảng cách h = OC giữa Oanh & Cường từ 4 góc nâng (Kèm SVG)',
        shortLabel: '🏢 Oanh & Cường (4 góc)',
        keywords: /oanh|cường|an, bình|4 góc|15,55/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const lDist = (((seed + step) % 5) + 2) * 10;
            const a1 = 30, a2 = 50, b1 = 70, b2 = 80;
            const rad = Math.PI / 180;
            const bcLen = (lDist * Math.sin(a1 * rad)) / Math.sin((b1 - a1) * rad);
            const chLen = bcLen * Math.sin(b1 * rad);
            const boLen = (lDist * Math.sin(a2 * rad)) / Math.sin((b2 - a2) * rad);
            const hoLen = boLen * Math.sin(b2 * rad);
            const hDist = Math.round((hoLen - chLen) * 100) / 100;
            const svg   = G10_HV_SVG.fourAnglesBuilding(lDist, a1, a2, b1, b2);
            return {
                q: '[Toán 10] Hai bạn Oanh, Cường lần lượt đứng tại vị trí ' + F.m('O, C') + ' của một tòa nhà. Hai bạn An, Bình lần lượt đứng trên mặt đất tại vị trí ' + F.m('A, B') + ' mà tại đó nhìn các điểm ' + F.m('C, O') + ' các góc nâng lần lượt bằng ' + F.m('&alpha;<sub>1</sub> = 30°, &alpha;<sub>2</sub> = 50°') + ' và ' + F.m('&beta;<sub>1</sub> = 70°, &beta;<sub>2</sub> = 80°') + ' so với phương nằm ngang (như hình vẽ). Gọi ' + F.m('H') + ' là hình chiếu của ' + F.m('O') + ' trên đường thẳng ' + F.m('AB') + ', giả sử ' + F.m('O, C, H') + ' thẳng hàng và biết khoảng cách giữa hai điểm ' + F.m('A, B') + ' là ' + F.m('l = ' + lDist + ' m') + '. Tính khoảng cách ' + F.m('h = OC') + ' giữa vị trí đứng của Oanh và Cường (đơn vị: mét, làm tròn đến hàng phần trăm).' + svg,
                ans: String(hDist)
            };
        }
    });

    if (typeof window.refreshAdminTopicDropdown === 'function') {
        window.refreshAdminTopicDropdown();
    }
})();
//=====================
(function() {
    if (typeof window.registerMathTopicGenerator !== 'function') return;
    const F = window.IMATHS_FMT;

    // ===================================================================
    // BỘ HÀM VẼ HÌNH MINH HỌA KHOA HỌC SVG - ĐỀ THPT NGÔ QUYỀN (ĐÀ NẴNG)
    // ===================================================================
    const G10_NQ_SVG = {
        // 1. Trục số biểu diễn tập hợp [-a; b] hoặc (-a; b]
        numLineSimple: function(leftVal, rightVal, brLeft, brRight, titleTxt) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 98" width="230" height="92">' +
                '<line x1="18" y1="52" x2="225" y2="52" stroke="#94a3b8" stroke-width="1.8"/><polygon points="230,52 221,47 221,57" fill="#94a3b8"/>' +
                '<line x1="68" y1="52" x2="172" y2="52" stroke="#4ade80" stroke-width="3.5"/>' +
                '<line x1="18" y1="45" x2="64" y2="59" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="176" y1="45" x2="220" y2="59" stroke="#ef4444" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<text x="64" y="56" fill="#fde047" font-size="14" font-weight="bold">' + brLeft + '</text>' +
                '<text x="168" y="56" fill="#fde047" font-size="14" font-weight="bold">' + brRight + '</text>' +
                '<text x="58" y="74" fill="#38bdf8" font-size="11.5" font-weight="bold">' + leftVal + '</text>' +
                '<text x="166" y="74" fill="#38bdf8" font-size="11.5" font-weight="bold">' + rightVal + '</text>' +
                '<text x="122" y="24" fill="#cbd5e1" font-size="10.5" font-weight="bold" text-anchor="middle">' + titleTxt + '</text>' +
            '</svg></div>';
        },

        // 2. Biểu đồ Ven 2 môn Thể thao (Bóng đá & Cầu lông / Bóng rổ)
        vennSimple: function(lblA, lblB, valA, valB, valBoth, topTitle) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 132" width="230" height="126">' +
                '<rect x="12" y="10" width="221" height="112" rx="10" fill="#040b16" stroke="#475569" stroke-width="1.5"/>' +
                '<circle cx="95" cy="68" r="37" fill="rgba(56,189,248,0.22)" stroke="#38bdf8" stroke-width="1.8"/>' +
                '<circle cx="145" cy="68" r="37" fill="rgba(250,204,21,0.22)" stroke="#fde047" stroke-width="1.8"/>' +
                '<text x="72" y="63" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">' + lblA + '</text>' +
                '<text x="72" y="78" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">' + valA + '</text>' +
                '<text x="168" y="63" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">' + lblB + '</text>' +
                '<text x="168" y="78" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">' + valB + '</text>' +
                '<text x="120" y="72" fill="#4ade80" font-size="11.5" font-weight="bold" text-anchor="middle">' + valBoth + '</text>' +
                '<text x="122" y="24" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">' + topTitle + '</text>' +
            '</svg></div>';
        },

        // 3. Miền nghiệm tứ giác OABC của bài toán Sản xuất X, Y (Câu 2 Phần IV Mã 0101)
        quadProdOxy: function(xCut, yCut, xOpt, yOpt) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 140" width="230" height="132">' +
                '<polygon points="52,108 52,42 122,64 158,108" fill="rgba(74,222,128,0.25)" stroke="#4ade80" stroke-width="2"/>' +
                '<line x1="20" y1="108" x2="225" y2="108" stroke="#94a3b8" stroke-width="1.5"/><polygon points="229,108 221,104 221,112" fill="#94a3b8"/>' +
                '<line x1="52" y1="130" x2="52" y2="12" stroke="#94a3b8" stroke-width="1.5"/><polygon points="52,8 48,16 56,16" fill="#94a3b8"/>' +
                '<circle cx="52" cy="42" r="3.2" fill="#fde047"/><circle cx="122" cy="64" r="3.8" fill="#4ade80"/><circle cx="158" cy="108" r="3.2" fill="#fde047"/>' +
                '<text x="38" y="122" fill="#cbd5e1" font-size="10">O</text>' +
                '<text x="32" y="45" fill="#fde047" font-size="10.5" font-weight="bold">' + yCut + '</text>' +
                '<text x="154" y="123" fill="#fde047" font-size="10.5" font-weight="bold">' + xCut + '</text>' +
                '<text x="128" y="60" fill="#4ade80" font-size="10.5" font-weight="bold">I(' + xOpt + ';' + yOpt + ')</text>' +
                '<text x="216" y="122" fill="#cbd5e1" font-size="11" font-style="italic">x</text>' +
                '<text x="60" y="20" fill="#cbd5e1" font-size="11" font-style="italic">y</text>' +
            '</svg></div>';
        },

        // 4. Đo khoảng cách AB qua hồ nước với góc ACB = 120° (Câu 3 Phần IV Mã 0101)
        lakeDistance: function(caVal, cbVal, angC) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 138" width="230" height="130">' +
                '<ellipse cx="125" cy="52" rx="68" ry="26" fill="rgba(56,189,248,0.22)" stroke="#38bdf8" stroke-width="1.4" stroke-dasharray="4 2"/>' +
                '<line x1="42" y1="45" x2="206" y2="45" stroke="#f87171" stroke-width="2.2" stroke-dasharray="5 3"/>' +
                '<line x1="115" y1="115" x2="42" y2="45" stroke="#fde047" stroke-width="2"/>' +
                '<line x1="115" y1="115" x2="206" y2="45" stroke="#fde047" stroke-width="2"/>' +
                '<path d="M 101 101 A 20 20 0 0 1 131 103" fill="none" stroke="#4ade80" stroke-width="1.6"/>' +
                '<circle cx="42" cy="45" r="3.5" fill="#fde047"/><circle cx="206" cy="45" r="3.5" fill="#fde047"/><circle cx="115" cy="115" r="3.5" fill="#4ade80"/>' +
                '<text x="26" y="48" fill="#fde047" font-size="11.5" font-weight="bold">A</text>' +
                '<text x="212" y="48" fill="#fde047" font-size="11.5" font-weight="bold">B</text>' +
                '<text x="110" y="131" fill="#4ade80" font-size="11.5" font-weight="bold">C</text>' +
                '<text x="52" y="92" fill="#fde047" font-size="10.5" font-weight="bold">' + caVal + 'm</text>' +
                '<text x="166" y="92" fill="#fde047" font-size="10.5" font-weight="bold">' + cbVal + 'm</text>' +
                '<text x="104" y="96" fill="#4ade80" font-size="10" font-weight="bold">' + angC + '°</text>' +
                '<text x="125" y="38" fill="#f87171" font-size="10.5" font-weight="bold" text-anchor="middle">Hồ nước (AB = ?)</text>' +
            '</svg></div>';
        },

        // 5. Mảnh vườn hình tứ giác có 1 góc vuông (Câu 3 Phần IV Mã 0103)
        rightQuadGarden: function(c1, c2, d1, d2) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 142" width="230" height="135">' +
                '<polygon points="48,116 196,116 112,22 48,54" fill="rgba(74,222,128,0.18)" stroke="#4ade80" stroke-width="2.2"/>' +
                '<line x1="48" y1="54" x2="196" y2="116" stroke="#fde047" stroke-width="1.5" stroke-dasharray="4 2"/>' +
                '<rect x="48" y="106" width="10" height="10" fill="none" stroke="#fde047" stroke-width="1.5"/>' +
                '<circle cx="48" cy="116" r="3" fill="#fde047"/><circle cx="196" cy="116" r="3" fill="#fde047"/>' +
                '<circle cx="112" cy="22" r="3" fill="#fde047"/><circle cx="48" cy="54" r="3" fill="#fde047"/>' +
                '<text x="16" y="88" fill="#38bdf8" font-size="10.5" font-weight="bold">' + c1 + 'm</text>' +
                '<text x="118" y="131" fill="#38bdf8" font-size="10.5" font-weight="bold" text-anchor="middle">' + c2 + 'm</text>' +
                '<text x="64" y="32" fill="#fde047" font-size="10.5" font-weight="bold">' + d1 + 'm</text>' +
                '<text x="164" y="65" fill="#fde047" font-size="10.5" font-weight="bold">' + d2 + 'm</text>' +
                '<text x="115" y="98" fill="#cbd5e1" font-size="10" font-weight="bold">S = ?</text>' +
            '</svg></div>';
        },

        // 6. Tòa nhà AB cao h (m) ngắm đỉnh núi C (Câu 3 Phần IV Mã 0102)
        mountainFromBuilding: function(hBld, angA, angB) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 250 142" width="235" height="135">' +
                '<line x1="15" y1="120" x2="235" y2="120" stroke="#94a3b8" stroke-width="1.8"/>' +
                '<rect x="24" y="56" width="26" height="64" fill="rgba(56,189,248,0.22)" stroke="#38bdf8" stroke-width="1.8"/>' +
                '<polygon points="122,120 185,20 232,120" fill="rgba(168,85,247,0.2)" stroke="#c084fc" stroke-width="1.8"/>' +
                '<line x1="185" y1="20" x2="185" y2="120" stroke="#fde047" stroke-width="2" stroke-dasharray="3 2"/>' +
                '<line x1="50" y1="56" x2="185" y2="56" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="50" y1="120" x2="185" y2="20" stroke="#4ade80" stroke-width="1.6"/>' +
                '<line x1="50" y1="56" x2="185" y2="20" stroke="#f87171" stroke-width="1.6"/>' +
                '<circle cx="50" cy="120" r="3" fill="#fde047"/><circle cx="50" cy="56" r="3" fill="#fde047"/><circle cx="185" cy="20" r="3.5" fill="#ef4444"/>' +
                '<text x="44" y="133" fill="#fde047" font-size="10.5" font-weight="bold">A</text>' +
                '<text x="42" y="50" fill="#fde047" font-size="10.5" font-weight="bold">B</text>' +
                '<text x="182" y="14" fill="#ef4444" font-size="11" font-weight="bold">C</text>' +
                '<text x="180" y="133" fill="#cbd5e1" font-size="10.5" font-weight="bold">H</text>' +
                '<text x="53" y="92" fill="#38bdf8" font-size="10" font-weight="bold">' + hBld + 'm</text>' +
                '<text x="82" y="115" fill="#4ade80" font-size="9.5" font-weight="bold">' + angA + '</text>' +
                '<text x="95" y="52" fill="#f87171" font-size="9.5" font-weight="bold">' + angB + '</text>' +
            '</svg></div>';
        }
    };

    // MODULE NQ-01 (DỄ): MỆNH ĐỀ CHỨA BIẾN P(x) & ĐẾM MỆNH ĐỀ TOÁN HỌC
    window.registerMathTopicGenerator('10', 'g10_nq_menh_de_co_ban', {
        title: '🟢 [Cơ bản] Mệnh đề chứa biến P(x) & Đếm mệnh đề đúng (THPT Ngô Quyền)',
        shortLabel: '🟢 Mệnh đề P(x)',
        keywords: /mệnh đề chứa biến|mệnh đề toán học|ngô quyền/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                const a = ((seed + step) % 5) + 2;
                const b = ((seed * 2 + step) % 8) + 5;
                // P(x): "x + a > b" <=> x > b - a => số nguyên nhỏ nhất là (b - a + 1)
                const minX = (b - a) + 1;
                return {
                    q: '[Toán 10] Cho mệnh đề chứa biến ' + F.m('P(x): "x + ' + a + ' &gt; ' + b + '"') + ' với ' + F.m('x') + ' là số nguyên. Tìm giá trị nguyên nhỏ nhất của ' + F.m('x') + ' để ' + F.m('P(x)') + ' là một mệnh đề đúng.',
                    ans: String(minX)
                };
            } else {
                const evenN = (((seed + step) % 8) + 2) * 2;
                const oddPrime = [3, 5, 7, 11, 13][(seed + step) % 5];
                return {
                    q: '[Toán 10] Cho 4 phát biểu sau:<br>(1) "Số ' + F.m(evenN) + ' là một số chẵn";<br>(2) "Tam giác đều có ba góc bằng nhau";<br>(3) "Số ' + F.m(oddPrime) + ' là số nguyên tố";<br>(4) "Bạn có thích học môn Toán không?".<br>Hỏi trong 4 phát biểu trên có bao nhiêu phát biểu là mệnh đề đúng?',
                    ans: '3'
                };
            }
        }
    });

    // MODULE NQ-02 (DỄ): ĐẾM SỐ PHẦN TỬ CỦA TẬP HỢP CƠ BẢN (x < k, |x| <= k, n(n-1) = 0)
    window.registerMathTopicGenerator('10', 'g10_nq_dem_phan_tu_tap_hop_de', {
        title: '🟢 [Cơ bản] Đếm số phần tử của tập hợp N, Z (x < k hoặc |x| ≤ k)',
        shortLabel: '🟢 Đếm phần tử Tập hợp',
        keywords: /số phần tử của tập hợp|x<4|\|x\|<=2/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const mode = step % 3;
            if (mode === 0) {
                // Chuẩn Câu 3 Phần I Mã 0101: A = {x ∈ N | x < k} => có k phần tử (0, 1, ..., k-1)
                const k = ((seed + step) % 9) + 4; // 4..12
                return {
                    q: '[Toán 10] Cho tập hợp ' + F.m('A = {x &isin; N | x &lt; ' + k + '}') + '. Hỏi tập hợp ' + F.m('A') + ' có tất cả bao nhiêu phần tử?',
                    ans: String(k)
                };
            } else if (mode === 1) {
                // Chuẩn Câu 8 Phần I Mã 0102: A = {x ∈ Z | |x| <= k} => có 2k + 1 phần tử
                const k = ((seed + step) % 6) + 2; // 2..7
                return {
                    q: '[Toán 10] Số phần tử của tập hợp ' + F.m('A = {x &isin; Z | |x| &le; ' + k + '}') + ' là bao nhiêu?',
                    ans: String(2 * k + 1)
                };
            } else {
                // Chuẩn Câu 3 Phần I Mã 0103: X = {n ∈ N | n(n - a)(n - b) = 0}
                const a = ((seed + step) % 4) + 1;
                const b = a + ((step % 4) + 1);
                return {
                    q: '[Toán 10] Tìm số phần tử của tập hợp ' + F.m('X = {n &isin; N | n(n &minus; ' + a + ')(n &minus; ' + b + ') = 0}') + '.',
                    ans: '3'
                };
            }
        }
    });

    // MODULE NQ-03 (DỄ): ĐẾM SỐ NGUYÊN TRONG A ∪ B VÀ B \ A TRÊN TRỤC SỐ (KÈM SVG)
    window.registerMathTopicGenerator('10', 'g10_nq_so_nguyen_hop_hieu_truc_so', {
        title: '🟢 [Cơ bản] Đếm số nguyên thuộc tập hợp A ∪ B hoặc B \\ A (Kèm Trục số SVG)',
        shortLabel: '🟢 Số nguyên A∪B, B\\A',
        keywords: /số nguyên thuộc tập hợp|a hợp b|b hiệu a/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Chuẩn Câu 2 Phần III Mã 0101: A = [-a; b] và B = (0; c) => A ∪ B = [-a; c)
                // Số nguyên thuộc [-a; c) là: c - (-a) = a + c
                const a = ((seed + step) % 4) + 2;     // 2..5 (3 ở đề gốc)
                const b = ((step % 3) + 1);            // 1..3 (2 ở đề gốc)
                const c = b + ((seed * 2 + step) % 4) + 3; // 4..9 (5 ở đề gốc)
                const svg = G10_NQ_SVG.numLineSimple('-' + a, c, '[', ')', 'A &cup; B = [&minus;' + a + '; ' + c + ')');
                return {
                    q: '[Toán 10] Cho hai tập hợp ' + F.m('A = [&minus;' + a + '; ' + b + ']') + ' và ' + F.m('B = (0; ' + c + ')') + '. Tìm số phần tử là số nguyên thuộc tập hợp ' + F.m('A &cup; B') + ' (tham khảo hình vẽ).' + svg,
                    ans: String(a + c)
                };
            } else {
                // Chuẩn Câu 2 Phần III Mã 0103: A = (-a; +∞) và B = (-b; c] với b > a => B \ A = (-b; -a]
                // Số nguyên trong (-b; -a] là: (-a) - (-b) = b - a
                const a = ((seed + step) % 3) + 1;     // 1..3 (2 ở đề gốc)
                const b = a + ((seed * 2 + step) % 6) + 4; // 5..11 (7 ở đề gốc)
                const c = ((step % 4) + 2);
                const svg = G10_NQ_SVG.numLineSimple('-' + b, '-' + a, '(', ']', 'B \\ A = (&minus;' + b + '; &minus;' + a + ']');
                return {
                    q: '[Toán 10] Cho hai tập hợp ' + F.m('A = (&minus;' + a + '; +&infin;)') + ' và ' + F.m('B = (&minus;' + b + '; ' + c + ']') + '. Có bao nhiêu số nguyên thuộc tập hợp ' + F.m('B \\ A') + '?' + svg,
                    ans: String(b - a)
                };
            }
        }
    });

    // MODULE NQ-04 (DỄ): ĐẾM NGHIỆM NGUYÊN DƯƠNG CỦA BẤT PHƯƠNG TRÌNH BẬC NHẤT 2 ẨN
    window.registerMathTopicGenerator('10', 'g10_nq_dem_nghiem_nguyen_bpt', {
        title: '🟢 [Cơ bản] Đếm giá trị nguyên dương thỏa mãn Bất phương trình bậc nhất 2 ẩn',
        shortLabel: '🟢 Nghiệm nguyên BPT',
        keywords: /số nguyên dương a|cặp số nguyên|nghiệm của bất phương trình/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const mode = step % 3;

            if (mode === 0) {
                // Chuẩn Câu 3 Phần III Mã 0103: Có bao nhiêu số nguyên dương a để M(-1; a) thuộc miền nghiệm của 2x + y < c?
                // Thay x = -1, y = a: -2 + a < c <=> a < c + 2 => có (c + 1) số nguyên dương (từ 1 đến c + 1)
                const cVal = ((seed + step) % 8) + 4; // 4..11 (5 ở đề gốc -> 6 số)
                return {
                    q: '[Toán 10] Có bao nhiêu số nguyên dương ' + F.m('a') + ' để điểm ' + F.m('M(&minus;1; a)') + ' thuộc miền nghiệm của bất phương trình ' + F.m('2x + y &lt; ' + cVal) + '?',
                    ans: String(cVal + 1)
                };
            } else if (mode === 1) {
                // Chuẩn Câu 3 Phần III Mã 0101: Cho BPT x - 2y + c >= 0. Đếm số cặp (x; y) với x, y ∈ {1; 2; 3}
                const cVal = ((step % 2) + 3); // c = 3 hoặc c = 4 (khi c = 4 là chuẩn đề gốc!)
                let cnt = 0;
                for (let x = 1; x <= 3; x++) {
                    for (let y = 1; y <= 3; y++) {
                        if (x - 2 * y + cVal >= 0) cnt++;
                    }
                }
                return {
                    q: '[Toán 10] Cho bất phương trình ' + F.m('x &minus; 2y + ' + cVal + ' &ge; 0') + '. Có bao nhiêu cặp số nguyên ' + F.m('(x; y)') + ' với ' + F.m('x, y &isin; {1; 2; 3}') + ' là nghiệm của bất phương trình đã cho?',
                    ans: String(cnt)
                };
            } else {
                // Chuẩn Câu 1 Phần II Mã 0101: Mua cam (15k/kg) và xoài (30k/kg) với số tiền M (nghìn đồng)
                const xKg = ((seed + step) % 4) + 2; // 2..5 kg cam
                const priceCam = 15, priceXoai = 30;
                const maxXoai  = ((seed * 2 + step) % 5) + 3; // 3..7 kg xoài
                const totalMoney = (xKg * priceCam) + (maxXoai * priceXoai);
                return {
                    q: '[Toán 10] An thích ăn hai loại trái cây là cam và xoài, mỗi tuần mẹ cho An ' + F.m(totalMoney + '.000') + ' đồng để mua trái cây. Biết giá cam là ' + F.m('15.000') + ' đồng/kg, giá xoài là ' + F.m('30.000') + ' đồng/kg. Nếu trong tuần đó An đã mua ' + F.m(xKg + ' kg') + ' cam thì An mua được tối đa bao nhiêu ki-lô-gam xoài?',
                    ans: String(maxXoai)
                };
            }
        }
    });

    // MODULE NQ-05 (DỄ): TÍNH GIÁ TRỊ BIỂU THỨC LƯỢNG GIÁC CƠ BẢN (sin²x + cos²x, cot α = 1/k)
    window.registerMathTopicGenerator('10', 'g10_nq_luong_giac_co_ban_de', {
        title: '🟢 [Cơ bản] Tính nhanh biểu thức lượng giác từ cos x, sin α, cot α (THPT Ngô Quyền)',
        shortLabel: '🟢 Lượng giác Cơ bản',
        keywords: /3sin\^2x\+4cos\^2x|cot \alpha = 1\/3|\|a-b\|/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const mode = step % 3;

            if (mode === 0) {
                // Chuẩn Câu 4 Phần III Mã 0101: Cho cos x = 1/k, tính P = a*sin^2(x) + (a + k^2)*cos^2(x) = a + k^2*(1/k^2) = a + 1 (Nguyên cực đẹp!)
                const k = ((seed + step) % 4) + 2; // 2, 3, 4, 5
                const a = ((seed * 2 + step) % 6) + 3; // 3..8
                const b = a + (k * k);
                return {
                    q: '[Toán 10] Cho góc ' + F.m('x') + ' thỏa mãn ' + F.m('cos x = ' + F.frac('1', k)) + '. Tính giá trị của biểu thức ' + F.m('P = ' + a + ' sin<sup>2</sup>x + ' + b + ' cos<sup>2</sup>x') + '.',
                    ans: String(a + 1)
                };
            } else if (mode === 1) {
                // Chuẩn Câu 4 Phần III Mã 0102: Cho cot α = 1/k (tức tan α = k), tính A = (a*sin α + b*cos α) / (2*sin α - (2k - 1)*cos α)
                // Vì mẫu số = cos α * (2*k - (2k - 1)) = cos α nên A = a*k + b (Nguyên 100%, khi k=3, a=3, b=4 là đúng y hệt đề gốc = 13!)
                const k = ((seed + step) % 4) + 2; // 2, 3, 4, 5 (3 ở đề gốc)
                const a = ((step % 4) + 2);        // 2, 3, 4, 5 (3 ở đề gốc)
                const b = ((seed * 2 + step) % 5) + 2; // 2..6 (4 ở đề gốc)
                const d = (2 * k) - 1;             // 5 ở đề gốc
                const ansA = (a * k) + b;
                return {
                    q: '[Toán 10] Cho ' + F.m('cot &alpha; = ' + F.frac('1', k)) + '. Tính giá trị của biểu thức ' + F.m('A = ' + F.frac(a + ' sin &alpha; + ' + b + ' cos &alpha;', '2 sin &alpha; &minus; ' + d + ' cos &alpha;')) + '.',
                    ans: String(ansA)
                };
            } else {
                // Chuẩn Câu 4 Phần III Mã 0103: Cho α là góc tù và sin α = p/q, biết cos α = -a/b tối giản, tính P = |a - b| hoặc a + b
                const triples = [
                    { sinN: 4, sinD: 5, cosN: 3, cosD: 5 },   // Chuẩn đề gốc: sin=4/5 -> cos=-3/5 -> |3-5| = 2
                    { sinN: 3, sinD: 5, cosN: 4, cosD: 5 },   // sin=3/5 -> cos=-4/5 -> |4-5| = 1
                    { sinN: 5, sinD: 13, cosN: 12, cosD: 13 },// sin=5/13 -> cos=-12/13 -> |12-13| = 1
                    { sinN: 8, sinD: 17, cosN: 15, cosD: 17 } // sin=8/17 -> cos=-15/17 -> |15-17| = 2
                ];
                const tr = triples[(seed + step) % triples.length];
                return {
                    q: '[Toán 10] Cho ' + F.m('&alpha;') + ' là góc tù (' + F.m('90° &lt; &alpha; &lt; 180°') + ') và ' + F.m('sin &alpha; = ' + F.frac(tr.sinN, tr.sinD)) + '. Biết ' + F.m('cos &alpha; = &minus;' + F.frac('a', 'b')) + ' (với ' + F.m('a, b &isin; N*') + ' và ' + F.m(F.frac('a', 'b')) + ' là phân số tối giản). Tính giá trị của biểu thức ' + F.m('P = a + b') + '.',
                    ans: String(tr.cosN + tr.cosD)
                };
            }
        }
    });

    // MODULE NQ-06 (DỄ): BIỂU ĐỒ VEN CÂU LẠC BỘ THỂ THAO & VĂN NGHỆ (KÈM HÌNH SVG)
    window.registerMathTopicGenerator('10', 'g10_nq_clb_bong_da_cau_long', {
        title: '🟢 [Cơ bản] Toán thực tế Tập hợp: CLB Bóng đá, Cầu lông & Văn nghệ 20/11 (Kèm SVG)',
        shortLabel: '🟢 CLB Bóng đá & Cầu lông',
        keywords: /chỉ thích đá bóng|chỉ thích chơi cầu lông|flashmob|bóng chuyền/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const mode = step % 3;

            if (mode === 0) {
                // Chuẩn Câu 1 Phần IV Mã 0102 (Cực dễ): Cho tổng HS, số HS chỉ thích đá bóng, số HS chỉ thích cầu lông => tìm số HS thích cả 2 môn!
                const onlyFoot = ((seed + step) % 6) + 11;     // 11..16 (13 ở đề gốc)
                const onlyBadm = ((seed * 2 + step) % 6) + 15; // 15..20 (18 ở đề gốc)
                const bothCnt  = ((step % 6) + 6);             // 6..11 (9 ở đề gốc)
                const totalHS  = onlyFoot + onlyBadm + bothCnt;
                const svg      = G10_NQ_SVG.vennSimple('Chỉ Bóng đá', 'Chỉ Cầu lông', onlyFoot, onlyBadm, '?', 'Lớp 10A: ' + totalHS + ' học sinh');
                return {
                    q: '[Toán 10] Lớp 10A có tất cả ' + F.m(totalHS) + ' học sinh, trong đó có ' + F.m(onlyFoot) + ' học sinh chỉ thích đá bóng, ' + F.m(onlyBadm) + ' học sinh chỉ thích chơi cầu lông và số học sinh còn lại thích chơi cả hai môn thể thao nói trên (như biểu đồ Ven). Hỏi có bao nhiêu học sinh thích chơi cả hai môn cầu lông và bóng đá?' + svg,
                    ans: String(bothCnt)
                };
            } else if (mode === 1) {
                // Chuẩn Câu 1 Phần IV Mã 0101: Lớp có totalHS, nA bóng đá, nB bóng rổ, both cả 2 môn => tìm số HS không tham gia CLB nào
                const bothCnt = ((seed + step) % 5) + 8;  // 8..12 (10 ở đề gốc)
                const nA      = bothCnt + ((seed * 2 + step) % 8) + 12; // 25 ở đề gốc
                const nB      = bothCnt + ((step % 6) + 8);             // 20 ở đề gốc
                const noneCnt = ((seed + step * 3) % 7) + 8;            // 10 ở đề gốc
                const totalHS = (nA + nB - bothCnt) + noneCnt;
                const svg     = G10_NQ_SVG.vennSimple('CLB Bóng đá', 'CLB Bóng rổ', nA, nB, bothCnt, 'Lớp 10A: ' + totalHS + ' HS (Ngoài: ?)');
                return {
                    q: '[Toán 10] Lớp 10A có ' + F.m(totalHS) + ' học sinh, trong đó có ' + F.m(nA) + ' học sinh tham gia câu lạc bộ Bóng đá, ' + F.m(nB) + ' học sinh tham gia câu lạc bộ Bóng rổ và ' + F.m(bothCnt) + ' học sinh tham gia cả hai câu lạc bộ này (như hình vẽ). Hỏi lớp 10A có bao nhiêu học sinh không tham gia câu lạc bộ nào trong hai câu lạc bộ trên?' + svg,
                    ans: String(noneCnt)
                };
            } else {
                // Chuẩn Câu 1 Phần IV Mã 0103: Cho nA cầu lông, nB bóng chuyền, both cả 2 môn, other môn khác => tính sĩ số lớp!
                const bothCnt = ((seed + step) % 5) + 8; // 10 ở đề gốc
                const nA      = bothCnt + ((seed * 2 + step) % 7) + 11; // 24 ở đề gốc
                const nB      = bothCnt + ((step % 6) + 8);             // 20 ở đề gốc
                const otherCnt = ((seed + step * 2) % 6) + 8;           // 10 ở đề gốc
                const totalClass = (nA + nB - bothCnt) + otherCnt;
                const svg = G10_NQ_SVG.vennSimple('Cầu lông', 'Bóng chuyền', nA, nB, bothCnt, 'Môn khác: ' + otherCnt + ' HS -> Sĩ số = ?');
                return {
                    q: '[Toán 10] Lớp 10A có ' + F.m(nA) + ' học sinh đăng ký môn cầu lông, ' + F.m(nB) + ' học sinh đăng ký môn bóng chuyền, ' + F.m(bothCnt) + ' học sinh đăng ký cả hai môn cầu lông và bóng chuyền, và ' + F.m(otherCnt) + ' học sinh còn lại đăng ký các môn khác. Hỏi sĩ số của lớp 10A là bao nhiêu học sinh?' + svg,
                    ans: String(totalClass)
                };
            }
        }
    });

    // MODULE NQ-07 (KHÁ): TỐI ƯU LỢI NHUẬN SẢN XUẤT SẢN PHẨM X, Y TỪ NGUYÊN LIỆU I, II (KÈM SVG)
    window.registerMathTopicGenerator('10', 'g10_nq_san_xuat_nguyen_lieu_xy', {
        title: '🏭 Quy hoạch tuyến tính: Sản xuất sản phẩm X, Y từ nguyên liệu I và II (Kèm SVG)',
        shortLabel: '🏭 Sản xuất X, Y (Đề 0101)',
        keywords: /nguyên liệu i|nguyên liệu ii|đơn vị sản phẩm x|2x\+3y/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 2 Phần IV Mã 0101:
            // Sản phẩm X cần 2 kg NL I và 1 kg NL II; Sản phẩm Y cần 1 kg NL I và 3 kg NL II.
            // Tối đa 8*k kg NL I và 9*k kg NL II => Hệ: 2x + y <= 8k; x + 3y <= 9k; x >= 0, y >= 0.
            // Các đỉnh tứ giác miền nghiệm: O(0;0), A(0; 3k), I(3k; 2k), B(4k; 0).
            const k = (step % 3) + 1; // 1, 2, 3
            const maxNL1 = 8 * k;
            const maxNL2 = 9 * k;
            const pX = ((seed + step) % 3) + 2; // 2, 3, 4 triệu đồng
            const pY = pX + 1;                  // 3, 4, 5 triệu đồng
            const xOpt = 3 * k, yOpt = 2 * k;
            const maxProfit = (xOpt * pX) + (yOpt * pY); // Khi k=1, pX=2, pY=3 => F_max = 12 triệu đồng!
            const svg = G10_NQ_SVG.quadProdOxy(4 * k, 3 * k, xOpt, yOpt);

            return {
                q: '[Toán 10] Một cơ sở sản xuất hai loại sản phẩm ' + F.m('X') + ' và ' + F.m('Y') + ' từ hai loại nguyên liệu I và II. Để sản xuất một đơn vị sản phẩm ' + F.m('X') + ' cần ' + F.m('2 kg') + ' nguyên liệu I và ' + F.m('1 kg') + ' nguyên liệu II; để sản xuất một đơn vị sản phẩm ' + F.m('Y') + ' cần ' + F.m('1 kg') + ' nguyên liệu I và ' + F.m('3 kg') + ' nguyên liệu II. Cơ sở hiện có tối đa ' + F.m(maxNL1 + ' kg') + ' nguyên liệu I và ' + F.m(maxNL2 + ' kg') + ' nguyên liệu II (miền nghiệm như hình vẽ). Biết lợi nhuận khi bán một đơn vị sản phẩm ' + F.m('X') + ' là ' + F.m(pX) + ' triệu đồng, một đơn vị sản phẩm ' + F.m('Y') + ' là ' + F.m(pY) + ' triệu đồng. Tìm lợi nhuận lớn nhất (đơn vị: triệu đồng) mà cơ sở đạt được.' + svg,
                ans: String(maxProfit)
            };
        }
    });

    // MODULE NQ-08 (DỄ/TRUNG BÌNH): ĐO KHOẢNG CÁCH AB QUA HỒ NƯỚC GÓC 120° RA SỐ NGUYÊN ĐẸP (KÈM SVG)
    window.registerMathTopicGenerator('10', 'g10_nq_ho_nuoc_goc_120', {
        title: '🌊 Toán thực tế: Đo khoảng cách AB qua hồ nước với góc ACB = 120° (Kèm SVG)',
        shortLabel: '🌊 Hồ nước góc 120°',
        keywords: /hồ nước sâu|góc acb=120|ca=60|cb=100/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 3 Phần IV Mã 0101:
            // Góc ACB = 120° (cos 120° = -1/2) => AB^2 = CA^2 + CB^2 + CA*CB.
            // Các bộ (CA, CB) cho AB nguyên tuyệt đối khi góc C = 120°:
            // (3, 5 -> 7) => nhân 20: (CA = 60, CB = 100 -> AB = 140m đúng y hệt đề gốc THPT Ngô Quyền!)
            // (7, 8 -> 13), (5, 16 -> 19)
            const nice120 = [
                { ca: 60, cb: 100, ab: 140 }, // Đúng chuẩn đề gốc Mã 0101
                { ca: 30, cb: 50,  ab: 70 },
                { ca: 90, cb: 150, ab: 210 },
                { ca: 70, cb: 80,  ab: 130 },
                { ca: 35, cb: 40,  ab: 65 }
            ];
            const pk  = nice120[(seed + step) % nice120.length];
            const svg = G10_NQ_SVG.lakeDistance(pk.ca, pk.cb, 120);

            return {
                q: '[Toán 10] Để đo khoảng cách từ điểm ' + F.m('A') + ' đến điểm ' + F.m('B') + ' bị ngăn cách bởi một hồ nước sâu, người ta chọn một vị trí ' + F.m('C') + ' trên đất liền sao cho nhìn thấy cả hai điểm ' + F.m('A') + ' và ' + F.m('B') + ' (như hình vẽ). Người ta đo được khoảng cách ' + F.m('CA = ' + pk.ca + ' m, CB = ' + pk.cb + ' m') + ' và góc ' + F.m(F.ang('ACB') + ' = 120°') + '. Tính khoảng cách ' + F.m('AB') + ' giữa hai điểm đó (đơn vị: mét).' + svg,
                ans: String(pk.ab)
            };
        }
    });

    // MODULE NQ-09 (KHÁ): TÍNH DIỆN TÍCH MẢNH VƯỜN TỨ GIÁC CÓ 1 GÓC VUÔNG (CÂU 3 PHẦN IV MÃ 0103 - KÈM SVG)
    window.registerMathTopicGenerator('10', 'g10_nq_manh_vuon_tu_giac_vuong', {
        title: '🌳 Toán thực tế: Diện tích mảnh vườn tứ giác có 1 góc vuông (Kèm Hình SVG)',
        shortLabel: '🌳 Mảnh vườn góc vuông',
        keywords: /bác an có mảnh vườn|một góc vuông|35m|45m|52m/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 3 Phần IV Mã 0103:
            // Mảnh vườn tứ giác ABCD có góc B = 90°. Nối đường chéo AC:
            // Tam giác vuông ABC có 2 cạnh góc vuông c1, c2 => S1 = (c1 * c2)/2 và đường chéo AC = sqrt(c1^2 + c2^2).
            // Tam giác ACD có 3 cạnh (AC, d1, d2) tính diện tích S2 bằng công thức Heron.
            // Chọn các bộ số để cả S1 và S2 đều nguyên đẹp 100%:
            // Bộ 1: ΔABC vuông (15m, 20m -> AC = 25m, S1 = 150); ΔACD có (25m, 20m, 15m -> S2 = 150) => Tổng S = 300 m²
            // Bộ 2: ΔABC vuông (12m, 16m -> AC = 20m, S1 = 96); ΔACD có (20m, 13m, 21m -> S2 = 126) => Tổng S = 222 m²
            // Bộ 3: ΔABC vuông (9m, 12m -> AC = 15m, S1 = 54); ΔACD có (15m, 13m, 14m -> S2 = 84) => Tổng S = 138 m²
            // Bộ 4 (Chuẩn số liệu đề gốc 0103): (35m, 45m, 20m, 52m -> S1 = 787.5, AC = sqrt(3250), S2 ≈ 569.5 => làm tròn đến hàng đơn vị: 1357 m²)
            const gardenCases = [
                { c1: 15, c2: 20, d1: 15, d2: 20, area: 300 },
                { c1: 12, c2: 16, d1: 13, d2: 21, area: 222 },
                { c1: 9,  c2: 12, d1: 13, d2: 14, area: 138 },
                { c1: 30, c2: 40, d1: 26, d2: 42, area: 1104 }
            ];
            const pk  = gardenCases[(seed + step) % gardenCases.length];
            const svg = G10_NQ_SVG.rightQuadGarden(pk.c1, pk.c2, pk.d1, pk.d2);

            return {
                q: '[Toán 10] Bác An có mảnh vườn hình tứ giác có một góc vuông với độ dài hai cạnh kề góc vuông là ' + F.m(pk.c1 + ' m, ' + pk.c2 + ' m') + ' và hai cạnh còn lại là ' + F.m(pk.d1 + ' m, ' + pk.d2 + ' m') + ' như hình vẽ bên dưới. Hãy tính diện tích của mảnh vườn đó (đơn vị: mét vuông).' + svg,
                ans: String(pk.area)
            };
        }
    });

    // MODULE NQ-10 (VẬN DỤNG): ĐO CHIỀU CAO NGỌN NÚI TỪ TÒA NHÀ CAO 70m (CÂU 3 PHẦN IV MÃ 0102 - KÈM SVG)
    window.registerMathTopicGenerator('10', 'g10_nq_chieu_cao_ngon_nui', {
        title: '⛰️ Toán thực tế: Đo chiều cao ngọn núi từ hai vị trí A, B của tòa nhà (Kèm SVG)',
        shortLabel: '⛰️ Tòa nhà ngắm Ngọn núi',
        keywords: /quan sát đỉnh c của ngọn núi|70m|15°30|chiều cao của ngọn núi/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 3 Phần IV Mã 0102:
            // Tòa nhà cao AB = h (m) (70m ở đề gốc).
            // Từ chân nhà A nhìn đỉnh núi C góc nâng α = 30°; từ đỉnh nhà B nhìn đỉnh núi C góc nâng β = 15.5° (15°30').
            // Ta có: AH = CH * cot(α) và BK = AH = (CH - AB) * cot(β).
            // Suy ra: CH * cot(α) = (CH - h) * cot(β) => CH = (h * cot(β)) / (cot(β) - cot(α)).
            const hBld = (((seed + step) % 5) + 5) * 10; // 50, 60, 70, 80, 90 m (70m ở đề gốc)
            const radA = 30 * Math.PI / 180;
            const radB = 15.5 * Math.PI / 180; // 15°30' = 15.5°
            const cotA = 1 / Math.tan(radA);
            const cotB = 1 / Math.tan(radB);
            const chMountain = Math.round((hBld * cotB) / (cotB - cotA));
            const svg = G10_NQ_SVG.mountainFromBuilding(hBld, '30°', '15°30\'');

            return {
                q: '[Toán 10] Từ hai vị trí ' + F.m('A') + ' (chân tòa nhà) và ' + F.m('B') + ' (đỉnh tòa nhà) có độ cao ' + F.m('AB = ' + hBld + ' m') + ', người ta quan sát đỉnh ' + F.m('C') + ' của một ngọn núi (như hình vẽ). Biết phương nhìn ' + F.m('AC') + ' tạo với phương nằm ngang góc ' + F.m('30°') + ', phương nhìn ' + F.m('BC') + ' tạo với phương nằm ngang góc ' + F.m('15°30\'') + '. Tính chiều cao ' + F.m('CH') + ' của ngọn núi so với mặt đất (đơn vị: mét, làm tròn đến hàng đơn vị).' + svg,
                ans: String(chMountain)
            };
        }
    });

    if (typeof window.refreshAdminTopicDropdown === 'function') {
        window.refreshAdminTopicDropdown();
    }
})();
(function() {
    if (typeof window.registerMathTopicGenerator !== 'function') return;
    const F = window.IMATHS_FMT;

    // Hàm vẽ hình khoa học SVG: Khu vực công viên tứ giác ABCD có 2 góc đáy A = B = 45°
    function parkQuadSVG(adVal, bcVal, dcRadVal) {
        return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 255 142" width="240" height="135">' +
            '<defs><pattern id="granitePat" width="14" height="14" patternUnits="userSpaceOnUse">' +
                '<rect width="14" height="14" fill="#0f172a"/><circle cx="4" cy="4" r="1" fill="#334155"/><circle cx="11" cy="10" r="1.2" fill="#475569"/>' +
            '</pattern></defs>' +
            '<polygon points="36,114 218,114 156,42 82,68" fill="url(#granitePat)" stroke="#38bdf8" stroke-width="2.3"/>' +
            '<path d="M 60 114 A 24 24 0 0 0 53 97" fill="none" stroke="#fde047" stroke-width="1.6"/>' +
            '<path d="M 194 114 A 24 24 0 0 1 201 97" fill="none" stroke="#fde047" stroke-width="1.6"/>' +
            '<circle cx="36" cy="114" r="3.5" fill="#fde047"/><circle cx="218" cy="114" r="3.5" fill="#fde047"/>' +
            '<circle cx="156" cy="42" r="3.5" fill="#4ade80"/><circle cx="82" cy="68" r="3.5" fill="#4ade80"/>' +
            '<text x="20" y="120" fill="#fde047" font-size="11.5" font-weight="bold">A</text>' +
            '<text x="225" y="120" fill="#fde047" font-size="11.5" font-weight="bold">B</text>' +
            '<text x="154" y="32" fill="#4ade80" font-size="11.5" font-weight="bold">C</text>' +
            '<text x="68" y="62" fill="#4ade80" font-size="11.5" font-weight="bold">D</text>' +
            '<text x="64" y="107" fill="#fde047" font-size="10" font-weight="bold">45°</text>' +
            '<text x="170" y="107" fill="#fde047" font-size="10" font-weight="bold">45°</text>' +
            '<text x="36" y="86" fill="#38bdf8" font-size="10.5" font-weight="bold">' + adVal + 'm</text>' +
            '<text x="195" y="75" fill="#38bdf8" font-size="10.5" font-weight="bold">' + bcVal + 'm</text>' +
            '<text x="115" y="46" fill="#fde047" font-size="10.5" font-weight="bold" text-anchor="middle">&radic;' + dcRadVal + ' m</text>' +
            '<text x="127" y="96" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">S (ABCD)</text>' +
        '</svg></div>';
    }

    // MODULE: BÀI TOÁN LÁT ĐÁ GRANITE KHU VỰC CÔNG VIÊN TỨ GIÁC ABCD (GÓC 45°)
    window.registerMathTopicGenerator('10', 'g10_cong_vien_tu_giac_45', {
        title: '🏛️ Toán thực tế Tự luận: Lát đá granite công viên tứ giác ABCD góc 45° (Kèm SVG)',
        shortLabel: '🏛️ Công viên Tứ giác 45°',
        keywords: /đoạn đường đi bộ|công viên|lối đi phụ|lát đá granite|73|450/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Kéo dài AD và BC cắt nhau tại E => ΔEAB vuông cân tại E (EA = EB = x).
            // Đặt ED = x - AD và EC = x - BC. Trong ΔEDC vuông tại E: DC^2 = ED^2 + EC^2.
            // Diện tích S_ABCD = S_EAB - S_EDC = (x^2 - ED * EC) / 2.
            // Danh sách các bộ (x, ad, bc, ed, ec, dcSq, areaS) chuẩn nguyên đẹp 100% (Bộ đầu tiên là chuẩn đề gốc):
            const parkCases = [
                { x: 10, ad: 2, bc: 7,  ed: 8,  ec: 3, dcSq: 73,  area: 38 }, // Đề gốc: AD=2, BC=7, DC=√73 => S=38m²
                { x: 12, ad: 4, bc: 9,  ed: 8,  ec: 3, dcSq: 73,  area: 60 }, // AD=4, BC=9, DC=√73 => S=60m²
                { x: 10, ad: 4, bc: 5,  ed: 6,  ec: 5, dcSq: 61,  area: 35 }, // AD=4, BC=5, DC=√61 => S=35m²
                { x: 12, ad: 2, bc: 7,  ed: 10, ec: 5, dcSq: 125, area: 47 }, // AD=2, BC=7, DC=√125 => S=47m²
                { x: 14, ad: 6, bc: 9,  ed: 8,  ec: 5, dcSq: 89,  area: 78 }, // AD=6, BC=9, DC=√89 => S=78m²
                { x: 16, ad: 4, bc: 11, ed: 12, ec: 5, dcSq: 169, area: 98 }  // AD=4, BC=11, DC=√169=13 => S=98m²
            ];

            const pk   = parkCases[(seed + step) % parkCases.length];
            const svg  = parkQuadSVG(pk.ad, pk.bc, pk.dcSq);
            const mode = step % 3;

            // Chế độ 1 (Chuẩn đề gốc): Tính tổng số tiền theo đơn vị triệu đồng hoặc nghìn đồng
            if (mode === 0) {
                const prices = [450, 400, 500, 350, 600]; // nghìn đồng/m² (450 là chuẩn đề gốc)
                const unitPrice = prices[(seed + step) % prices.length];
                const totalThousand = pk.area * unitPrice; // Ví dụ: 38 * 450 = 17100 (nghìn đồng)
                return {
                    q: '[Toán 10] Một đoạn đường đi bộ trong công viên được thiết kế nối từ điểm ' + F.m('A') + ' đến điểm ' + F.m('B') + '. Từ hai đầu đoạn đường này, người ta mở hai lối đi phụ ' + F.m('AD') + ' và ' + F.m('BC') + ' cùng hợp với đoạn ' + F.m('AB') + ' một góc ' + F.m('45°') + ' để dẫn đến các khu chức năng khác. Biết rằng ' + F.m('AD = ' + pk.ad + ' m, DC = ' + F.sqrt(pk.dcSq) + ' m, BC = ' + pk.bc + ' m') + ' tạo thành một khu vực khép kín hình tứ giác ' + F.m('ABCD') + ' (tham khảo hình vẽ). Toàn bộ khu vực ' + F.m('ABCD') + ' được lát đá granite với đơn giá ' + F.m(unitPrice) + ' nghìn đồng/m<sup>2</sup>. Tính tổng số tiền (đơn vị: nghìn đồng) cần chi trả để lát đá khu vực này.' + svg,
                    ans: String(totalThousand)
                };
            }
            // Chế độ 2: Hỏi tổng số tiền theo đơn vị triệu đồng (Khi AD=2, BC=7, DC=√73, giá 450k => 17.1 triệu đồng)
            else if (mode === 1) {
                const unitPrice = 450;
                const totalMillion = (pk.area * unitPrice) / 1000;
                return {
                    q: '[Toán 10] Một đoạn đường đi bộ trong công viên được thiết kế nối từ điểm ' + F.m('A') + ' đến điểm ' + F.m('B') + '. Từ hai đầu đoạn đường này, người ta mở hai lối đi phụ ' + F.m('AD') + ' và ' + F.m('BC') + ' cùng hợp với đoạn ' + F.m('AB') + ' một góc ' + F.m('45°') + ' để dẫn đến các khu chức năng khác. Biết rằng ' + F.m('AD = ' + pk.ad + ' m, DC = ' + F.sqrt(pk.dcSq) + ' m, BC = ' + pk.bc + ' m') + ' tạo thành một khu vực khép kín hình tứ giác ' + F.m('ABCD') + ' (tham khảo hình vẽ). Toàn bộ khu vực ' + F.m('ABCD') + ' được lát đá granite với đơn giá ' + F.m(unitPrice) + ' nghìn đồng/m<sup>2</sup>. Tính tổng số tiền (đơn vị: triệu đồng) cần chi trả để lát đá khu vực này.' + svg,
                    ans: String(totalMillion)
                };
            }
            // Chế độ 3: Hỏi trực tiếp diện tích S (m²) của khu vực tứ giác ABCD
            else {
                return {
                    q: '[Toán 10] Một đoạn đường đi bộ trong công viên được thiết kế nối từ điểm ' + F.m('A') + ' đến điểm ' + F.m('B') + '. Từ hai đầu đoạn đường này, người ta mở hai lối đi phụ ' + F.m('AD') + ' và ' + F.m('BC') + ' cùng hợp với đoạn ' + F.m('AB') + ' một góc ' + F.m('45°') + ' (như hình vẽ). Biết rằng ' + F.m('AD = ' + pk.ad + ' m, DC = ' + F.sqrt(pk.dcSq) + ' m, BC = ' + pk.bc + ' m') + ' tạo thành một khu vực khép kín hình tứ giác ' + F.m('ABCD') + '. Tính diện tích ' + F.m('S') + ' (đơn vị: m<sup>2</sup>) của khu vực tứ giác ' + F.m('ABCD') + '.' + svg,
                    ans: String(pk.area)
                };
            }
        }
    });

    if (typeof window.refreshAdminTopicDropdown === 'function') {
        window.refreshAdminTopicDropdown();
    }
})();

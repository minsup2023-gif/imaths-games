/* Kho đề Toán 11 – trích từ snippet iMaths Studio (registerMathTopicGenerator) */

(function() {
    if (typeof window.registerMathTopicGenerator !== 'function') return;
    const F = window.IMATHS_FMT;

    // XÓA SẠCH TOÀN BỘ MODULE KHỐI 11 CŨ
    if (window.IMATHS_ADMIN_GENERATORS) {
        window.IMATHS_ADMIN_GENERATORS['11'] = {};
    }

    // ===================================================================
    // THƯ VIỆN HÌNH VẼ KHOA HỌC SVG CHUẨN ĐỀ TOÁN 11 - THPT VIỆT ĐỨC
    // ===================================================================
    const G11_VD_SVG = {
        // 1. Hình xoắn ốc biểu diễn góc lượng giác (Ou, Ov) (Câu 6 Phần I)
        spiralAngle: function(geomDeg, isNegative) {
            const dirTxt = isNegative ? 'Chiều âm (cùng chiều kim đồng hồ)' : 'Chiều dương (ngược chiều kim đồng hồ)';
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 240 140" width="230" height="135">' +
                '<line x1="75" y1="100" x2="215" y2="100" stroke="#38bdf8" stroke-width="2.3"/>' +
                '<line x1="75" y1="100" x2="155" y2="16" stroke="#38bdf8" stroke-width="2.3"/>' +
                '<path d="M 102 100 A 27 27 0 1 1 75 73 A 34 34 0 1 1 109 100 A 42 42 0 1 1 106 68" fill="none" stroke="#fde047" stroke-width="1.6"/>' +
                '<polygon points="106,68 98,70 104,76" fill="#fde047"/>' +
                '<circle cx="75" cy="100" r="3.5" fill="#fde047"/>' +
                '<text x="58" y="106" fill="#fde047" font-size="12" font-weight="bold" font-style="italic">O</text>' +
                '<text x="202" y="92" fill="#4ade80" font-size="12" font-weight="bold" font-style="italic">u</text>' +
                '<text x="135" y="24" fill="#4ade80" font-size="12" font-weight="bold" font-style="italic">v</text>' +
                '<text x="84" y="94" fill="#fde047" font-size="10.5" font-weight="bold">' + geomDeg + '°</text>' +
                '<text x="120" y="128" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">' + dirTxt + '</text>' +
            '</svg></div>';
        },

        // 2. Đồ thị hàm số y = a*cos(x) hoặc y = a*sin(x) (Câu 5 Phần I)
        cosineWave: function(ampA) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 255 135" width="240" height="130">' +
                '<line x1="12" y1="70" x2="242" y2="70" stroke="#94a3b8" stroke-width="1.5"/><polygon points="246,70 238,66 238,74" fill="#94a3b8"/>' +
                '<line x1="125" y1="125" x2="125" y2="12" stroke="#94a3b8" stroke-width="1.5"/><polygon points="125,8 121,16 129,16" fill="#94a3b8"/>' +
                '<line x1="15" y1="35" x2="238" y2="35" stroke="#475569" stroke-width="1" stroke-dasharray="3 3"/>' +
                '<line x1="15" y1="105" x2="238" y2="105" stroke="#475569" stroke-width="1" stroke-dasharray="3 3"/>' +
                '<path d="M 25 70 Q 45 35 65 35 Q 85 35 95 70 Q 105 105 125 35 Q 145 105 155 70 Q 165 35 185 35 Q 205 35 225 70" fill="none" stroke="none"/>' +
                '<path d="M 25 35 C 45 35, 55 105, 75 105 C 95 105, 105 35, 125 35 C 145 35, 155 105, 175 105 C 195 105, 205 35, 225 35" fill="none" stroke="#38bdf8" stroke-width="2.4"/>' +
                '<circle cx="125" cy="35" r="3.2" fill="#fde047"/>' +
                '<circle cx="75" cy="105" r="3" fill="#4ade80"/><circle cx="175" cy="105" r="3" fill="#4ade80"/>' +
                '<text x="113" y="83" fill="#cbd5e1" font-size="10">O</text>' +
                '<text x="130" y="32" fill="#fde047" font-size="10.5" font-weight="bold">' + ampA + '</text>' +
                '<text x="130" y="116" fill="#fde047" font-size="10.5" font-weight="bold">&minus;' + ampA + '</text>' +
                '<text x="68" y="66" fill="#cbd5e1" font-size="9.5">&minus;&pi;</text>' +
                '<text x="172" y="66" fill="#cbd5e1" font-size="9.5">&pi;</text>' +
                '<text x="216" y="66" fill="#cbd5e1" font-size="9.5">2&pi;</text>' +
            '</svg></div>';
        },

        // 3. Hình Tuabin gió 3 cánh M, N, P trên hệ trục Oxy (Câu 1 Phần II)
        windTurbine: function(bladeR, centerH, mHeight) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 250 148" width="235" height="140">' +
                '<line x1="15" y1="132" x2="235" y2="132" stroke="#94a3b8" stroke-width="1.8"/>' +
                '<line x1="25" y1="58" x2="230" y2="58" stroke="#64748b" stroke-width="1.4" stroke-dasharray="3 2"/>' +
                '<line x1="115" y1="132" x2="115" y2="10" stroke="#94a3b8" stroke-width="1.6"/>' +
                '<line x1="115" y1="58" x2="138" y2="104" stroke="#fde047" stroke-width="2.5"/>' +
                '<line x1="115" y1="58" x2="155" y2="22" stroke="#38bdf8" stroke-width="2.5"/>' +
                '<line x1="115" y1="58" x2="64" y2="50" stroke="#4ade80" stroke-width="2.5"/>' +
                '<line x1="138" y1="104" x2="138" y2="132" stroke="#fde047" stroke-width="1.2" stroke-dasharray="2 2"/>' +
                '<circle cx="115" cy="58" r="3.5" fill="#f8fafc"/>' +
                '<circle cx="138" cy="104" r="3.5" fill="#fde047"/>' +
                '<circle cx="155" cy="22" r="3.5" fill="#38bdf8"/>' +
                '<circle cx="64" cy="50" r="3.5" fill="#4ade80"/>' +
                '<text x="103" y="53" fill="#f8fafc" font-size="10.5" font-weight="bold">O</text>' +
                '<text x="144" y="108" fill="#fde047" font-size="10.5" font-weight="bold">M (' + mHeight + 'm)</text>' +
                '<text x="161" y="24" fill="#38bdf8" font-size="10.5" font-weight="bold">P (' + bladeR + 'm)</text>' +
                '<text x="32" y="46" fill="#4ade80" font-size="10.5" font-weight="bold">N (' + bladeR + 'm)</text>' +
                '<text x="192" y="98" fill="#cbd5e1" font-size="10" font-weight="bold">Tâm cao ' + centerH + 'm</text>' +
                '<text x="222" y="53" fill="#cbd5e1" font-size="10.5" font-style="italic">x</text>' +
                '<text x="121" y="18" fill="#cbd5e1" font-size="10.5" font-style="italic">y</text>' +
            '</svg></div>';
        },

        // 4. Hình Hồ nước tròn bán kính R và dây cung AB (Câu 1 Phần III)
        circularLake: function(rVal, abVal) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 240 142" width="230" height="136">' +
                '<circle cx="115" cy="72" r="54" fill="rgba(56,189,248,0.14)" stroke="#38bdf8" stroke-width="2"/>' +
                '<path d="M 115 18 A 54 54 0 0 1 166 90" fill="none" stroke="#fde047" stroke-width="3.2"/>' +
                '<line x1="115" y1="72" x2="115" y2="18" stroke="#cbd5e1" stroke-width="1.5"/>' +
                '<line x1="115" y1="72" x2="166" y2="90" stroke="#cbd5e1" stroke-width="1.5"/>' +
                '<line x1="115" y1="18" x2="166" y2="90" stroke="#4ade80" stroke-width="1.8" stroke-dasharray="4 2"/>' +
                '<circle cx="115" cy="72" r="3.2" fill="#fde047"/>' +
                '<circle cx="115" cy="18" r="3.5" fill="#fde047"/>' +
                '<circle cx="166" cy="90" r="3.5" fill="#fde047"/>' +
                '<text x="102" y="78" fill="#fde047" font-size="11" font-weight="bold">O</text>' +
                '<text x="110" y="12" fill="#fde047" font-size="11" font-weight="bold">A</text>' +
                '<text x="173" y="95" fill="#fde047" font-size="11" font-weight="bold">B</text>' +
                '<text x="74" y="48" fill="#cbd5e1" font-size="10" font-weight="bold">' + rVal + 'm</text>' +
                '<text x="144" y="52" fill="#4ade80" font-size="10" font-weight="bold">' + abVal + 'm</text>' +
            '</svg></div>';
        }
    };

    // ===================================================================
    // MODULE 1: GÓC LƯỢNG GIÁC TRÊN HÌNH XOẮN ỐC & GÓC LIÊN KẾT (CÂU 1, 6 PHẦN I)
    // ===================================================================
    window.registerMathTopicGenerator('11', 'g11_vd_goc_luong_giac_lien_ket', {
        title: '🌀 Góc lượng giác (Ou, Ov) trên hình xoắn ốc & Rút gọn góc liên kết (Kèm Hình SVG)',
        shortLabel: '🌀 Góc lượng giác (Ou, Ov)',
        keywords: /góc lượng giác|uov|660|780|góc liên kết/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Chuẩn Câu 6 Phần I: Cho góc hình học uOv = alphaDeg, tia quay k vòng theo chiều âm hoặc dương
                const geomAngles = [30, 45, 60, 120];
                const gAng = geomAngles[(seed + step) % geomAngles.length];
                const fullTurns = ((step % 2) + 1); // 1 hoặc 2 vòng
                // Quay theo chiều âm: -(fullTurns * 360 + (360 - gAng)) (Khi gAng=60, fullTurns=1 => -360 - 300 = -660° chuẩn đề gốc!)
                const ansDeg = -(fullTurns * 360 + (360 - gAng));
                const svg = G11_VD_SVG.spiralAngle(gAng, true);
                return {
                    q: '[Toán 11] Cho góc hình học ' + F.m('uOv = ' + gAng + '°') + '. Biết tia sáng bắt đầu từ ' + F.m('Ou') + ' quay theo chiều âm (cùng chiều kim đồng hồ) trọn ' + F.m(fullTurns) + ' vòng rồi quay tiếp đến tia ' + F.m('Ov') + ' như hình vẽ. Xác định số đo (đơn vị: độ) của góc lượng giác ' + F.m('(Ou, Ov)') + '.' + svg,
                    ans: String(ansDeg)
                };
            } else {
                // Chuẩn Câu 1 Phần I: Đơn giản biểu thức A = k*cos(π/2 - α) - k*sin(π - α) + m = m
                const k = ((seed + step) % 5) + 2;
                const m = ((seed * 2 + step) % 9) + 3;
                return {
                    q: '[Toán 11] Với ' + F.m('&alpha;') + ' là số đo của góc lượng giác bất kì, hãy tính giá trị của biểu thức ' + F.m('A = ' + k + ' cos(' + F.frac('&pi;', '2') + ' &minus; &alpha;) &minus; ' + k + ' sin(&pi; &minus; &alpha;) + ' + m) + '.',
                    ans: String(m)
                };
            }
        }
    });

    // ===================================================================
    // MODULE 2: HỆ THỨC CƠ BẢN sin²α + cos²α = 1 & TÍNH tan α (CÂU 8, 12 PHẦN I & CÂU 2 PHẦN III)
    // ===================================================================
    window.registerMathTopicGenerator('11', 'g11_vd_he_thuc_co_ban_tan', {
        title: '📐 Giá trị lượng giác: Tính tan α khi biết sin α = 0,6 và xét dấu góc phần tư',
        shortLabel: '📐 Tính tan α từ sin α',
        keywords: /sin\^2|0,6|0,75|góc phần tư/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 2 Phần III: Cho sin α = p/q và 0 < α < π/2 (hoặc π/2 < α < π) => Tính tan α
            const triples = [
                { sinVal: '0,6', cosAbs: 0.8, tanPos: 0.75 }, // 3/4 = 0.75 (Chuẩn Câu 2 Phần III!)
                { sinVal: '0,8', cosAbs: 0.6, tanPos: 1.5, mult: 2 },
                { sinVal: F.frac('5', '13'), cosAbs: 12, tanPos: 5, scale: 12 },
                { sinVal: F.frac('8', '17'), cosAbs: 15, tanPos: 8, scale: 15 }
            ];
            const pk = triples[(seed + step) % triples.length];

            if (pk.sinVal === '0,6') {
                const isQ2 = (step % 2 === 1); // Góc phần tư thứ II (π/2 < α < π)
                const rangeStr = isQ2 ? (F.frac('&pi;', '2') + ' &lt; &alpha; &lt; &pi;') : ('0 &lt; &alpha; &lt; ' + F.frac('&pi;', '2'));
                const ansTan = isQ2 ? -0.75 : 0.75;
                return {
                    q: '[Toán 11] Cho ' + F.m('&alpha;') + ' là góc lượng giác thỏa mãn ' + F.m('sin &alpha; = 0,6') + ' và ' + F.m(rangeStr) + '. Giá trị của ' + F.m('tan &alpha;') + ' bằng bao nhiêu?',
                    ans: String(ansTan)
                };
            } else if (pk.scale) {
                return {
                    q: '[Toán 11] Cho ' + F.m('&alpha;') + ' là góc lượng giác thỏa mãn ' + F.m('sin &alpha; = ' + pk.sinVal) + ' và ' + F.m('0 &lt; &alpha; &lt; ' + F.frac('&pi;', '2')) + '. Tính giá trị của biểu thức ' + F.m('P = ' + pk.scale + ' tan &alpha;') + '.',
                    ans: String(pk.tanPos)
                };
            } else {
                return {
                    q: '[Toán 11] Cho ' + F.m('&alpha;') + ' là góc lượng giác thỏa mãn ' + F.m('sin &alpha; = 0,8') + ' và ' + F.m('0 &lt; &alpha; &lt; ' + F.frac('&pi;', '2')) + '. Tính giá trị của biểu thức ' + F.m('P = 6 tan &alpha;') + '.',
                    ans: '8'
                };
            }
        }
    });

    // ===================================================================
    // MODULE 3: CÔNG THỨC CỘNG & CÔNG THỨC NHÂN ĐÔI cos 6a (CÂU 4, 7 PHẦN I)
    // ===================================================================
    window.registerMathTopicGenerator('11', 'g11_vd_cong_thuc_cong_nhan_doi', {
        title: '⚡ Công thức lượng giác: Công thức cộng sin(a+b) & Công thức nhân đôi cos 2u',
        shortLabel: '⚡ Công thức cộng & Nhân đôi',
        keywords: /công thức cộng|nhân đôi|cos 6a|sin 3x cos x/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Chuẩn Câu 7 Phần I: Rút gọn P = sin(m*x)*cos(x) + cos(m*x)*sin(x) = sin((m+1)*x)
                const m = ((seed + step) % 5) + 2; // 2..6 (khi m=3 thì ra sin 4x chuẩn đề gốc!)
                const kSum = m + 1;
                return {
                    q: '[Toán 11] Với mọi số thực ' + F.m('x') + ', biểu thức ' + F.m('P = sin ' + m + 'x cos x + cos ' + m + 'x sin x') + ' sau khi rút gọn bằng công thức cộng có dạng ' + F.m('P = sin(kx)') + ' (với ' + F.m('k &gt; 0') + '). Tìm giá trị của ' + F.m('k') + '.',
                    ans: String(kSum)
                };
            } else {
                // Chuẩn Câu 4 Phần I: Công thức nhân đôi cos(2*k*a) = 1 - 2*sin^2(k*a) = 2*cos^2(k*a) - 1
                const sinValSq = ((seed + step) % 4) + 1; // 1..4
                const denSq    = 9;
                // Cho sin^2(3a) = sinValSq / 9 => Tính P = 9 * cos(6a) = 9 * (1 - 2 * sinValSq / 9) = 9 - 2*sinValSq
                const ansVal   = 9 - (2 * sinValSq);
                return {
                    q: '[Toán 11] Cho góc lượng giác ' + F.m('a') + ' thỏa mãn ' + F.m('sin<sup>2</sup>3a = ' + F.frac(sinValSq, denSq)) + '. Áp dụng công thức nhân đôi ' + F.m('cos 6a = 1 &minus; 2sin<sup>2</sup>3a') + ', hãy tính giá trị của biểu thức ' + F.m('P = 9 cos 6a') + '.',
                    ans: String(ansVal)
                };
            }
        }
    });

    // ===================================================================
    // MODULE 4: BIẾN ĐỔI TỔNG THÀNH TÍCH RÚT GỌN PHÂN THỨC (CÂU 2 PHẦN IV TỰ LUẬN)
    // ===================================================================
    window.registerMathTopicGenerator('11', 'g11_vd_tong_thanh_tich', {
        title: '🧮 Tự luận Lượng giác: Rút gọn A = (sin x + sin 2x + sin 3x)/(cos x + cos 2x + cos 3x)',
        shortLabel: '🧮 Tổng thành tích (Tự luận)',
        keywords: /sin x \+ sin 2x \+ sin 3x|tổng thành tích|rút gọn biểu thức/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 2 Phần IV Tự luận:
            // A = (sin x + sin(k*x) + sin((2k-1)*x)) / (cos x + cos(k*x) + cos((2k-1)*x))
            // Vì sin((2k-1)x) + sin x = 2*sin(kx)*cos((k-1)x) và cos((2k-1)x) + cos x = 2*cos(kx)*cos((k-1)x)
            // Suy ra A = sin(kx)*(2cos((k-1)x) + 1) / [cos(kx)*(2cos((k-1)x) + 1)] = tan(k*x)!
            // Khi k = 2: A = (sin x + sin 2x + sin 3x) / (cos x + cos 2x + cos 3x) = tan 2x (Chuẩn 100% Câu 2 Phần IV!)
            const k = ((seed + step) % 4) + 2; // 2, 3, 4, 5
            const highM = (2 * k) - 1;         // 3, 5, 7, 9

            return {
                q: '[Toán 11] Với các điều kiện để biểu thức có nghĩa, sau khi rút gọn biểu thức ' + F.m('A = ' + F.frac('sin x + sin ' + k + 'x + sin ' + highM + 'x', 'cos x + cos ' + k + 'x + cos ' + highM + 'x')) + ' ta thu được kết quả có dạng ' + F.m('A = tan(mx)') + ' (với ' + F.m('m &isin; N*') + '). Tìm giá trị của ' + F.m('m') + '.',
                ans: String(k)
            };
        }
    });

    // ===================================================================
    // MODULE 5: ĐỒ THỊ HÀM SỐ LƯỢNG GIÁC, TẬP XÁC ĐỊNH & CHU KỲ T (CÂU 5, 9, 11 PHẦN I & CÂU 3 PHẦN III)
    // ===================================================================
    window.registerMathTopicGenerator('11', 'g11_vd_do_thi_chu_ky_ham_so', {
        title: '📈 Hàm số lượng giác: Đồ thị y = cos x, Tập xác định & Chu kỳ tuần hoàn T (Kèm SVG)',
        shortLabel: '📈 Đồ thị & Chu kỳ T',
        keywords: /chu kỳ tuần hoàn|đồ thị của hàm số|tập xác định|hàm số chẵn/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Chuẩn Câu 3 Phần III: Tìm chu kỳ tuần hoàn T của hàm số y = sin(k*π*x) hoặc y = cos((2π/T)*x)
                // Chu kỳ T = 2π / (ω). Khi ω = π => T = 2 (Chuẩn 100% Câu 3 Phần III!)
                const Tval = ((seed + step) % 6 + 1) * 2; // 2, 4, 6, 8, 10, 12
                const coeffStr = (Tval === 2) ? '&pi;x' : (F.frac('2&pi;', Tval) + 'x');
                const svg = G11_VD_SVG.cosineWave(1);
                return {
                    q: '[Toán 11] Chu kỳ tuần hoàn ' + F.m('T') + ' của hàm số lượng giác ' + F.m('y = f(x) = sin(' + coeffStr + ')') + ' bằng bao nhiêu?' + svg,
                    ans: String(Tval)
                };
            } else {
                // Chuẩn Câu 5 & Câu 11 Phần I: Giá trị lớn nhất / nhỏ nhất và đồ thị hàm số y = a*cos(x) + b trên đoạn [-2π; 2π]
                const a = ((seed + step) % 4) + 2; // 2, 3, 4, 5
                const b = ((step % 4) + 1);        // 1, 2, 3, 4
                const svg = G11_VD_SVG.cosineWave(a);
                return {
                    q: '[Toán 11] Cho hàm số chẵn ' + F.m('y = ' + a + ' cos x') + ' có dạng đồ thị đối xứng qua trục tung ' + F.m('Oy') + ' như hình vẽ. Tính hiệu giữa giá trị lớn nhất ' + F.m('M') + ' và giá trị nhỏ nhất ' + F.m('m') + ' của hàm số ' + F.m('f(x) = ' + a + ' cos x + ' + b) + ' trên tập số thực ' + F.m('R') + '.' + svg,
                    ans: String(2 * a)
                };
            }
        }
    });

    // ===================================================================
    // MODULE 6: PHƯƠNG TRÌNH LƯỢNG GIÁC CƠ BẢN & NGHIỆM TRÊN [0; 2π) (CÂU 2, 3, 10 PHẦN I)
    // ===================================================================
    window.registerMathTopicGenerator('11', 'g11_vd_pt_luong_giac_co_ban', {
        title: '🔍 Phương trình lượng giác: Nghiệm của 3tan(x/4) − √3 = 0 trên [0; 2π) (Câu 2, 3, 10 Phần I)',
        shortLabel: '🔍 PT 3tan(x/4) − √3 = 0',
        keywords: /3tan|vô nghiệm|sin x = 0|trong nửa khoảng/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 10 Phần I: Giải phương trình 3*tan(x/k) - sqrt(3) = 0 <=> tan(x/k) = sqrt(3)/3 = tan(π/6)
            // <=> x/k = π/6 + m*π <=> x = k*π/6 + m*k*π.
            // Khi k = 4: x = 2π/3 + m*4π => Trên nửa khoảng [0; 2π) có nghiệm duy nhất x = 2π/3 (Chuẩn đáp án D Câu 10!)
            const kList = [2, 4, 8, 10]; // Để x0 = k*π/6 rút gọn thành p*π/3 tối giản
            const k = kList[(seed + step) % kList.length];
            const pNum = k / 2; // Tử số của p*π/3
            const qDen = 3;

            return {
                q: '[Toán 11] Biết nghiệm dương nhỏ nhất của phương trình lượng giác ' + F.m('3 tan ' + F.frac('x', k) + ' &minus; ' + F.sqrt('3') + ' = 0') + ' có dạng ' + F.m('x = ' + F.frac('a&pi;', 'b')) + ' (với ' + F.m('a, b &isin; N*') + ' và ' + F.m(F.frac('a', 'b')) + ' là phân số tối giản). Tính tổng ' + F.m('T = a + b') + '.',
                ans: String(pNum + qDen)
            };
        }
    });

    // ===================================================================
    // MODULE 7: PHƯƠNG TRÌNH THAM SỐ sin x = m / K (CÂU 2 PHẦN II)
    // ===================================================================
    window.registerMathTopicGenerator('11', 'g11_vd_pt_tham_so_m', {
        title: '🎯 Phương trình tham số: Đếm số giá trị nguyên của m để sin x = m/K có nghiệm (Câu 2 Phần II)',
        shortLabel: '🎯 Tham số m (sin x = m/K)',
        keywords: /1012|2025|tham số thực|có nghiệm/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 2 Phần II: Cho phương trình sin x = m / K
            const K = 1000 + ((seed + step) % 25); // VD: 1012 ở đề gốc

            if (step % 2 === 0) {
                // Ý c Câu 2 Phần II: Để phương trình có nghiệm trên R <=> -1 <= m/K <= 1 <=> -K <= m <= K
                // Số giá trị nguyên của m là: 2*K + 1 (Khi K = 1012 thì đáp số = 2025!)
                return {
                    q: '[Toán 11] Cho phương trình lượng giác ' + F.m('sin x = ' + F.frac('m', K)) + ' (với ' + F.m('m') + ' là tham số thực). Có tất cả bao nhiêu giá trị nguyên của tham số ' + F.m('m') + ' để phương trình đã cho có nghiệm trên tập số thực ' + F.m('R') + '?',
                    ans: String(2 * K + 1)
                };
            } else {
                // Ý d Câu 2 Phần II: Để phương trình có nghiệm x ∈ (0; π) <=> 0 < sin x <= 1 <=> 0 < m <= K
                // Số giá trị nguyên của m là đúng K giá trị (Khi K = 1012 thì có 1012 giá trị!)
                return {
                    q: '[Toán 11] Cho phương trình lượng giác ' + F.m('sin x = ' + F.frac('m', K)) + ' (với ' + F.m('m') + ' là tham số thực). Có tất cả bao nhiêu giá trị nguyên của tham số ' + F.m('m') + ' để phương trình đã cho có nghiệm ' + F.m('x &isin; (0; &pi;)') + '?',
                    ans: String(K)
                };
            }
        }
    });

    // ===================================================================
    // MODULE 8: ĐẾM SỐ NGHIỆM CỦA sin x = √2/2 TRÊN ĐOẠN LỚN [π/2; 2Nπ] (CÂU 4 PHẦN III)
    // ===================================================================
    window.registerMathTopicGenerator('11', 'g11_vd_dem_so_nghiem_doan_lon', {
        title: '🔢 Đếm số nghiệm: Phương trình sin x = √2/2 trên đoạn [π/2; 2028π] (Câu 4 Phần III)',
        shortLabel: '🔢 Đếm nghiệm [π/2; 2028π]',
        keywords: /2028|2027|số nghiệm|căn 2/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 4 Phần III:
            // Xét phương trình sin x = sqrt(2)/2 trên đoạn [π/2; 2*N*π] (tương ứng N vòng quay 2π).
            // Trên đoạn [0; 2*N*π] có đúng 2*N nghiệm (mỗi vòng có 2 nghiệm là π/4 và 3π/4).
            // Khi xét trên [π/2; 2*N*π], ta loại bỏ nửa khoảng [0; π/2) vốn chỉ chứa duy nhất 1 nghiệm x = π/4.
            // Vậy tổng số nghiệm trên [π/2; 2*N*π] luôn bằng 2*N - 1!
            // Khi 2*N = 2028 => số nghiệm là 2028 - 1 = 2027 (Chuẩn 100% đáp số Câu 4 Phần III!)
            const evenBound = 2020 + (((seed + step) % 10) * 2); // 2020, 2022, ..., 2038 (2028 ở đề gốc)
            const totalRoots = evenBound - 1;

            return {
                q: '[Toán 11] Số nghiệm ' + F.m('x &isin; [' + F.frac('&pi;', '2') + '; ' + evenBound + '&pi;]') + ' của phương trình lượng giác ' + F.m('sin x = ' + F.frac(F.sqrt('2'), '2')) + ' là bao nhiêu?',
                ans: String(totalRoots)
            };
        }
    });

    // ===================================================================
    // MODULE 9: TOÁN THỰC TẾ TUABIN GIÓ 3 CÁNH M, N, P TRÊN HỆ TRỤC OXY (CÂU 1 PHẦN II)
    // ===================================================================
    window.registerMathTopicGenerator('11', 'g11_vd_tuabin_gio_oxy', {
        title: '🌬️ Toán thực tế: Tuabin gió 3 cánh quạt M, N, P trên hệ trục Oxy (Kèm Hình SVG)',
        shortLabel: '🌬️ Tuabin gió 3 cánh',
        keywords: /tuabin gió|cánh quạt|120m|75m|49m/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 1 Phần II:
            // Tâm O của tuabin ở độ cao H0 (m) so với mặt đất, chiều dài mỗi cánh là R (m).
            // Điểm M ở độ cao hM (m) với -π/2 < α < 0 => yM = hM - H0 => sin α = (hM - H0) / R.
            // Hai cánh còn lại lệch góc ±2π/3:
            // sin β = sin(α - 2π/3) = -1/2 * sin α - sqrt(3)/2 * cos α
            // sin γ = sin(α + 2π/3) = -1/2 * sin α + sqrt(3)/2 * cos α
            // Đặc biệt: Tổng độ cao của 2 điểm N và P luôn bằng:
            // hN + hP = (H0 + R*sin β) + (H0 + R*sin γ) = 2*H0 + R*(-sin α) = 2*H0 - (hM - H0) = 3*H0 - hM (Nguyên tuyệt đối!)
            const H0 = 120 + (((seed + step) % 4) * 10); // 120, 130, 140, 150 m (120m ở đề gốc)
            const R  = 75;
            const hM = H0 - 71; // Khi H0 = 120 thì hM = 49m đúng y hệt đề gốc!
            const svg = G11_VD_SVG.windTurbine(R, H0, hM);

            if (step % 2 === 0) {
                // Hỏi độ cao điểm P (làm tròn đến hàng phần chục): Khi H0=120, hM=49 => hP ≈ 176,4 m
                const sinAlpha = (hM - H0) / R; // -71/75
                const cosAlpha = Math.sqrt(1 - sinAlpha * sinAlpha);
                const sinGamma = (-0.5 * sinAlpha) + (Math.sqrt(3) / 2) * cosAlpha;
                const hP = Math.round((H0 + R * sinGamma) * 10) / 10;
                return {
                    q: '[Toán 11] Xét một tuabin gió có độ dài mỗi cánh là ' + F.m(R + ' m') + ', khoảng cách từ tâm ' + F.m('O') + ' của tuabin đến mặt đất là ' + F.m(H0 + ' m') + '. Gọi ' + F.m('M, N, P') + ' là ba điểm ở đầu các cánh quạt (góc giữa các cánh là ' + F.m(F.frac('2&pi;', '3')) + '). Gắn hệ trục tọa độ ' + F.m('Oxy') + ' gốc ' + F.m('O') + ', trục ' + F.m('Ox') + ' song song với mặt đất như hình vẽ. Biết độ cao của điểm ' + F.m('M') + ' so với mặt đất là ' + F.m(hM + ' m') + ' và góc lượng giác ' + F.m('(Ox, OM) = &alpha; &isin; (&minus;' + F.frac('&pi;', '2') + '; 0)') + '. Tính chiều cao của điểm ' + F.m('P') + ' (điểm cao nhất) so với mặt đất (đơn vị: mét, làm tròn đến hàng phần chục).' + svg,
                    ans: String(hP)
                };
            } else {
                // Hỏi tổng chiều cao của hai điểm N và P so với mặt đất: hN + hP = 3*H0 - hM (Nguyên đẹp!)
                const sumNP = (3 * H0) - hM;
                return {
                    q: '[Toán 11] Xét một tuabin gió có độ dài mỗi cánh là ' + F.m(R + ' m') + ', khoảng cách từ tâm ' + F.m('O') + ' của tuabin đến mặt đất là ' + F.m(H0 + ' m') + '. Gọi ' + F.m('M, N, P') + ' là ba điểm ở đầu các cánh quạt (góc giữa các cánh là ' + F.m(F.frac('2&pi;', '3')) + ') như hình vẽ. Biết tại thời điểm tuabin dừng, độ cao của điểm ' + F.m('M') + ' so với mặt đất là ' + F.m(hM + ' m') + '. Tính tổng chiều cao của hai điểm ' + F.m('N') + ' và ' + F.m('P') + ' so với mặt đất (đơn vị: mét).' + svg,
                    ans: String(sumNP)
                };
            }
        }
    });

    // ===================================================================
    // MODULE 10: TOÁN THỰC TẾ ĐỘ DÀI CUNG TRÒN BỜ HỒ NHÀ AN & BÌNH (CÂU 1 PHẦN III)
    // ===================================================================
    window.registerMathTopicGenerator('11', 'g11_vd_bo_ho_cung_tron', {
        title: '🏞️ Toán thực tế: Quãng đường đi bộ trên bờ hồ tròn từ nhà An đến nhà Bình (Kèm SVG)',
        shortLabel: '🏞️ Cung tròn Bờ hồ',
        keywords: /nhà an|nhà bình|bờ hồ|đường chim bay|129/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 1 Phần III:
            // Hồ tròn bán kính R (m), khoảng cách chim bay (dây cung AB) là d (m).
            // Góc ở tâm θ = 2 * arcsin(d / (2R)) (rad) => Quãng đường đi bộ ngắn nhất trên bờ hồ là cung nhỏ AB: s = R * θ.
            // Khi R = 100m, AB = 120m => sin(θ/2) = 0,6 => s = 100 * 2 * arcsin(0,6) ≈ 129 m (Chuẩn 100% đáp số Câu 1 Phần III!)
            const scaleK = ((seed + step) % 4) + 1; // 1, 2, 3, 4
            const rLake  = 100 * scaleK;
            const abCord = 120 * scaleK;
            const thetaRad = 2 * Math.asin(abCord / (2 * rLake));
            const arcLen = Math.round(rLake * thetaRad);
            const svg = G11_VD_SVG.circularLake(rLake, abCord);

            return {
                q: '[Toán 11] Nhà An (điểm ' + F.m('A') + ') và nhà Bình (điểm ' + F.m('B') + ') đều nằm trên bờ của một cái hồ hình tròn có bán kính ' + F.m('R = ' + rLake + ' m') + '. Khoảng cách theo đường chim bay (dây cung ' + F.m('AB') + ') từ nhà An đến nhà Bình là ' + F.m(abCord + ' m') + ' (tham khảo hình vẽ). Khi đó nếu đi bộ men theo bờ hồ thì quãng đường ngắn nhất từ nhà An đến nhà Bình là bao nhiêu mét (làm tròn kết quả đến hàng đơn vị)?' + svg,
                ans: String(arcLen)
            };
        }
    });

    // ===================================================================
    // MODULE 11: VẬT LÍ DAO ĐỘNG ĐIỀU HÒA x(t) = -A cos(ωt + φ) (CÂU 1 PHẦN IV TỰ LUẬN)
    // ===================================================================
    window.registerMathTopicGenerator('11', 'g11_vd_dao_dong_dieu_hoa', {
        title: '⏱️ Toán thực tế Vật lí: Phương trình dao động điều hòa & Số dao động toàn phần (Câu 1 Phần IV)',
        shortLabel: '⏱️ Dao động điều hòa',
        keywords: /dao động điều hòa|biên độ|pha ban đầu|dao động toàn phần/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 1 Phần IV Tự luận:
            // Cho phương trình x1(t) = -A * cos((π/k)*t - π/4) (cm) với A > 0.
            // Chu kỳ T = 2π / (π/k) = 2*k (giây).
            // Trong 1 phút (60 giây), số dao động toàn phần là N = 60 / (2*k) = 30 / k.
            // Khi A = 3, k = 2: x1(t) = -3*cos((π/2)*t - π/4) => Biên độ = 3 cm, T = 4s, số dao động trong 1 phút = 15 (Chuẩn 100% đề gốc!)
            const kDivisors = [1, 2, 3, 5, 6]; // Ước của 30 để N = 30/k nguyên đẹp
            const k = kDivisors[(seed + step) % kDivisors.length];
            const ampA = ((seed * 2 + step) % 6) + 3; // 3..8 cm
            const omegaStr = (k === 1) ? '&pi;t' : (F.frac('&pi;', k) + 't');
            const numOsc = 30 / k;

            if (step % 2 === 0) {
                return {
                    q: '[Toán 11] Một vật dao động điều hòa theo phương trình ' + F.m('x<sub>1</sub>(t) = &minus;' + ampA + ' cos(' + omegaStr + ' &minus; ' + F.frac('&pi;', '4') + ') (cm)') + ', trong đó ' + F.m('t') + ' là thời gian tính bằng giây. Biết chu kỳ dao động là ' + F.m('T = ' + F.frac('2&pi;', '&omega;')) + ' (khoảng thời gian thực hiện một dao động toàn phần). Hỏi trong khoảng thời gian ' + F.m('1') + ' phút (' + F.m('60') + ' giây), vật thực hiện được bao nhiêu dao động toàn phần?',
                    ans: String(numOsc)
                };
            } else {
                // Hỏi tổng của Biên độ A (A > 0) và Số dao động toàn phần trong 1 phút
                return {
                    q: '[Toán 11] Một vật dao động điều hòa theo phương trình ' + F.m('x<sub>1</sub>(t) = &minus;' + ampA + ' cos(' + omegaStr + ' &minus; ' + F.frac('&pi;', '4') + ') (cm)') + '. Khi đưa về dạng chuẩn ' + F.m('x(t) = A cos(&omega;t + &phi;)') + ' với biên độ ' + F.m('A &gt; 0') + ', hãy tính tổng ' + F.m('S = A + N') + ' với ' + F.m('N') + ' là số dao động toàn phần vật thực hiện trong ' + F.m('1') + ' phút.',
                    ans: String(ampA + numOsc)
                };
            }
        }
    });

    // ===================================================================
    // MODULE 12: HỆ THỨC LƯỢNG GIÁC TRONG TAM GIÁC a + b = k*c (CÂU 3 PHẦN IV TỰ LUẬN)
    // ===================================================================
    window.registerMathTopicGenerator('11', 'g11_vd_tam_giac_tan_nua_goc', {
        title: '🏆 Lượng giác trong Tam giác: Hệ thức a + b = kc và tích tan(A/2)·tan(B/2) (Câu 3 Phần IV)',
        shortLabel: '🏆 Hệ thức tan(A/2)·tan(B/2)',
        keywords: /a\+b=2c|tan\(a\/2\)|giá trị không đổi/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 3 Phần IV Tự luận:
            // Trong tam giác ABC có BC = a, CA = b, AB = c thỏa mãn a + b = k*c (với k > 1).
            // Theo định lý Sin và biến đổi tổng thành tích:
            // sin A + sin B = k * sin(A + B) <=> cos((A-B)/2) = k * cos((A+B)/2)
            // <=> (k + 1)*sin(A/2)*sin(B/2) = (k - 1)*cos(A/2)*cos(B/2)
            // <=> tan(A/2) * tan(B/2) = (k - 1) / (k + 1)!
            // Khi k = 2 (a + b = 2c): P = tan(A/2)*tan(B/2) = (2 - 1)/(2 + 1) = 1/3 (Chuẩn 100% lời giải Câu 3 Phần IV!)
            const k = ((seed + step) % 5) + 2; // 2, 3, 4, 5, 6
            const multCoeff = k + 1;
            const ansVal    = k - 1; // Để multCoeff * tan(A/2)*tan(B/2) = k - 1 (Nguyên tuyệt đối!)

            return {
                q: '[Toán 11] Cho tam giác ' + F.m('ABC') + ' có độ dài ba cạnh ' + F.m('BC = a, CA = b, AB = c') + ' thỏa mãn hệ thức ' + F.m('a + b = ' + k + 'c') + '. Khi đó biểu thức ' + F.m('P = ' + multCoeff + ' tan ' + F.frac('A', '2') + ' &middot; tan ' + F.frac('B', '2')) + ' luôn nhận một giá trị nguyên không đổi bằng bao nhiêu?',
                ans: String(ansVal)
            };
        }
    });

    if (typeof window.refreshAdminTopicDropdown === 'function') {
        window.refreshAdminTopicDropdown();
    }
})();
//===============
(function() {
    if (typeof window.registerMathTopicGenerator !== 'function') return;
    const F = window.IMATHS_FMT;

    // ===================================================================
    // BỘ HÀM VẼ HÌNH SVG & BẢNG SỐ LIỆU CHUẨN ĐỀ THPT NGUYỄN TRÃI - ĐÀ NẴNG
    // ===================================================================
    const G11_NT_UI = {
        monoGraph: function(isSin) {
            const curveD = isSin
                ? 'M 35 70 Q 62 108 90 108 Q 118 108 135 70 Q 152 32 180 32 Q 208 32 235 70'
                : 'M 35 108 Q 62 108 90 70 Q 118 32 135 32 Q 152 32 180 70 Q 208 108 235 108';
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 255 135" width="240" height="128">' +
                '<line x1="15" y1="70" x2="242" y2="70" stroke="#94a3b8" stroke-width="1.5"/><polygon points="246,70 238,66 238,74" fill="#94a3b8"/>' +
                '<line x1="135" y1="125" x2="135" y2="12" stroke="#94a3b8" stroke-width="1.5"/><polygon points="135,8 131,16 139,16" fill="#94a3b8"/>' +
                '<path d="' + curveD + '" fill="none" stroke="#38bdf8" stroke-width="2.5"/>' +
                '<line x1="90" y1="70" x2="90" y2="108" stroke="#fde047" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="180" y1="70" x2="180" y2="32" stroke="#fde047" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<circle cx="90" cy="108" r="3" fill="#fde047"/><circle cx="180" cy="32" r="3" fill="#4ade80"/>' +
                '<text x="72" y="64" fill="#fde047" font-size="10" font-weight="bold">&minus;&pi;/2</text>' +
                '<text x="172" y="84" fill="#4ade80" font-size="10" font-weight="bold">&pi;/2</text>' +
                '<text x="30" y="64" fill="#cbd5e1" font-size="10">&minus;&pi;</text>' +
                '<text x="225" y="64" fill="#cbd5e1" font-size="10">&pi;</text>' +
                '<text x="123" y="83" fill="#cbd5e1" font-size="10">O</text>' +
            '</svg></div>';
        },

        angleArc: function(geomDeg, isReflexArc) {
            const arcPath = isReflexArc
                ? 'M 118 98 A 33 33 0 1 1 104 68'
                : 'M 122 98 A 37 37 0 0 0 106 72';
            const arrowPts = isReflexArc ? '104,68 96,71 103,77' : '122,98 117,90 126,90';
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 240 135" width="230" height="128">' +
                '<line x1="85" y1="98" x2="210" y2="98" stroke="#38bdf8" stroke-width="2.2"/>' +
                '<line x1="85" y1="98" x2="158" y2="20" stroke="#38bdf8" stroke-width="2.2"/>' +
                '<path d="' + arcPath + '" fill="none" stroke="#f87171" stroke-width="1.8"/>' +
                '<polygon points="' + arrowPts + '" fill="#f87171"/>' +
                '<circle cx="85" cy="98" r="3.2" fill="#fde047"/>' +
                '<text x="68" y="105" fill="#fde047" font-size="11.5" font-weight="bold">O</text>' +
                '<text x="198" y="114" fill="#e2e8f0" font-size="11" font-weight="bold">u (M)</text>' +
                '<text x="162" y="24" fill="#e2e8f0" font-size="11" font-weight="bold">v (N)</text>' +
                '<text x="96" y="90" fill="#4ade80" font-size="10.5" font-weight="bold">' + geomDeg + '°</text>' +
            '</svg></div>';
        },

        flowerPetals: function(omVal, oiVal) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 145" width="235" height="138">' +
                '<circle cx="122" cy="74" r="34" fill="rgba(250,204,21,0.12)" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="4 3"/>' +
                '<path d="M 122 40 A 24 24 0 1 1 154 63 A 24 24 0 1 1 142 101 A 24 24 0 1 1 102 101 A 24 24 0 1 1 90 63 A 24 24 0 1 1 122 40" fill="none" stroke="#4ade80" stroke-width="2.2"/>' +
                '<line x1="122" y1="74" x2="154" y2="63" stroke="#38bdf8" stroke-width="2"/>' +
                '<line x1="122" y1="74" x2="162" y2="82" stroke="#fde047" stroke-width="2"/>' +
                '<circle cx="122" cy="74" r="3" fill="#ef4444"/>' +
                '<circle cx="154" cy="63" r="3" fill="#38bdf8"/>' +
                '<circle cx="162" cy="82" r="3" fill="#fde047"/>' +
                '<text x="108" y="80" fill="#ef4444" font-size="10.5" font-weight="bold">O</text>' +
                '<text x="152" y="56" fill="#38bdf8" font-size="10" font-weight="bold">M</text>' +
                '<text x="167" y="86" fill="#fde047" font-size="10.5" font-weight="bold">I</text>' +
                '<text x="124" y="60" fill="#38bdf8" font-size="9.5" font-weight="bold">' + omVal + 'cm</text>' +
                '<text x="132" y="92" fill="#fde047" font-size="9.5" font-weight="bold">' + oiVal + 'cm</text>' +
            '</svg></div>';
        },

        statTable: function(row1Title, row1Arr, row2Title, row2Arr) {
            let h1 = '<td style="padding:4px 7px;border:1px solid #334155;color:#fde047;font-weight:800;white-space:nowrap;">' + row1Title + '</td>';
            let h2 = '<td style="padding:4px 7px;border:1px solid #334155;color:#38bdf8;font-weight:800;white-space:nowrap;">' + row2Title + '</td>';
            for (let i = 0; i < row1Arr.length; i++) {
                h1 += '<td style="padding:4px 6px;border:1px solid #334155;text-align:center;color:#f8fafc;font-weight:700;white-space:nowrap;">' + row1Arr[i] + '</td>';
                h2 += '<td style="padding:4px 6px;border:1px solid #334155;text-align:center;color:#4ade80;font-weight:800;">' + row2Arr[i] + '</td>';
            }
            return '<div style="overflow-x:auto;margin:8px 0 4px;"><table style="width:100%;border-collapse:collapse;background:#040b16;font-size:11.5px;border:1.5px solid #334155;border-radius:8px;">' +
                '<tr>' + h1 + '</tr><tr>' + h2 + '</tr></table></div>';
        }
    };

    // MODULE NT11-01: CẤP SỐ CỘNG, CẤP SỐ NHÂN & DÃY SỐ (CÂU 1, 2, 7 MÃ 101 & CÂU 7, 9, 10 MÃ 102)
    window.registerMathTopicGenerator('11', 'g11_nt_csc_csn_co_ban', {
        title: '🔢 Dãy số, Cấp số cộng (công sai d) & Cấp số nhân (công bội q) (Câu 1, 2, 7 Phần I)',
        shortLabel: '🔢 CSC & CSN cơ bản',
        keywords: /công sai|công bội|dãy số giảm|dãy số tăng|nguyễn trãi/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const mode = step % 3;
            if (mode === 0) {
                const u1 = ((seed + step) % 5) + 2;
                const q  = ((step % 4) + 2);
                const u2 = u1 * q;
                return {
                    q: '[Toán 11] Cho cấp số nhân ' + F.m('(u<sub>n</sub>)') + ' có ' + F.m('u<sub>1</sub> = ' + u1) + ' và ' + F.m('u<sub>2</sub> = ' + u2) + '. Giá trị của công bội ' + F.m('q') + ' bằng bao nhiêu?',
                    ans: String(q)
                };
            } else if (mode === 1) {
                const u1 = ((seed + step) % 7) + 2;
                const d  = ((seed * 2 + step) % 6) + 3;
                const u2 = u1 + d;
                return {
                    q: '[Toán 11] Cho cấp số cộng ' + F.m('(u<sub>n</sub>)') + ' có ' + F.m('u<sub>1</sub> = ' + u1) + ' và ' + F.m('u<sub>2</sub> = ' + u2) + '. Giá trị của công sai ' + F.m('d') + ' bằng bao nhiêu?',
                    ans: String(d)
                };
            } else {
                const d = ((seed + step) % 4) + 3;
                const u1 = 1;
                const u5 = u1 + 4 * d;
                return {
                    q: '[Toán 11] Cho cấp số cộng có 4 số hạng đầu lần lượt là ' + F.m(u1 + '; ' + (u1 + d) + '; ' + (u1 + 2 * d) + '; ' + (u1 + 3 * d)) + '. Số hạng thứ năm ' + F.m('u<sub>5</sub>') + ' của cấp số cộng này bằng bao nhiêu?',
                    ans: String(u5)
                };
            }
        }
    });

    // MODULE NT11-02: TÍNH CHẤT & ĐỒ THỊ ĐỒNG BIẾN/NGHỊCH BIẾN HÀM SỐ LƯỢNG GIÁC (CÂU 3, 4 MÃ 101 & CÂU 4, 6 MÃ 102)
    window.registerMathTopicGenerator('11', 'g11_nt_do_thi_dong_bien_nghich_bien', {
        title: '📈 Hàm số lượng giác: Khoảng đồng biến, nghịch biến trên đồ thị & Chu kì (Kèm SVG)',
        shortLabel: '📈 Đồ thị Đồng biến/Nghịch biến',
        keywords: /đồng biến trên|nghịch biến trên|tập giá trị/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const aAmp = ((seed + step) % 4) + 2;
            const bShift = ((step % 3) + 1);
            const svg = G11_NT_UI.monoGraph(true);
            return {
                q: '[Toán 11] Cho hàm số ' + F.m('y = f(x) = ' + aAmp + ' sin x + ' + bShift) + ' đồng biến trên khoảng ' + F.m('(&minus;' + F.frac('&pi;', '2') + '; ' + F.frac('&pi;', '2') + ')') + ' (có dạng đồ thị chuẩn như hình vẽ). Tính tổng giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn ' + F.m('[&minus;' + F.frac('&pi;', '2') + '; ' + F.frac('&pi;', '2') + ']') + '.' + svg,
                ans: String(2 * bShift)
            };
        }
    });

    // MODULE NT11-03: PHƯƠNG TRÌNH tan x = √3, tan x = √3/3 & TẬP XÁC ĐỊNH (CÂU 5, 8 MÃ 101 & CÂU 1, 12 MÃ 102)
    window.registerMathTopicGenerator('11', 'g11_nt_pt_tan_cot_txd', {
        title: '🔍 Phương trình tan x = √3, tan x = √3/3 & Tập xác định y = tan x, cot x (Câu 5, 8 Phần I)',
        shortLabel: '🔍 PT tan x & TXĐ',
        keywords: /tan x =|tập xác định của hàm số y = cot x/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const cases = [
                { rhs: F.sqrt('3'), degAns: 60, mDen: 3 },
                { rhs: F.frac(F.sqrt('3'), '3'), degAns: 30, mDen: 6 },
                { rhs: '1', degAns: 45, mDen: 4 }
            ];
            const pk = cases[(seed + step) % cases.length];
            if (step % 2 === 0) {
                return {
                    q: '[Toán 11] Biết họ nghiệm của phương trình ' + F.m('tan x = ' + pk.rhs) + ' có dạng ' + F.m('x = ' + F.frac('&pi;', 'm') + ' + k&pi; (k &isin; Z)') + '. Giá trị của số nguyên dương ' + F.m('m') + ' bằng bao nhiêu?',
                    ans: String(pk.mDen)
                };
            } else {
                return {
                    q: '[Toán 11] Nghiệm dương nhỏ nhất (đơn vị: độ) của phương trình lượng giác ' + F.m('tan x = ' + pk.rhs) + ' bằng bao nhiêu độ?',
                    ans: String(pk.degAns)
                };
            }
        }
    });

    // MODULE NT11-04: CÔNG THỨC BIẾN ĐỔI TÍCH THÀNH TỔNG (CÂU 9 MÃ 101 & CÂU 2 MÃ 102)
    window.registerMathTopicGenerator('11', 'g11_nt_tich_thanh_tong', {
        title: '⚡ Công thức biến đổi tích thành tổng: cos a·cos b & sin a·sin b (Câu 9 Mã 101 & Câu 2 Mã 102)',
        shortLabel: '⚡ Tích thành tổng',
        keywords: /tích thành tổng|cos a.cos b|sin a.sin b/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const kMult = (((seed + step) % 6) + 2) * 4;
            const ansVal = kMult / 4;
            if (step % 2 === 0) {
                return {
                    q: '[Toán 11] Áp dụng công thức biến đổi tích thành tổng ' + F.m('cos a &middot; cos b = ' + F.frac('1', '2') + '[cos(a + b) + cos(a &minus; b)]') + ', hãy tính giá trị của biểu thức ' + F.m('P = ' + kMult + ' cos 75° cos 15°') + '.',
                    ans: String(ansVal)
                };
            } else {
                return {
                    q: '[Toán 11] Áp dụng công thức biến đổi tích thành tổng ' + F.m('sin a &middot; sin b = &minus;' + F.frac('1', '2') + '[cos(a + b) &minus; cos(a &minus; b)]') + ', hãy tính giá trị của biểu thức ' + F.m('P = ' + kMult + ' sin 75° sin 15°') + '.',
                    ans: String(ansVal)
                };
            }
        }
    });

    // MODULE NT11-05: XÁC ĐỊNH SỐ ĐO GÓC LƯỢNG GIÁC TỪ HÌNH VẼ (CÂU 10 MÃ 101 & CÂU 3 MÃ 102)
    window.registerMathTopicGenerator('11', 'g11_nt_goc_luong_giac_hinh_ve', {
        title: '🧭 Góc lượng giác: Xác định số đo (Ou, Ov) và (OM, ON) từ hình vẽ (Kèm SVG)',
        shortLabel: '🧭 Góc (Ou, Ov) & (OM, ON)',
        keywords: /uov=40|mon=60|-300|-40/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const gAng = (((seed + step) % 5) + 3) * 10;
            if (step % 2 === 0) {
                const ansReflex = -(360 - gAng);
                const svg = G11_NT_UI.angleArc(gAng, true);
                return {
                    q: '[Toán 11] Cho góc hình học ' + F.m(F.ang('MON') + ' = ' + gAng + '°') + '. Xác định số đo (đơn vị: độ) của góc lượng giác ' + F.m('(OM, ON)') + ' quay theo chiều âm (cùng chiều kim đồng hồ) được biểu diễn trong hình vẽ bên dưới.' + svg,
                    ans: String(ansReflex)
                };
            } else {
                const svg = G11_NT_UI.angleArc(gAng, false);
                return {
                    q: '[Toán 11] Cho góc hình học ' + F.m(F.ang('uOv') + ' = ' + gAng + '°') + '. Số đo (đơn vị: độ) của góc lượng giác ' + F.m('(Ou, Ov)') + ' quay theo chiều âm như hình vẽ bên dưới bằng bao nhiêu?' + svg,
                    ans: String(-gAng)
                };
            }
        }
    });

    // MODULE NT11-06: MẪU SỐ LIỆU GHÉP NHÓM: GIÁ TRỊ ĐẠI DIỆN, XẾP NHÓM & TỨ PHÂN VỊ (CÂU 6, 11, 12 MÃ 101)
    window.registerMathTopicGenerator('11', 'g11_nt_mau_so_lieu_co_ban', {
        title: '📊 Thống kê ghép nhóm: Giá trị đại diện, Xếp nhóm [a; b) & Nhóm chứa Q₁, Q₃ (Kèm Bảng)',
        shortLabel: '📊 Giá trị đại diện & Q₁, Q₃',
        keywords: /giá trị đại diện|tứ phân vị thứ ba|tứ phân vị thứ nhất|chiều cao 170/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const mode = step % 3;
            if (mode === 0) {
                const groups = ['[0;20)', '[20;40)', '[40;60)', '[60;80)', '[80;100)'];
                const freqs  = [5, 9, 12, 10, 6];
                const pickIdx = ((seed + step) % 4) + 1;
                const aVal = pickIdx * 20;
                const bVal = (pickIdx + 1) * 20;
                const repVal = (aVal + bVal) / 2;
                const tbl = G11_NT_UI.statTable('Thời gian (phút)', groups, 'Số học sinh', freqs);
                return {
                    q: '[Toán 11] Khảo sát thời gian chạy bộ trong một ngày của một số học sinh khối 11 thu được mẫu số liệu ghép nhóm sau:' + tbl + 'Giá trị đại diện của nhóm ' + F.m('[' + aVal + '; ' + bVal + ')') + ' bằng bao nhiêu?',
                    ans: String(repVal)
                };
            } else if (mode === 1) {
                const groups = ['[150;155)', '[155;160)', '[160;165)', '[165;170)', '[170;175)', '[175;180)'];
                const freqs  = [25, 200, 165, 50, 50, 10];
                const pickIdx = ((seed + step) % 4) + 1;
                const borderH = 150 + (pickIdx * 5);
                const rightEnd = borderH + 5;
                const tbl = G11_NT_UI.statTable('Chiều cao (cm)', groups, 'Số học sinh', freqs);
                return {
                    q: '[Toán 11] Đo chiều cao (tính bằng cm) của 500 học sinh trong một trường THPT ta thu được bảng ghép nhóm sau:' + tbl + 'Các học sinh có chiều cao đúng ' + F.m(borderH + ' cm') + ' được xếp vào nhóm ' + F.m('[a; b)') + '. Tìm giá trị đầu mút phải ' + F.m('b') + ' của nhóm đó.',
                    ans: String(rightEnd)
                };
            } else {
                const groups = ['[2; 3,5)', '[3,5; 5)', '[5; 6,5)', '[6,5; 8)'];
                const freqs  = [8, 35, 22, 15];
                const tbl = G11_NT_UI.statTable('Tuổi thọ (năm)', groups, 'Số bóng đèn', freqs);
                return {
                    q: '[Toán 11] Cho mẫu số liệu ghép nhóm về tuổi thọ (đơn vị: năm) của 80 bóng đèn mới như sau:' + tbl + 'Biết nhóm chứa tứ phân vị thứ ba ' + F.m('Q<sub>3</sub>') + ' của mẫu số liệu có dạng ' + F.m('[a; b)') + '. Tính tổng ' + F.m('T = a + b') + '.',
                    ans: '11.5'
                };
            }
        }
    });

    // MODULE NT11-07: DÃY SỐ CHO BỞI CÔNG THỨC TRUY HỒI (CÂU 1 PHẦN II MÃ 101 & CÂU 2 PHẦN II MÃ 102)
    window.registerMathTopicGenerator('11', 'g11_nt_day_so_truy_hoi', {
        title: '🔁 Dãy số truy hồi: u_{n+1} = q·u_n và u_{n+1} = u_n + d (Câu 1, 2 Phần II)',
        shortLabel: '🔁 Dãy số truy hồi',
        keywords: /u_\{n\+1\}=-3u_n|4374|số hạng thứ 30/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                const u1 = ((seed + step) % 3) + 2;
                const q  = -(((step % 2) + 2));
                const kTerm = ((seed + step) % 3) + 5;
                const ukVal = u1 * Math.pow(q, kTerm - 1);
                return {
                    q: '[Toán 11] Cho dãy số ' + F.m('(u<sub>n</sub>)') + ' thỏa mãn ' + F.m('u<sub>1</sub> = ' + u1) + ' và ' + F.m('u<sub>n+1</sub> = ' + q + 'u<sub>n</sub> (&forall;n &isin; N*)') + '. Tính giá trị của số hạng thứ ' + F.m(kTerm) + ' (tức ' + F.m('u<sub>' + kTerm + '</sub>') + ') của dãy số trên.',
                    ans: String(ukVal)
                };
            } else {
                const u1 = ((seed + step) % 6) + 3;
                const dSub = ((step % 4) + 2);
                const kTerm = (((seed * 2 + step) % 3) + 2) * 10;
                const ukVal = u1 - (kTerm - 1) * dSub;
                return {
                    q: '[Toán 11] Cho dãy số ' + F.m('(u<sub>n</sub>)') + ' thỏa mãn ' + F.m('u<sub>1</sub> = ' + u1) + ' và ' + F.m('u<sub>n+1</sub> = u<sub>n</sub> &minus; ' + dSub + ' (&forall;n &isin; N*)') + '. Tính số hạng thứ ' + F.m(kTerm) + ' của dãy số trên.',
                    ans: String(ukVal)
                };
            }
        }
    });

    // MODULE NT11-08: TÍNH sin 2a KHI BIẾT sin a = 4/5 HOẶC cos a = 4/5 (CÂU 2 PHẦN II MÃ 101 & CÂU 1 PHẦN II MÃ 102)
    window.registerMathTopicGenerator('11', 'g11_nt_sin2a_goc_phan_tu', {
        title: '📐 Lượng giác: Tính sin 2a khi biết sin a = 4/5 (π/2 < a < π) hoặc cos a = 4/5 (Câu 2 Phần II)',
        shortLabel: '📐 Tính sin 2a từ sin a',
        keywords: /-24\/25|sin 2a|4\/5/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const isObtuse = (step % 2 === 0);
            if (isObtuse) {
                const pyth = [
                    { sinNum: 4, cosAbs: 3, den: 5,  denSq: 25,  ans25: -24 },
                    { sinNum: 3, cosAbs: 4, den: 5,  denSq: 25,  ans25: -24 },
                    { sinNum: 5, cosAbs: 12, den: 13, denSq: 169, ans25: -120 }
                ];
                const pk = pyth[(seed + step) % pyth.length];
                return {
                    q: '[Toán 11] Biết ' + F.m('sin a = ' + F.frac(pk.sinNum, pk.den)) + ' với ' + F.m(F.frac('&pi;', '2') + ' &lt; a &lt; &pi;') + '. Tính giá trị của biểu thức ' + F.m('P = ' + pk.denSq + ' sin 2a') + '.',
                    ans: String(pk.ans25)
                };
            } else {
                const pyth = [
                    { cosNum: 4, sinPos: 3, den: 5,  denSq: 25,  ans25: 24 },
                    { cosNum: 5, sinPos: 12, den: 13, denSq: 169, ans25: 120 }
                ];
                const pk = pyth[(seed + step) % pyth.length];
                return {
                    q: '[Toán 11] Biết ' + F.m('cos a = ' + F.frac(pk.cosNum, pk.den)) + ' với ' + F.m('0 &lt; a &lt; ' + F.frac('&pi;', '2')) + '. Tính giá trị của biểu thức ' + F.m('P = ' + pk.denSq + ' sin 2a') + '.',
                    ans: String(pk.ans25)
                };
            }
        }
    });

    // MODULE NT11-09: TOÁN THỰC TẾ SỐ GIỜ CÓ ÁNH SÁNG MẶT TRỜI (CÂU 1 PHẦN III MÃ 101 & CÂU 2 PHẦN III MÃ 102)
    window.registerMathTopicGenerator('11', 'g11_nt_gio_anh_sang_mat_troi', {
        title: '☀️ Toán thực tế: Số giờ có ánh sáng mặt trời lớn nhất / nhỏ nhất trong năm (Câu 1 Phần III)',
        shortLabel: '☀️ Giờ ánh sáng Mặt Trời',
        keywords: /ánh sáng mặt trời|vĩ độ|178|365/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const A = ((seed + step) % 3) + 3;
            const B = ((seed * 2 + step) % 3) + 10;
            if (step % 2 === 0) {
                return {
                    q: '[Toán 11] Số giờ có ánh sáng mặt trời trong ngày thứ ' + F.m('t (0 &lt; t &le; 365, t &isin; Z)') + ' của một thành phố A ở vĩ độ ' + F.m('40°') + ' Bắc được cho bởi hàm số ' + F.m('y = ' + A + ' sin ' + F.frac('&pi;(t &minus; 60)', '178') + ' + ' + B) + '. Gọi ' + F.m('m') + ' là số giờ có ánh sáng mặt trời của ngày có nhiều ánh sáng mặt trời nhất trong năm. Giá trị của ' + F.m('m') + ' bằng bao nhiêu?',
                    ans: String(B + A)
                };
            } else {
                return {
                    q: '[Toán 11] Số giờ có ánh sáng mặt trời trong ngày thứ ' + F.m('t (0 &lt; t &le; 365, t &isin; Z)') + ' của một thành phố A ở vĩ độ ' + F.m('40°') + ' Bắc được cho bởi hàm số ' + F.m('y = ' + A + ' sin ' + F.frac('&pi;(t &minus; 60)', '178') + ' + ' + B) + '. Gọi ' + F.m('m') + ' là số giờ có ánh sáng mặt trời của ngày có ít ánh sáng mặt trời nhất trong năm. Giá trị của ' + F.m('m') + ' bằng bao nhiêu?',
                    ans: String(B - A)
                };
            }
        }
    });

    // MODULE NT11-10: TÍNH SỐ TRUNG BÌNH CỘNG MẪU SỐ LIỆU GHÉP NHÓM (CÂU 2 PHẦN III MÃ 101 & CÂU 3 PHẦN III MÃ 102)
    window.registerMathTopicGenerator('11', 'g11_nt_so_trung_binh_ghep_nhom', {
        title: '📊 Thống kê: Tính thời gian trung bình hoàn thành bài kiểm tra trực tuyến (Kèm Bảng)',
        shortLabel: '📊 Số trung bình ghép nhóm',
        keywords: /thời gian trung bình hoàn thành|kiểm tra trực tuyến|38,9|36,8/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const datasets = [
                {
                    groups: ['[33;35)', '[35;37)', '[37;39)', '[39;41)', '[41;43)', '[43;45)'],
                    reps:   [34, 36, 38, 40, 42, 44],
                    freqs:  [4, 13, 38, 27, 14, 4]
                },
                {
                    groups: ['[30;33)', '[33;36)', '[36;39)', '[39;42)', '[42;45)'],
                    reps:   [31.5, 34.5, 37.5, 40.5, 43.5],
                    freqs:  [5, 35, 24, 16, 4]
                },
                {
                    groups: ['[33;35)', '[35;37)', '[37;39)', '[39;41)', '[41;43)', '[43;45)'],
                    reps:   [34, 36, 38, 40, 42, 44],
                    freqs:  [6, 14, 35, 25, 15, 5]
                }
            ];
            const ds = datasets[(seed + step) % datasets.length];
            let sumFX = 0, sumN = 0;
            for (let i = 0; i < ds.freqs.length; i++) {
                sumFX += ds.reps[i] * ds.freqs[i];
                sumN  += ds.freqs[i];
            }
            const meanVal = Math.round((sumFX / sumN) * 10) / 10;
            const tbl = G11_NT_UI.statTable('Thời gian (phút)', ds.groups, 'Số học sinh', ds.freqs);
            return {
                q: '[Toán 11] Cho mẫu số liệu ghép nhóm về thống kê thời gian (phút) hoàn thành một bài kiểm tra trực tuyến của nhóm học sinh như bảng sau:' + tbl + 'Tính thời gian trung bình hoàn thành bài kiểm tra của nhóm học sinh này (kết quả làm tròn đến hàng phần chục).',
                ans: String(meanVal)
            };
        }
    });

    // MODULE NT11-11: TOÁN THỰC TẾ DÂY KIM TUYẾN VIỀN 5 CÁNH HOA PHIẾU BÉ NGOAN (CÂU 3 PHẦN III MÃ 101 & CÂU 4 MÃ 102)
    window.registerMathTopicGenerator('11', 'g11_nt_phieu_be_ngoan_kim_tuyen', {
        title: '🌸 Toán thực tế Vận dụng cao: Mua dây kim tuyến viền 5 cánh hoa Phiếu Bé Ngoan (Kèm SVG)',
        shortLabel: '🌸 Hoa Phiếu Bé Ngoan',
        keywords: /phiếu bé ngoan|dây kim tuyến|cánh hoa|5,51|6,08/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const cases = [
                { om: 40, oi: 45 },
                { om: 45, oi: 50 },
                { om: 35, oi: 40 },
                { om: 50, oi: 55 }
            ];
            const pk = cases[(seed + step) % cases.length];
            const om = pk.om, oi = pk.oi;
            const rad36 = 36 * Math.PI / 180;
            const rSq   = (om * om) + (oi * oi) - (2 * om * oi * Math.cos(rad36));
            const rPetal = Math.sqrt(rSq);
            const cosOIM = ((oi * oi) + rSq - (om * om)) / (2 * oi * rPetal);
            const angOIM = Math.acos(cosOIM);
            const arcAngle = (2 * Math.PI) - (2 * angOIM);
            const totalMeters = Math.round(((5 * rPetal * arcAngle) / 100) * 100) / 100;
            const svg = G11_NT_UI.flowerPetals(om, oi);
            return {
                q: '[Toán 11] Trên bức tường của một trường mẫu giáo có vẽ hình "Phiếu Bé Ngoan" 5 cánh hoa đều nhau như hình vẽ. Cô giáo muốn mua dây kim tuyến bao quanh phần viền ngoài của 5 cánh hoa (phần nét liền). Biết rằng các cánh hoa là các cung tròn có bán kính bằng nhau, có tâm ' + F.m('I') + ' cách điểm ' + F.m('O') + ' một khoảng ' + F.m('OI = ' + oi + ' cm') + ' và các giao điểm ' + F.m('M') + ' của các cung tròn cách ' + F.m('O') + ' một khoảng ' + F.m('OM = ' + om + ' cm') + '. Hãy giúp cô giáo tính xem cần mua bao nhiêu mét dây kim tuyến (làm tròn kết quả đến hàng phần trăm).' + svg,
                ans: String(totalMeters)
            };
        }
    });

    // MODULE NT11-12: TOÁN THỰC TẾ ĐỂ DÀNH TIỀN MUA QUÀ SINH NHẬT MẸ (CÂU 4 PHẦN III MÃ 101 & CÂU 1 MÃ 102)
    window.registerMathTopicGenerator('11', 'g11_nt_tiet_kiem_mua_qua_me', {
        title: '🎁 Toán thực tế CSC & CSN: Để dành tiền mua quà tặng sinh nhật mẹ (Câu 4 Mã 101 & Câu 1 Mã 102)',
        shortLabel: '🎁 Tiết kiệm mua quà Mẹ',
        keywords: /tặng sinh nhật mẹ|bạn tèo|bạn tí|546000|900.000/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                const aList = [1000, 1500, 2000, 2500];
                const aVal  = aList[(seed + step) % aList.length];
                const giftCost = 364 * aVal;
                return {
                    q: '[Toán 11] Bạn Tèo muốn mua quà trị giá ' + F.m(giftCost) + ' đồng tặng sinh nhật mẹ vào ngày ' + F.m('02/03/2025') + '. Bắt đầu từ ngày ' + F.m('25/02/2025') + ' bạn để dành ' + F.m('a') + ' đồng, các ngày sau, mỗi ngày để dành gấp ba số tiền ngày hôm trước, đến đúng ngày sinh nhật mẹ (' + F.m('02/03/2025') + ') thì tổng số tiền bạn Tèo để dành vừa đủ để mua quà. Hỏi ' + F.m('a') + ' bằng bao nhiêu?',
                    ans: String(aVal)
                };
            } else {
                const aList = [1000, 1500, 2000, 3000];
                const aVal  = aList[(seed + step) % aList.length];
                const giftCost = (30 * aVal) + 870000;
                return {
                    q: '[Toán 11] Bạn Tí muốn mua quà trị giá ' + F.m(giftCost) + ' đồng tặng sinh nhật mẹ vào ngày ' + F.m('01/03/2024') + ' (biết năm 2024 là năm nhuận, tháng 2 có 29 ngày). Bắt đầu từ ngày ' + F.m('01/02/2024') + ' bạn để dành ' + F.m('a') + ' đồng, các ngày sau, mỗi ngày nhiều hơn ngày hôm trước ' + F.m('2000') + ' đồng, đến ngày sinh nhật mẹ (' + F.m('01/03/2024') + ') thì bạn Tí vừa đủ tiền mua quà. Hỏi ' + F.m('a') + ' bằng bao nhiêu?',
                    ans: String(aVal)
                };
            }
        }
    });

    // MODULE NT11-13: TỰ LUẬN TÌM VỊ TRÍ SỐ HẠNG TRONG CSC & CSN (CÂU 1 PHẦN IV MÃ 101 & CÂU 3 PHẦN IV MÃ 102)
    window.registerMathTopicGenerator('11', 'g11_nt_tim_so_hang_thu_k', {
        title: '🔍 Tự luận Dãy số: Tìm số hạng tổng quát & Xác định số X là số hạng thứ mấy của CSC, CSN',
        shortLabel: '🔍 Số hạng thứ mấy CSC/CSN',
        keywords: /số 68 là số hạng thứ mấy|số 1024 là số hạng thứ mấy|số hạng tổng quát/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                const u1 = -2;
                const d  = 5;
                const nPos = ((seed + step) % 10) + 12;
                const uk = u1 + (nPos - 1) * d;
                return {
                    q: '[Toán 11] Cho cấp số cộng có các số hạng đầu lần lượt là ' + F.m('&minus;2; 3; 8; 13; ...') + '. Hỏi số ' + F.m(uk) + ' là số hạng thứ mấy của cấp số cộng trên?',
                    ans: String(nPos)
                };
            } else {
                const q = ((step % 2) === 0) ? 4 : 3;
                const nPos = ((seed + step) % 4) + 5;
                const uk = Math.pow(q, nPos - 1);
                return {
                    q: '[Toán 11] Cho cấp số nhân có các số hạng đầu lần lượt là ' + F.m('1; ' + q + '; ' + (q * q) + '; ' + (q * q * q) + '; ...') + '. Hỏi số ' + F.m(uk) + ' là số hạng thứ mấy của cấp số nhân trên?',
                    ans: String(nPos)
                };
            }
        }
    });

    // MODULE NT11-14: TỰ LUẬN GIẢI PHƯƠNG TRÌNH LƯỢNG GIÁC 2cos(x - 30°) + 1 = 0 (CÂU 2 MÃ 101 & CÂU 1 MÃ 102)
    window.registerMathTopicGenerator('11', 'g11_nt_giai_pt_cos_sin_do', {
        title: '📐 Tự luận PT Lượng giác: Giải phương trình 2cos(x − 30°) + 1 = 0 & 2sin(x − 30°) − 1 = 0',
        shortLabel: '📐 PT 2cos(x − 30°) + 1 = 0',
        keywords: /2cos\(x-30\)\+1=0|2sin\(x-30\)-1=0/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const alphaShift = (((seed + step) % 4) + 1) * 15;
            if (step % 2 === 0) {
                return {
                    q: '[Toán 11] Giải phương trình lượng giác ' + F.m('2 cos(x &minus; ' + alphaShift + '°) + 1 = 0') + '. Tìm nghiệm dương nhỏ nhất (đơn vị: độ) của phương trình đã cho.',
                    ans: String(alphaShift + 120)
                };
            } else {
                return {
                    q: '[Toán 11] Giải phương trình lượng giác ' + F.m('2 sin(x &minus; ' + alphaShift + '°) &minus; 1 = 0') + '. Tìm nghiệm dương nhỏ nhất (đơn vị: độ) của phương trình đã cho.',
                    ans: String(alphaShift + 30)
                };
            }
        }
    });

    // MODULE NT11-15: VẬT DAO ĐỘNG ĐIỀU HÒA QUA VỊ TRÍ CÂN BẰNG TRONG 2025 GIÂY (CÂU 3 MÃ 101 & CÂU 4 MÃ 102)
    window.registerMathTopicGenerator('11', 'g11_nt_dao_dong_qua_vtcb', {
        title: '⏱️ Tự luận Vật lí: Số lần vật dao động qua vị trí cân bằng trong 2025 giây (Câu 3 Mã 101 & Câu 4 Mã 102)',
        shortLabel: '⏱️ Qua VTCB trong 2025s',
        keywords: /vị trí cân bằng bao nhiêu lần|2025 giây|1933|2578/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const cases = [
                { amp: 2, omega: 3, phiStr: F.frac('&pi;', '4'), phiOverPi: 0.25, tMax: 2025 },
                { amp: 3, omega: 4, phiStr: F.frac('&pi;', '3'), phiOverPi: 1/3,  tMax: 2025 },
                { amp: 2, omega: 3, phiStr: F.frac('&pi;', '4'), phiOverPi: 0.25, tMax: 2026 },
                { amp: 4, omega: 2, phiStr: F.frac('&pi;', '4'), phiOverPi: 0.25, tMax: 2025 }
            ];
            const pk = cases[(seed + step) % cases.length];
            const kMax = Math.floor(((pk.tMax * pk.omega) / Math.PI) - 0.5 - pk.phiOverPi);
            const totalPass = kMax + 1;
            return {
                q: '[Toán 11] Giả sử một vật dao động điều hòa xung quanh vị trí cân bằng theo phương trình ' + F.m('x = ' + pk.amp + ' cos(' + pk.omega + 't &minus; ' + pk.phiStr + ')') + ', ở đây thời gian ' + F.m('t') + ' tính bằng giây và li độ ' + F.m('x') + ' tính bằng centimét. Trong ' + F.m(pk.tMax) + ' giây đầu tiên, vật đi qua vị trí cân bằng (' + F.m('x = 0') + ') tất cả bao nhiêu lần?',
                ans: String(totalPass)
            };
        }
    });

    // MODULE NT11-16: TỰ LUẬN TRUNG VỊ Q2 NHẬN ĐỊNH 50% HỌC SINH ĐẠT ĐIỂM TỪ BAO NHIÊU (CÂU 4 MÃ 101 & CÂU 2 MÃ 102)
    window.registerMathTopicGenerator('11', 'g11_nt_trung_vi_diem_50_phan_tram', {
        title: '📊 Tự luận Thống kê: Tính trung vị Q₂ nhận định 50% học sinh đạt điểm từ bao nhiêu trở lên (Kèm Bảng)',
        shortLabel: '📊 Trung vị Q₂ (50% HS)',
        keywords: /50% học sinh trong lớp có điểm từ bao nhiêu|5,45|5,3/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const tables = [
                { freqs: [1, 5, 22, 10, 6], ansQ2: 5.45 },
                { freqs: [2, 6, 20, 12, 2], ansQ2: 5.3 },
                { freqs: [2, 5, 20, 10, 3], ansQ2: 5.3 },
                { freqs: [1, 7, 20, 8, 4],  ansQ2: 5.2 }
            ];
            const pk = tables[(seed + step) % tables.length];
            const groups = ['[0;2)', '[2;4)', '[4;6)', '[6;8)', '[8;10)'];
            const tbl = G11_NT_UI.statTable('Điểm số', groups, 'Số học sinh', pk.freqs);
            return {
                q: '[Toán 11] Kết quả bài kiểm tra Toán Giữa HKI của lớp 11A được ghi lại ở bảng ghép nhóm sau:' + tbl + 'Dựa vào bảng số liệu trên (tính trung vị ' + F.m('Q<sub>2</sub>') + ', làm tròn đến hàng phần trăm nếu cần), giáo viên Toán có thể nhận định ' + F.m('50%') + ' học sinh trong lớp có điểm từ bao nhiêu trở lên?',
                ans: String(pk.ansQ2)
            };
        }
    });

    if (typeof window.refreshAdminTopicDropdown === 'function') {
        window.refreshAdminTopicDropdown();
    }
})();
//===========
(function() {
    if (typeof window.registerMathTopicGenerator !== 'function') return;
    const F = window.IMATHS_FMT;

    // ===================================================================
    // BỘ HÀM VẼ HÌNH SVG & BẢNG SỐ LIỆU CHUẨN ĐỀ ÔN THI GKI TOÁN 11 (ĐỀ 1 & ĐỀ 2)
    // ===================================================================
    const G11_WEB_UI = {
        // 1. Hình Cung tròn bán kính R và góc ở tâm alpha (Đề 1 - Câu 2 Phần I)
        circleArcLen: function(rCm, numPi, denPi) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 240 138" width="230" height="132">' +
                '<circle cx="115" cy="70" r="50" fill="rgba(56,189,248,0.12)" stroke="#334155" stroke-width="1.6" stroke-dasharray="4 3"/>' +
                '<path d="M 165 70 A 50 50 0 1 0 72 95" fill="none" stroke="#fde047" stroke-width="3"/>' +
                '<line x1="115" y1="70" x2="165" y2="70" stroke="#38bdf8" stroke-width="2"/>' +
                '<line x1="115" y1="70" x2="72" y2="95" stroke="#38bdf8" stroke-width="2"/>' +
                '<circle cx="115" cy="70" r="3.2" fill="#fde047"/>' +
                '<text x="112" y="86" fill="#cbd5e1" font-size="10.5" font-weight="bold">O</text>' +
                '<text x="132" y="64" fill="#4ade80" font-size="10" font-weight="bold">R=' + rCm + 'cm</text>' +
                '<text x="86" y="54" fill="#fde047" font-size="10.5" font-weight="bold">&alpha;=' + numPi + '&pi;/' + denPi + '</text>' +
                '<text x="172" y="42" fill="#fde047" font-size="11" font-weight="bold">l = ?</text>' +
            '</svg></div>';
        },

        // 2. Đồ thị Mực nước thủy triều cảng biển h(t) = m + a*cos(πt/12) (Đề 1 - Câu 2 Phần III)
        tideGraph: function(hMax, hMin) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 250 142" width="235" height="135">' +
                '<line x1="28" y1="115" x2="232" y2="115" stroke="#94a3b8" stroke-width="1.5"/><polygon points="236,115 228,111 228,119" fill="#94a3b8"/>' +
                '<line x1="38" y1="128" x2="38" y2="14" stroke="#94a3b8" stroke-width="1.5"/><polygon points="38,10 34,18 42,18" fill="#94a3b8"/>' +
                '<line x1="38" y1="32" x2="208" y2="32" stroke="#475569" stroke-width="1.1" stroke-dasharray="3 3"/>' +
                '<line x1="38" y1="74" x2="123" y2="74" stroke="#475569" stroke-width="1.1" stroke-dasharray="3 3"/>' +
                '<line x1="123" y1="74" x2="123" y2="115" stroke="#475569" stroke-width="1.1" stroke-dasharray="3 3"/>' +
                '<line x1="208" y1="32" x2="208" y2="115" stroke="#475569" stroke-width="1.1" stroke-dasharray="3 3"/>' +
                '<path d="M 38 32 C 75 32, 90 74, 123 74 C 156 74, 171 32, 208 32" fill="none" stroke="#38bdf8" stroke-width="2.5"/>' +
                '<circle cx="38" cy="32" r="3" fill="#fde047"/><circle cx="123" cy="74" r="3.5" fill="#4ade80"/><circle cx="208" cy="32" r="3" fill="#fde047"/>' +
                '<text x="14" y="36" fill="#fde047" font-size="10.5" font-weight="bold">' + hMax + '</text>' +
                '<text x="18" y="78" fill="#4ade80" font-size="10.5" font-weight="bold">' + hMin + '</text>' +
                '<text x="24" y="128" fill="#cbd5e1" font-size="10">O</text>' +
                '<text x="116" y="128" fill="#fde047" font-size="10" font-weight="bold">12</text>' +
                '<text x="201" y="128" fill="#fde047" font-size="10" font-weight="bold">24</text>' +
                '<text x="120" y="66" fill="#4ade80" font-size="10.5" font-weight="bold">I</text>' +
                '<text x="44" y="18" fill="#cbd5e1" font-size="10" font-style="italic">h(m)</text>' +
                '<text x="218" y="108" fill="#cbd5e1" font-size="10" font-style="italic">t(h)</text>' +
            '</svg></div>';
        },

        // 3. Hình Dãy hình vuông lồng nhau a1, a2, a3... (Đề 1 - Câu 4 Phần III)
        nestedSquares: function(edgeVal) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 240 142" width="230" height="135">' +
                '<rect x="65" y="16" width="110" height="110" fill="none" stroke="#38bdf8" stroke-width="2"/>' +
                '<polygon points="92,16 175,43 148,126 65,99" fill="rgba(56,189,248,0.08)" stroke="#4ade80" stroke-width="1.7"/>' +
                '<polygon points="113,23 168,64 127,119 72,78" fill="rgba(250,204,21,0.08)" stroke="#fde047" stroke-width="1.5"/>' +
                '<polygon points="127,33 158,78 113,109 82,64" fill="none" stroke="#c084fc" stroke-width="1.3"/>' +
                '<polygon points="135,44 147,82 109,94 97,56" fill="none" stroke="#f87171" stroke-width="1.1"/>' +
                '<text x="120" y="11" fill="#fde047" font-size="10.5" font-weight="bold" text-anchor="middle">a₁ = ' + edgeVal + 'm</text>' +
            '</svg></div>';
        },

        // 4. Hình Bánh xe đạp quay với vận tốc v (km/h) (Đề 2 - Câu 1 Phần III)
        bicycleWheel: function(diamCm, velKmh) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 240 138" width="230" height="132">' +
                '<line x1="20" y1="118" x2="220" y2="118" stroke="#94a3b8" stroke-width="2"/>' +
                '<circle cx="115" cy="70" r="46" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" stroke-width="3"/>' +
                '<circle cx="115" cy="70" r="40" fill="none" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3 3"/>' +
                '<line x1="69" y1="70" x2="161" y2="70" stroke="#64748b" stroke-width="1.3"/>' +
                '<line x1="115" y1="24" x2="115" y2="116" stroke="#64748b" stroke-width="1.3"/>' +
                '<line x1="82" y1="37" x2="148" y2="103" stroke="#64748b" stroke-width="1.3"/>' +
                '<line x1="148" y1="37" x2="82" y2="103" stroke="#64748b" stroke-width="1.3"/>' +
                '<circle cx="115" cy="70" r="5" fill="#fde047"/>' +
                '<text x="170" y="55" fill="#fde047" font-size="10.5" font-weight="bold">d=' + diamCm + 'cm</text>' +
                '<text x="170" y="75" fill="#4ade80" font-size="10.5" font-weight="bold">v=' + velKmh + 'km/h</text>' +
            '</svg></div>';
        },

        // 5. Bảng thống kê mẫu số liệu ghép nhóm
        statTable: function(row1Title, row1Arr, row2Title, row2Arr) {
            let h1 = '<td style="padding:4px 7px;border:1px solid #334155;color:#fde047;font-weight:800;white-space:nowrap;">' + row1Title + '</td>';
            let h2 = '<td style="padding:4px 7px;border:1px solid #334155;color:#38bdf8;font-weight:800;white-space:nowrap;">' + row2Title + '</td>';
            for (let i = 0; i < row1Arr.length; i++) {
                h1 += '<td style="padding:4px 6px;border:1px solid #334155;text-align:center;color:#f8fafc;font-weight:700;white-space:nowrap;">' + row1Arr[i] + '</td>';
                h2 += '<td style="padding:4px 6px;border:1px solid #334155;text-align:center;color:#4ade80;font-weight:800;">' + row2Arr[i] + '</td>';
            }
            return '<div style="overflow-x:auto;margin:8px 0 4px;"><table style="width:100%;border-collapse:collapse;background:#040b16;font-size:11.5px;border:1.5px solid #334155;border-radius:8px;">' +
                '<tr>' + h1 + '</tr><tr>' + h2 + '</tr></table></div>';
        }
    };

    // MODULE W11-01: ĐỔI ĐỘ SANG RADIAN & TÍNH ĐỘ DÀI CUNG TRÒN (ĐỀ 1 - CÂU 1, 2 PHẦN I)
    window.registerMathTopicGenerator('11', 'g11_web_radian_cung_tron', {
        title: '⭕ Góc & Cung lượng giác: Đổi độ sang radian & Tính độ dài cung tròn (Kèm SVG)',
        shortLabel: '⭕ Đổi Radian & Cung tròn',
        keywords: /radian|độ dài cung|đường tròn có bán kính/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Đề 1 - Câu 1 Phần I: Đổi góc từ độ sang radian a*π/b (tối giản)
                const pairs = [
                    { deg: 60,  a: 1, b: 3 },
                    { deg: 45,  a: 1, b: 4 },
                    { deg: 30,  a: 1, b: 6 },
                    { deg: 120, a: 2, b: 3 },
                    { deg: 135, a: 3, b: 4 },
                    { deg: 150, a: 5, b: 6 }
                ];
                const pk = pairs[(seed + step) % pairs.length];
                return {
                    q: '[Toán 11] Khi đổi số đo của góc ' + F.m(pk.deg + '°') + ' sang đơn vị radian, ta được kết quả có dạng ' + F.m(F.frac('a&pi;', 'b')) + ' (với ' + F.m('a, b &isin; N*') + ' và ' + F.m(F.frac('a', 'b')) + ' là phân số tối giản). Tính tổng ' + F.m('T = a + b') + '.',
                    ans: String(pk.a + pk.b)
                };
            } else {
                // Đề 1 - Câu 2 Phần I: Đường tròn bán kính R = 4cm, cung có số đo 7π/6 => độ dài l = R * α = 14π/3
                const rVal = ((seed + step) % 4 + 2) * 2; // 4, 6, 8, 10 cm
                const numPi = 7;
                const denPi = 6;
                // l = (rVal * 7) / 6 * π. Hỏi giá trị của 6*l / π = 7 * rVal (Nguyên tuyệt đối!)
                const svg = G11_WEB_UI.circleArcLen(rVal, numPi, denPi);
                return {
                    q: '[Toán 11] Một đường tròn có bán kính ' + F.m('R = ' + rVal + ' cm') + '. Cung trên đường tròn đó có số đo ' + F.m('&alpha; = ' + F.frac('7&pi;', '6')) + ' rad thì có độ dài bằng ' + F.m('l (cm)') + ' (tham khảo hình vẽ). Tính giá trị của biểu thức ' + F.m('P = ' + F.frac('6l', '&pi;')) + '.' + svg,
                    ans: String(7 * rVal)
                };
            }
        }
    });

    // MODULE W11-02: GÓC PHỤ NHAU, CÔNG THỨC CỘNG & TỔNG THÀNH TÍCH (ĐỀ 1 CÂU 3, 4 & ĐỀ 2 CÂU 1, 4, 5)
    window.registerMathTopicGenerator('11', 'g11_web_goc_phu_tong_tich', {
        title: '⚡ Công thức lượng giác: Góc phụ nhau, Công thức cộng & Tổng thành tích (Đề 1 & Đề 2)',
        shortLabel: '⚡ Góc phụ & Tổng thành tích',
        keywords: /sin u - sin v|cos\(\\pi\/2|khẳng định nào sau đây/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Đề 2 - Câu 5 Phần I: Cho cos α = 3/5 (0 < α < π/2), tính sin α = 4/5 = 0.8
                const triples = [
                    { cosStr: F.frac('3', '5'), sinDec: 0.8 },
                    { cosStr: F.frac('4', '5'), sinDec: 0.6 },
                    { cosStr: '0,6',            sinDec: 0.8 },
                    { cosStr: '0,8',            sinDec: 0.6 }
                ];
                const pk = triples[(seed + step) % triples.length];
                return {
                    q: '[Toán 11] Cho góc lượng giác ' + F.m('&alpha;') + ' thỏa mãn ' + F.m('cos &alpha; = ' + pk.cosStr) + ' với ' + F.m('0 &lt; &alpha; &lt; ' + F.frac('&pi;', '2')) + '. Giá trị của ' + F.m('sin &alpha;') + ' (viết dưới dạng số thập phân) bằng bao nhiêu?',
                    ans: String(pk.sinDec)
                };
            } else {
                // Đề 1 - Câu 4 Phần I: Áp dụng sin u - sin v = 2 cos((u+v)/2) sin((u-v)/2) với u = 75°, v = 15°
                // sin 75° - sin 15° = 2 cos 45° sin 30° = 2 * (sqrt(2)/2) * (1/2) = sqrt(2)/2 => bình phương nhân 4k
                const k = ((seed + step) % 6) + 2;
                return {
                    q: '[Toán 11] Áp dụng công thức biến đổi tổng thành tích ' + F.m('sin u &minus; sin v = 2 cos ' + F.frac('u + v', '2') + ' sin ' + F.frac('u &minus; v', '2')) + ', hãy tính giá trị của biểu thức ' + F.m('P = ' + (2 * k) + '(sin 75° &minus; sin 15°)<sup>2</sup>') + '.',
                    ans: String(k)
                };
            }
        }
    });

    // MODULE W11-03: TÍNH cos(π/4 + x) KHI BIẾT sin x = 1/3 VÀ tính 9cos 2α (ĐỀ 1 CÂU 1 & ĐỀ 2 CÂU 2 PHẦN III)
    window.registerMathTopicGenerator('11', 'g11_web_tinh_cos_2a_goc_cong', {
        title: '🧭 Lượng giác Trả lời ngắn: Tính cos(π/4 + x) và P = 9cos 2α (Đề 1 & Đề 2 Phần III)',
        shortLabel: '🧭 Tính cos(π/4+x) & 9cos 2α',
        keywords: /9 cos 2|cos\(\\pi\/4\+x\)|1\/3/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Đề 2 - Câu 2 Phần III: Cho cos α = 1/k (0 < α < π/2), tính P = k^2 * cos 2α = k^2 * (2/k^2 - 1) = 2 - k^2
                // Khi k = 3: cos α = 1/3 => P = 9 * cos 2α = 2 - 9 = -7 (Chuẩn 100% Đề 2 Câu 2 Phần III!)
                const k = ((seed + step) % 5) + 3; // 3, 4, 5, 6, 7
                const k2 = k * k;
                const ansP = 2 - k2;
                return {
                    q: '[Toán 11] Cho góc lượng giác ' + F.m('&alpha;') + ' thỏa mãn ' + F.m('cos &alpha; = ' + F.frac('1', k)) + ' và ' + F.m('0 &lt; &alpha; &lt; ' + F.frac('&pi;', '2')) + '. Tính giá trị của biểu thức ' + F.m('P = ' + k2 + ' cos 2&alpha;') + '.',
                    ans: String(ansP)
                };
            } else {
                // Đề 1 - Câu 1 Phần III: Cho x ∈ (π/2; π) và sin x = 1/3 => cos x = -2*sqrt(2)/3
                // A = cos(π/4 + x) = sqrt(2)/2 * (cos x - sin x) = (-4 - sqrt(2))/6 ≈ -0.9 (Làm tròn đến hàng phần chục)
                const k = ((seed + step) % 3) + 3; // 3, 4, 5
                const sinX = 1 / k;
                const cosX = -Math.sqrt(1 - sinX * sinX);
                const valA = (Math.SQRT2 / 2) * (cosX - sinX);
                const ansRound = Math.round(valA * 10) / 10;
                return {
                    q: '[Toán 11] Cho góc lượng giác ' + F.m('x &isin; (' + F.frac('&pi;', '2') + '; &pi;)') + ' và có ' + F.m('sin x = ' + F.frac('1', k)) + '. Tính giá trị của biểu thức ' + F.m('A = cos(' + F.frac('&pi;', '4') + ' + x)') + ' (làm tròn kết quả đến hàng phần chục).',
                    ans: String(ansRound)
                };
            }
        }
    });

    // MODULE W11-04: TẬP GIÁ TRỊ, GTLN & GTNN CỦA HÀM SỐ y = a*sin(bx) - c (ĐỀ 1 & ĐỀ 2 CÂU 1 PHẦN II)
    window.registerMathTopicGenerator('11', 'g11_web_gtln_gtnn_ham_sin', {
        title: '📈 Hàm số lượng giác: Tập xác định, GTLN và GTNN của y = a·sin(2x) − c (Câu 1 Phần II)',
        shortLabel: '📈 GTLN & GTNN y = a·sin(2x)−c',
        keywords: /3sin\(2x\)-1|2sin x - 1|tập giá trị của hàm số/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Đề 1 Câu 1 Phần II: y = 3*sin(2x) - 1 => M = 2, m = -4
            // Đề 2 Câu 1 Phần II: y = 2*sin(x) - 1 => M = 1, m = -3
            const a = ((seed + step) % 5) + 2; // 2..6
            const c = ((step % 4) + 1);        // 1..4
            const maxVal = a - c;
            const minVal = -a - c;

            if (step % 2 === 0) {
                return {
                    q: '[Toán 11] Cho hàm số lượng giác ' + F.m('y = ' + a + ' sin(2x) &minus; ' + c) + '. Gọi ' + F.m('M') + ' và ' + F.m('m') + ' lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên tập số thực ' + F.m('R') + '. Tính giá trị của biểu thức ' + F.m('T = M &minus; 2m') + '.',
                    ans: String(maxVal - 2 * minVal)
                };
            } else {
                return {
                    q: '[Toán 11] Cho hàm số lượng giác ' + F.m('y = ' + a + ' sin x &minus; ' + c) + ' có tập giá trị là đoạn ' + F.m('T = [m; M]') + '. Tính tích ' + F.m('P = m &middot; M') + '.',
                    ans: String(minVal * maxVal)
                };
            }
        }
    });

    // MODULE W11-05: PHƯƠNG TRÌNH LƯỢNG GIÁC CƠ BẢN & TỰ LUẬN (ĐỀ 1 CÂU 6, 7 PHẦN I, CÂU 1 PHẦN IV & ĐỀ 2 CÂU 1 PHẦN IV)
    window.registerMathTopicGenerator('11', 'g11_web_pt_luong_giac_tu_luan', {
        title: '🔍 Phương trình lượng giác: cos(2x − π/3) = 1/2 & sin(2x + π/4) − cos x = 0 (Phần I & Phần IV)',
        shortLabel: '🔍 PT Lượng giác Tự luận',
        keywords: /cos\(2x-\\pi\/3\)=1\/2|sin\(2x\+\\pi\/4\)-cos x=0/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Đề 1 - Câu 1 Phần IV: Giải phương trình cos(2x - π/3) = 1/2 = cos(π/3)
                // <=> 2x - π/3 = ±π/3 + k2π <=> x = π/3 + kπ hoặc x = kπ.
                // Nghiệm dương nhỏ nhất là x = π/3 (60°)
                const shiftDeg = (((seed + step) % 3) + 1) * 15; // 15°, 30°, 45°
                // cos(2x - shiftDeg) = 1/2 = cos 60° => 2x = shiftDeg + 60° => x = (shiftDeg + 60°)/2
                const minPosDeg = (shiftDeg + 60) / 2;
                return {
                    q: '[Toán 11] Giải phương trình lượng giác ' + F.m('cos(2x &minus; ' + shiftDeg + '°) = ' + F.frac('1', '2')) + '. Tìm nghiệm dương nhỏ nhất (đơn vị: độ) của phương trình đã cho.',
                    ans: String(minPosDeg)
                };
            } else {
                // Đề 2 - Câu 1 Phần IV: Giải phương trình sin(2x + π/4) - cos x = 0 <=> sin(2x + 45°) = sin(90° - x)
                // <=> 2x + 45° = 90° - x + k360° => 3x = 45° + k360° => x = 15° + k120° (Nghiệm dương nhỏ nhất = 15°!)
                const alphaDeg = (((seed + step) % 3) + 1) * 15; // 15°, 30°, 45°
                // sin(2x + alphaDeg) - cos x = 0 => 3x = 90° - alphaDeg => nghiệm dương nhỏ nhất x = (90° - alphaDeg)/3
                const minDeg = (90 - alphaDeg) / 3;
                return {
                    q: '[Toán 11] Giải phương trình lượng giác ' + F.m('sin(2x + ' + alphaDeg + '°) &minus; cos x = 0') + '. Tìm nghiệm dương nhỏ nhất (đơn vị: độ) của phương trình đã cho.',
                    ans: String(minDeg)
                };
            }
        }
    });

    // MODULE W11-06: TOÁN THỰC TẾ ĐỒ THỊ MỰC NƯỚC THỦY TRIỀU CẢNG BIỂN (ĐỀ 1 - CÂU 2 PHẦN III)
    window.registerMathTopicGenerator('11', 'g11_web_thuy_trieu_cang_bien', {
        title: '🌊 Toán thực tế: Đồ thị mực nước thủy triều cảng biển h = m + a·cos(πt/12) (Kèm SVG)',
        shortLabel: '🌊 Thủy triều Cảng biển',
        keywords: /thủy triều|cảng biển|mực nước cao nhất|m\/a/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Đề 1 - Câu 2 Phần III:
            // Mực nước cao nhất khi t = 0 là hMax = m + a; thấp nhất sau 12h là hMin = m - a (với m, a > 0).
            // Suy ra: m = (hMax + hMin)/2 và a = (hMax - hMin)/2 => T = m / a!
            // Khi hMax = 12m, hMin = 8m => m = 10, a = 2 => T = m/a = 5 (Chuẩn 100% Đề 1 Câu 2 Phần III!)
            const aVal = ((seed + step) % 3) + 2;          // 2, 3, 4
            const ratioT = ((step % 4) + 3);               // 3, 4, 5, 6 (Khi a=2, ratioT=5 => m=10, hMax=12, hMin=8!)
            const mVal = aVal * ratioT;
            const hMax = mVal + aVal;
            const hMin = mVal - aVal;
            const svg  = G11_WEB_UI.tideGraph(hMax, hMin);

            return {
                q: '[Toán 11] Mực nước cao nhất tại một cảng biển là ' + F.m(hMax + ' m') + ' khi thủy triều lên cao và sau ' + F.m('12') + ' giờ khi thủy triều xuống thấp thì mực nước thấp nhất là ' + F.m(hMin + ' m') + ' (như đồ thị hình vẽ). Độ cao của mực nước ' + F.m('h (m)') + ' theo thời gian ' + F.m('t (h), 0 &le; t &le; 24') + ', được cho bởi công thức ' + F.m('h = m + a cos(' + F.frac('&pi;', '12') + 't)') + ' với ' + F.m('m, a') + ' là các số thực dương. Giá trị của tỉ số ' + F.m('T = ' + F.frac('m', 'a')) + ' bằng bao nhiêu?' + svg,
                ans: String(ratioT)
            };
        }
    });

    // MODULE W11-07: TOÁN THỰC TẾ BÁNH XE ĐẠP QUAY TRONG 10 GIÂY (ĐỀ 2 - CÂU 1 PHẦN III)
    window.registerMathTopicGenerator('11', 'g11_web_banh_xe_dap_quay', {
        title: '🚲 Toán thực tế: Số vòng quay của bánh xe đạp trong t giây (Đề 2 - Câu 1 Phần III - Kèm SVG)',
        shortLabel: '🚲 Bánh xe đạp quay',
        keywords: /bánh xe đạp|đường kính là 60 cm|18 km\/h|bao nhiêu vòng/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Đề 2 - Câu 1 Phần III:
            // Đường kính d = 60 cm = 0,6 m => Chu vi 1 vòng bánh xe C = π * d (m).
            // Vận tốc v (km/h) = (v / 3,6) (m/s). Quãng đường đi trong t (giây) là S = (v / 3,6) * t (m).
            // Số vòng quay N = S / (π * d).
            // Khi d = 60cm, v = 18 km/h (5 m/s), t = 10s => S = 50m => N = 50 / (0,6 * π) ≈ 26,5258 => làm tròn = 27 vòng!
            const cases = [
                { dCm: 60, vKmh: 18, tSec: 10 }, // Đáp số chuẩn: 27 vòng
                { dCm: 60, vKmh: 36, tSec: 10 }, // Đáp số: 53 vòng
                { dCm: 50, vKmh: 18, tSec: 10 }, // Đáp số: 32 vòng
                { dCm: 60, vKmh: 18, tSec: 20 }  // Đáp số: 53 vòng
            ];
            const pk = cases[(seed + step) % cases.length];
            const dMeters = pk.dCm / 100;
            const vMs     = pk.vKmh / 3.6;
            const distM   = vMs * pk.tSec;
            const turns   = Math.round(distM / (Math.PI * dMeters));
            const svg     = G11_WEB_UI.bicycleWheel(pk.dCm, pk.vKmh);

            return {
                q: '[Toán 11] Một bánh xe đạp có đường kính là ' + F.m(pk.dCm + ' cm') + '. Xe chạy thẳng đều với vận tốc ' + F.m(pk.vKmh + ' km/h') + ' (tham khảo hình vẽ). Hỏi trong ' + F.m(pk.tSec) + ' giây, bánh xe quay được bao nhiêu vòng (làm tròn kết quả đến hàng đơn vị)?' + svg,
                ans: String(turns)
            };
        }
    });

    // MODULE W11-08: DÃY SỐ TUYẾNÍNH TRUY HỒI & ĐẾM SỐ HẠNG NGUYÊN CỦA DÃY PHÂN THỨC (ĐỀ 1 CÂU 8 & ĐỀ 2 CÂU 9, CÂU 3 PHẦN III)
    window.registerMathTopicGenerator('11', 'g11_web_day_so_phan_thuc_nguyen', {
        title: '🔢 Dãy số: Đếm số hạng nguyên của u_n = (an − 1)/(n + 2) & Dãy u_{n+1} = 3u_n + 6',
        shortLabel: '🔢 Số hạng nguyên u_n',
        keywords: /nhận giá trị nguyên|3n-1|n\+2|3u_n\+6/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Chuẩn Đề 2 - Câu 3 Phần III: u_n = (3n - c) / (n + 2) = 3 - (6 + c)/(n + 2) với n ∈ N* (tức n + 2 >= 3).
                // Chọn 6 + c là số nguyên tố p >= 5 (p = 5, 7, 11, 13) => chỉ có duy nhất 1 ước lớn hơn 2 là chính p => có đúng 1 số hạng nguyên!
                // Hoặc chọn 6 + c = 15 (ước > 2 là 3, 5, 15 => có 3 số hạng nguyên) hoặc 6 + c = 9 (ước > 2 là 3, 9 => có 2 số hạng nguyên).
                const cases = [
                    { numStr: '3n &minus; 1', denStr: 'n + 2', ansCnt: 1 }, // 3 - 7/(n+2) => 1 số hạng (Chuẩn Đề 2 Câu 3 Phần III!)
                    { numStr: '3n &minus; 3', denStr: 'n + 2', ansCnt: 2 }, // 3 - 9/(n+2) => ước > 2 của 9 là {3; 9} => 2 số hạng
                    { numStr: '3n &minus; 9', denStr: 'n + 2', ansCnt: 3 }, // 3 - 15/(n+2) => ước > 2 của 15 là {3; 5; 15} => 3 số hạng
                    { numStr: '2n + 1',       denStr: 'n + 2', ansCnt: 1 }  // 2 - 3/(n+2) => ước > 2 của 3 là {3} => 1 số hạng
                ];
                const pk = cases[(seed + step) % cases.length];
                return {
                    q: '[Toán 11] Cho dãy số ' + F.m('(u<sub>n</sub>)') + ' được xác định bởi công thức ' + F.m('u<sub>n</sub> = ' + F.frac(pk.numStr, pk.denStr)) + ' với ' + F.m('n &isin; N*') + '. Có tất cả bao nhiêu số hạng của dãy số nhận giá trị nguyên?',
                    ans: String(pk.ansCnt)
                };
            } else {
                // Chuẩn Đề 1 - Câu 8 Phần I: u1 = -5, u_{n+1} = 3*u_n + 6 => u_n + 3 = 3*(u_{n-1} + 3) => u_n = -3 - 2 * 3^(n-1)
                const kTerm = ((seed + step) % 4) + 3; // 3, 4, 5, 6
                const unVal = -3 - (2 * Math.pow(3, kTerm - 1));
                return {
                    q: '[Toán 11] Cho dãy số ' + F.m('(u<sub>n</sub>)') + ' xác định bởi ' + F.m('u<sub>1</sub> = &minus;5') + ' và ' + F.m('u<sub>n+1</sub> = 3u<sub>n</sub> + 6 (&forall;n &ge; 1)') + '. biết công thức số hạng tổng quát là ' + F.m('u<sub>n</sub> = &minus;3 &minus; 2 &middot; 3<sup>n&minus;1</sup>') + ', hãy tính số hạng ' + F.m('u<sub>' + kTerm + '</sub>') + '.',
                    ans: String(unVal)
                };
            }
        }
    });

    // MODULE W11-09: TỔNG S_n CẤP SỐ CỘNG & KIỂM TRA SỐ HẠNG THUỘC CSC (ĐỀ 1 CÂU 9 & ĐỀ 2 CÂU 2 PHẦN II)
    window.registerMathTopicGenerator('11', 'g11_web_csc_tong_sn_kiem_tra', {
        title: '➕ Cấp số cộng: Tính tổng S_n = n(2u₁ + (n−1)d)/2 & Số hạng tổng quát (Đề 1 & Đề 2)',
        shortLabel: '➕ Tổng S_n Cấp số cộng',
        keywords: /tổng của 16 số hạng đầu|u1=9|u_n=4n-7/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Đề 1 - Câu 9 Phần I: Cho CSC có u1 = 9, d = 2. Tính tổng 16 số hạng đầu S_16 = 384.
            const u1 = ((seed + step) % 8) + 4;      // 4..11 (9 ở đề gốc)
            const d  = ((step % 4) + 2);             // 2..5  (2 ở đề gốc)
            const n  = (((seed * 2 + step) % 4) + 3) * 4; // 12, 16, 20, 24 (16 ở đề gốc)
            const Sn = (n * (2 * u1 + (n - 1) * d)) / 2;

            return {
                q: '[Toán 11] Cho cấp số cộng ' + F.m('(u<sub>n</sub>)') + ' có số hạng đầu ' + F.m('u<sub>1</sub> = ' + u1) + ' và công sai ' + F.m('d = ' + d) + '. Tính tổng ' + F.m('S<sub>' + n + '</sub>') + ' của ' + F.m(n) + ' số hạng đầu tiên.',
                ans: String(Sn)
            };
        }
    });

    // MODULE W11-10: HỆ PHƯƠNG TRÌNH CẤP SỐ NHÂN u4 - u2 = 24, u3 - u1 = 12 (ĐỀ 1 CÂU 10 & ĐỀ 2 CÂU 2a PHẦN IV)
    window.registerMathTopicGenerator('11', 'g11_web_he_pt_cap_so_nhan', {
        title: '✖️ Cấp số nhân: Giải hệ u₄ − u₂ = 24, u₃ − u₁ = 12 & Tính tổng S₁₀ (Đề 2 - Câu 2a Phần IV)',
        shortLabel: '✖️ Hệ PT Cấp số nhân',
        keywords: /u4-u2=24|u3-u1=12|tổng 10 số hạng đầu/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Đề 2 - Câu 2a Phần IV:
            // Cho CSN (u_n) có u3 - u1 = A và u4 - u2 = B (với B = q * A).
            // Suy ra công bội q = B / A và u1 = A / (q^2 - 1).
            // Khi u1 = 4, q = 2: u3 - u1 = 12, u4 - u2 = 24 => S_10 = 4 * (2^10 - 1) = 4092 (Chuẩn 100% Đề 2 Câu 2a Phần IV!)
            const u1 = ((seed + step) % 5) + 2; // 2..6 (4 ở đề gốc)
            const q  = ((step % 2) + 2);        // 2 hoặc 3
            const diff31 = u1 * (q * q - 1);
            const diff42 = q * diff31;

            if (step % 2 === 0) {
                return {
                    q: '[Toán 11] Cho cấp số nhân ' + F.m('(u<sub>n</sub>)') + ' thỏa mãn hệ điều kiện ' + F.m('u<sub>4</sub> &minus; u<sub>2</sub> = ' + diff42) + ' và ' + F.m('u<sub>3</sub> &minus; u<sub>1</sub> = ' + diff31) + '. Tính tổng ' + F.m('T = u<sub>1</sub> + q') + ' (với ' + F.m('u<sub>1</sub>') + ' là số hạng đầu và ' + F.m('q') + ' là công bội của cấp số nhân).',
                    ans: String(u1 + q)
                };
            } else {
                const s6 = (u1 * (Math.pow(q, 6) - 1)) / (q - 1);
                return {
                    q: '[Toán 11] Cho cấp số nhân ' + F.m('(u<sub>n</sub>)') + ' thỏa mãn ' + F.m('u<sub>4</sub> &minus; u<sub>2</sub> = ' + diff42) + ' và ' + F.m('u<sub>3</sub> &minus; u<sub>1</sub> = ' + diff31) + '. Tính tổng ' + F.m('S<sub>6</sub>') + ' của 6 số hạng đầu tiên của cấp số nhân.',
                    ans: String(s6)
                };
            }
        }
    });

    // MODULE W11-11: TOÁN THỰC TẾ CSC: GHẾ NHÀ HÁT & MUA CĂN HỘ TRẢ GÓP (ĐỀ 1 CÂU 2 PHẦN IV & ĐỀ 2 CÂU 4 PHẦN III, CÂU 2b PHẦN IV)
    window.registerMathTopicGenerator('11', 'g11_web_nha_hat_tra_gop', {
        title: '🏛️ Toán thực tế CSC: Tổng số ghế Nhà hát & Mua căn hộ trả góp 24 tháng (Đề 1 & Đề 2)',
        shortLabel: '🏛️ Ghế Nhà hát & Trả góp',
        keywords: /nhà hát|rạp hát|20 hàng ghế|mua một căn hộ|trả góp/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Chuẩn Đề 1 Câu 2 Phần IV & Đề 2 Câu 4 Phần III:
                // Nhà hát có nRows hàng ghế, hàng đầu có u1 ghế, mỗi hàng sau nhiều hơn hàng trước d ghế.
                // Khi nRows = 20, u1 = 15, d = 3 => u_20 = 72 ghế, Tổng S_20 = 870 ghế (Chuẩn 100% cả 2 đề!)
                const nRows = ((seed + step) % 5) + 18; // 18..22 hàng ghế (20 ở đề gốc)
                const u1    = ((seed * 2 + step) % 5) + 13; // 13..17 ghế (15 ở đề gốc)
                const d     = ((step % 3) + 2);             // 2, 3, 4 ghế (3 ở đề gốc)
                const totalSeats = (nRows * (2 * u1 + (nRows - 1) * d)) / 2;
                return {
                    q: '[Toán 11] Một rạp hát có ' + F.m(nRows) + ' hàng ghế. Hàng ghế đầu tiên có ' + F.m(u1) + ' ghế, mỗi hàng ghế phía sau đều có nhiều hơn hàng ghế ngay phía trước nó ' + F.m(d) + ' ghế. Hỏi rạp hát đó có tổng cộng bao nhiêu ghế ngồi?',
                    ans: String(totalSeats)
                };
            } else {
                // Chuẩn Đề 2 - Câu 2b Phần IV: Mua căn hộ trả góp trong 24 tháng
                // Tháng thứ nhất trả u1 (triệu đồng), mỗi tháng tiếp theo trả thêm d = 0,5 (triệu đồng) so với tháng trước.
                // Khi u1 = 10 triệu, d = 0,5 triệu (500 nghìn), n = 24 tháng => S_24 = 24*(20 + 23*0,5)/2 = 378 triệu đồng!
                const u1Mil = ((seed + step) % 6) + 8; // 8..13 triệu đồng (10 triệu ở đề gốc)
                const months = 24;
                const dMil   = 0.5;
                const totalPaid = (months * (2 * u1Mil + (months - 1) * dMil)) / 2;
                return {
                    q: '[Toán 11] Một người mua một căn hộ theo hình thức trả góp. Tháng thứ nhất người đó trả ' + F.m(u1Mil) + ' triệu đồng. Các tháng tiếp theo, mỗi tháng người đó phải trả thêm ' + F.m('500') + ' nghìn đồng (' + F.m('0,5') + ' triệu đồng) so với tháng ngay trước đó. Hỏi sau đúng ' + F.m('2') + ' năm (' + F.m('24') + ' tháng), người đó đã trả tổng cộng bao nhiêu triệu đồng?',
                    ans: String(totalPaid)
                };
            }
        }
    });

    // MODULE W11-12: TOÁN THỰC TẾ CSN: TRỒNG CÂY XOÀI TRÊN BẬC THANG SƯỜN ĐỒI (ĐỀ 1 - CÂU 2 PHẦN II)
    window.registerMathTopicGenerator('11', 'g11_web_trong_xoai_suon_doi', {
        title: '🌳 Toán thực tế CSN: Trồng cây xoài trên các bậc thang sườn đồi (Đề 1 - Câu 2 Phần II)',
        shortLabel: '🌳 Trồng xoài Sườn đồi',
        keywords: /bậc thang|giống xoài mới|sườn đồi|gấp đôi hàng dưới/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Đề 1 - Câu 2 Phần II:
            // Hàng thứ nhất trồng a1 = 1 cây, hàng trên gấp đôi hàng dưới => a_n = 2^(n-1).
            // Tổng số cây của k hàng đầy đủ là S_k = 2^k - 1.
            // Hiện trung tâm có N0 cây xoài (với 2^(k-1) - 1 < N0 < 2^k - 1).
            // Số cây xoài cần mua bổ sung tối thiểu để trồng đủ hàng cuối (hàng thứ k) là: (2^k - 1) - N0!
            const kRows = ((seed + step) % 3) + 10; // 10, 11, 12 hàng (1023, 2047, 4095 cây)
            const fullNeed = Math.pow(2, kRows) - 1;
            const buyMore  = ((seed * 2 + step) % 250) + 47; // Số cây cần mua thêm
            const currentTrees = fullNeed - buyMore;

            return {
                q: '[Toán 11] Trung tâm Trải nghiệm sáng tạo lên kế hoạch trồng giống xoài mới trên các bậc thang dọc theo sườn đồi từ thấp lên cao. Theo thiết kế, hàng thứ nhất trồng ' + F.m('1') + ' cây và mỗi hàng trên kề liền trồng số cây gấp đôi hàng ngay dưới nó. Để đảm bảo tính thẩm mỹ, hàng cuối cùng cũng phải trồng đủ số cây theo thiết kế. Hiện trung tâm đã có sẵn ' + F.m(currentTrees) + ' cây xoài giống. Hỏi trung tâm cần mua bổ sung tối thiểu bao nhiêu cây xoài giống nữa để trồng đủ hàng cuối?',
                ans: String(buyMore)
            };
        }
    });

    // MODULE W11-13: TOÁN THỰC TẾ CSN: DÃY HÌNH VUÔNG LỒNG NHAU a1, a2, ..., a15 (ĐỀ 1 - CÂU 4 PHẦN III)
    window.registerMathTopicGenerator('11', 'g11_web_day_hinh_vuong_long_nhau', {
        title: '🔲 Toán thực tế CSN: Diện tích dãy hình vuông lồng nhau a₁, a₂, ..., a₁₅ (Kèm Hình SVG)',
        shortLabel: '🔲 Dãy Hình vuông lồng nhau',
        keywords: /hình vuông a1|chia mỗi cạnh của hình vuông thành 4 phần|hình vuông thứ 15/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Đề 1 - Câu 4 Phần III:
            // Hình vuông a1 có cạnh L (m) => Diện tích S1 = L^2.
            // Chia mỗi cạnh thành 4 phần bằng nhau (tỉ lệ 1/4 và 3/4) và nối các điểm chia => S_{n+1} = ((1/4)^2 + (3/4)^2) * S_n = (5/8) * S_n.
            // Vậy diện tích các hình vuông lập thành CSN với S1 = L^2 và công bội q = 5/8 = 0,625.
            // Khi L = 40m, n = 15 => S_15 = 1600 * (5/8)^14 ≈ 2,22 m^2 (Chuẩn 100% Đề 1 Câu 4 Phần III!)
            const edgeList = [32, 40, 48, 64];
            const L = edgeList[(seed + step) % edgeList.length];
            const svg = G11_WEB_UI.nestedSquares(L);

            if (step % 2 === 0) {
                const s15 = (L * L) * Math.pow(5 / 8, 14);
                const ansRound = Math.round(s15 * 100) / 100;
                return {
                    q: '[Toán 11] Cho hình vuông ' + F.m('a<sub>1</sub>') + ' có độ dài cạnh là ' + F.m(L + ' m') + '. Người ta chia mỗi cạnh của hình vuông thành ' + F.m('4') + ' phần bằng nhau và nối các điểm chia liên tiếp để được hình vuông ' + F.m('a<sub>2</sub>') + ' (như hình vẽ). Cứ tiếp tục như vậy ta được các hình vuông ' + F.m('a<sub>3</sub>, a<sub>4</sub>, ...') + '. Tính diện tích của hình vuông thứ ' + F.m('15') + ' (đơn vị: ' + F.m('m<sup>2</sup>') + ', làm tròn kết quả đến hàng phần trăm).' + svg,
                    ans: String(ansRound)
                };
            } else {
                // Hỏi diện tích hình vuông thứ 4 (S4 = L^2 * (5/8)^3) với L = 32 hoặc 64 để ra số nguyên tuyệt đối!
                const Lclean = (step % 2 === 1) ? 32 : 64;
                const s4 = (Lclean * Lclean) * Math.pow(5 / 8, 3); // Khi L=32 => 1024 * 125 / 512 = 250!
                return {
                    q: '[Toán 11] Cho hình vuông ' + F.m('a<sub>1</sub>') + ' có độ dài cạnh là ' + F.m(Lclean + ' m') + '. Người ta chia mỗi cạnh của hình vuông thành ' + F.m('4') + ' phần bằng nhau và nối các điểm chia liên tiếp để được hình vuông ' + F.m('a<sub>2</sub>') + ' (như hình vẽ). Cứ tiếp tục như vậy ta được các hình vuông ' + F.m('a<sub>3</sub>, a<sub>4</sub>, ...') + '. Tính diện tích của hình vuông thứ ' + F.m('4') + ' (' + F.m('a<sub>4</sub>') + ', đơn vị: ' + F.m('m<sup>2</sup>') + ').' + G11_WEB_UI.nestedSquares(Lclean),
                    ans: String(s4)
                };
            }
        }
    });

    // MODULE W11-14: THỐNG KÊ CƠ BẢN: GIÁ TRỊ ĐẠI DIỆN, TẦN SỐ & CỠ MẪU (ĐỀ 1 CÂU 11 & ĐỀ 2 CÂU 10, 11, 12 PHẦN I)
    window.registerMathTopicGenerator('11', 'g11_web_thong_ke_co_ban', {
        title: '📊 Thống kê cơ bản: Giá trị đại diện, Tần số nhóm & Tổng cỡ mẫu N (Đề 1 & Đề 2 Phần I)',
        shortLabel: '📊 Thống kê cơ bản (Phần I)',
        keywords: /giá trị đại diện|thời gian tự học|tổng số học sinh được khảo sát/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Đề 1 Câu 11 Phần I: Giá trị đại diện của nhóm [a; b)
                const groups = ['[7;11)', '[11;15)', '[15;19)', '[19;23)', '[23;27)', '[27;31)'];
                const freqs  = [3, 14, 7, 3, 14, 11];
                const pickIdx = (seed + step) % groups.length;
                const aVal = 7 + (pickIdx * 4);
                const bVal = aVal + 4;
                const repVal = (aVal + bVal) / 2;
                const tbl = G11_WEB_UI.statTable('Lương (triệu đồng)', groups, 'Số nhân viên', freqs);
                return {
                    q: '[Toán 11] Cho mẫu số liệu ghép nhóm về lương (đơn vị: triệu đồng) và số nhân viên như bảng sau:' + tbl + 'Tính giá trị đại diện của nhóm ' + F.m('[' + aVal + '; ' + bVal + ')') + '.',
                    ans: String(repVal)
                };
            } else {
                // Đề 2 Câu 11, 12 Phần I: Thời gian tự học trong ngày -> Tính tổng số HS khảo sát N
                const f1 = ((seed + step) % 5) + 4;
                const f2 = ((seed * 2 + step) % 6) + 10;
                const f3 = ((step % 5) + 13);
                const f4 = ((seed + step * 3) % 5) + 6;
                const groups = ['[0;1)', '[1;2)', '[2;3)', '[3;4)'];
                const freqs  = [f1, f2, f3, f4];
                const totalN = f1 + f2 + f3 + f4;
                const tbl = G11_WEB_UI.statTable('Thời gian (giờ)', groups, 'Số học sinh', freqs);
                return {
                    q: '[Toán 11] Khảo sát thời gian tự học trong một ngày (đơn vị: giờ) của một số học sinh, ta thu được bảng phân bố tần số ghép nhóm sau:' + tbl + 'Tổng số học sinh được khảo sát là bao nhiêu?',
                    ans: String(totalN)
                };
            }
        }
    });

    // MODULE W11-15: TÌM MỐT (Mo) CỦA MẪU SỐ LIỆU GHÉP NHÓM (ĐỀ 1 CÂU 12 PHẦN I & ĐỀ 2 CÂU 3 PHẦN IV)
    window.registerMathTopicGenerator('11', 'g11_web_mot_mau_so_lieu', {
        title: '📊 Thống kê: Tìm Mốt (Mₒ) của mẫu số liệu ghép nhóm (Đề 1 Câu 12 & Đề 2 Câu 3 Phần IV)',
        shortLabel: '📊 Tìm Mốt (Mₒ) ghép nhóm',
        keywords: /tìm mốt của mẫu số liệu|12,25|mốt của mẫu/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Chuẩn Đề 1 - Câu 12 Phần I:
                // Điểm thi: [1;4):8, [4;7):17, [7;10):1, [10;13):19, [13;16):13.
                // Nhóm chứa mốt là [10;13) với tần số lớn nhất m = 19, liền trước = 1, liền sau = 13, độ dài h = 3.
                // Mo = 10 + (19 - 1) / ((19 - 1) + (19 - 13)) * 3 = 10 + (18 / 24) * 3 = 12,25 (Chuẩn 100% Đáp án B Câu 12!)
                const groups = ['[1;4)', '[4;7)', '[7;10)', '[10;13)', '[13;16)'];
                const freqs  = [8, 17, 1, 19, 13];
                const tbl = G11_WEB_UI.statTable('Điểm thi', groups, 'Số người dự thi', freqs);
                return {
                    q: '[Toán 11] Cho mẫu số liệu ghép nhóm về điểm thi và số người dự thi như bảng sau:' + tbl + 'Tìm mốt ' + F.m('M<sub>o</sub>') + ' của mẫu số liệu ghép nhóm đã cho (làm tròn đến hàng phần trăm).',
                    ans: '12.25'
                };
            } else {
                // Chuẩn Đề 2 - Câu 3 Phần IV:
                // Điểm Toán 40 HS lớp 11A: [4;5):4, [5;6):10, [6;7):14, [7;8):8, [8;9):4.
                // Nhóm chứa mốt là [6;7) với m = 14, liền trước = 10, liền sau = 8, độ dài h = 1.
                // Mo = 6 + (14 - 10) / ((14 - 10) + (14 - 8)) * 1 = 6 + 4/10 = 6,4!
                const groups = ['[4;5)', '[5;6)', '[6;7)', '[7;8)', '[8;9)'];
                const freqs  = [4, 10, 14, 8, 4];
                const tbl = G11_WEB_UI.statTable('Điểm', groups, 'Số học sinh', freqs);
                return {
                    q: '[Toán 11] Điểm kiểm tra giữa học kì 1 môn Toán của 40 học sinh lớp 11A được thống kê trong bảng sau:' + tbl + 'Tính mốt ' + F.m('M<sub>o</sub>') + ' của mẫu số liệu ghép nhóm trên (làm tròn đến hàng phần chục).',
                    ans: '6.4'
                };
            }
        }
    });

    // MODULE W11-16: TỨ PHÂN VỊ Q1, Q3 & THỜI GIAN CHẠY BỘ TRUNG BÌNH (ĐỀ 1 CÂU 3 PHẦN III & CÂU 3 PHẦN IV)
    window.registerMathTopicGenerator('11', 'g11_web_tu_phan_vi_q1_q3_chay_bo', {
        title: '🏃 Thống kê Tự luận: Thời gian chạy bộ trung bình 30 ngày & Tứ phân vị Q₁, Q₃ (Đề 1 Phần III & IV)',
        shortLabel: '🏃 Trung bình & Q₁, Q₃ Chạy bộ',
        keywords: /vận động viên|30 ngày|tứ phân vị thứ ba q3/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Chuẩn Đề 1 - Câu 3 Phần IV:
                // Thời gian chạy bộ 30 ngày: [30;40):3, [40;50):7, [50;60):12, [60;70):6, [70;80):2.
                // Giá trị đại diện: 35, 45, 55, 65, 75 => Tổng = 3*35 + 7*45 + 12*55 + 6*65 + 2*75 = 1620.
                // Thời gian trung bình = 1620 / 30 = 54 (phút) (Nguyên đẹp tuyệt đối!)
                const groups = ['[30;40)', '[40;50)', '[50;60)', '[60;70)', '[70;80)'];
                const freqs  = [3, 7, 12, 6, 2];
                const tbl = G11_WEB_UI.statTable('Thời gian (phút)', groups, 'Số ngày', freqs);
                return {
                    q: '[Toán 11] Bảng sau thống kê thời gian (phút) chạy bộ mỗi ngày trong một tháng (30 ngày) của một vận động viên:' + tbl + 'Hãy tính thời gian chạy bộ trung bình mỗi ngày (đơn vị: phút) của vận động viên đó.',
                    ans: '54'
                };
            } else {
                // Chuẩn Đề 1 - Câu 3 Phần III:
                // Điểm số: [1;3):5, [3;5):3, [5;7):10, [7;9):1, [9;11):8, [11;13):6 (N = 33).
                // Vị trí Q3 là 3*33/4 = 24,75 => thuộc nhóm [9;11) (tích lũy trước đó là 5+3+10+1 = 19).
                // Q3 = 9 + ((24,75 - 19) / 8) * 2 = 9 + 1,4375 = 10,4375 => làm tròn đến hàng phần mười là 10,4!
                const groups = ['[1;3)', '[3;5)', '[5;7)', '[7;9)', '[9;11)', '[11;13)'];
                const freqs  = [5, 3, 10, 1, 8, 6];
                const tbl = G11_WEB_UI.statTable('Điểm số', groups, 'Số học sinh', freqs);
                return {
                    q: '[Toán 11] Cho mẫu số liệu ghép nhóm về điểm số và số học sinh như bảng sau:' + tbl + 'Tìm tứ phân vị thứ ba ' + F.m('Q<sub>3</sub>') + ' của mẫu số liệu ghép nhóm đã cho (làm tròn kết quả đến hàng phần mười).',
                    ans: '10.4'
                };
            }
        }
    });

    if (typeof window.refreshAdminTopicDropdown === 'function') {
        window.refreshAdminTopicDropdown();
    }
})();
//===========
(function() {
    if (typeof window.registerMathTopicGenerator !== 'function') return;
    const F = window.IMATHS_FMT;

    // ===================================================================
    // BỘ HÀM VẼ HÌNH SVG & BẢNG SỐ LIỆU CHUẨN ĐỀ ÔN THI GKI TOÁN 11 (ĐỀ 3 & ĐỀ 4)
    // ===================================================================
    const G11_W34_UI = {
        // 1. Hình Vòng quay Mặt Trời / Đu quay Ferris Wheel (Đề 3 Câu 1 & Đề 4 Câu 2 Phần III)
        ferrisWheel: function(rMeter, hCenter, tPeriod) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 145" width="235" height="138">' +
                '<line x1="18" y1="128" x2="228" y2="128" stroke="#94a3b8" stroke-width="2"/>' +
                '<line x1="85" y1="128" x2="115" y2="64" stroke="#64748b" stroke-width="2.2"/>' +
                '<line x1="145" y1="128" x2="115" y2="64" stroke="#64748b" stroke-width="2.2"/>' +
                '<circle cx="115" cy="64" r="46" fill="rgba(56,189,248,0.12)" stroke="#38bdf8" stroke-width="2.4"/>' +
                '<line x1="115" y1="64" x2="161" y2="64" stroke="#fde047" stroke-width="1.8" stroke-dasharray="3 2"/>' +
                '<line x1="115" y1="64" x2="115" y2="128" stroke="#4ade80" stroke-width="1.6" stroke-dasharray="3 2"/>' +
                '<circle cx="115" cy="64" r="3.5" fill="#fde047"/>' +
                '<circle cx="115" cy="110" r="4.2" fill="#ef4444"/>' +
                '<text x="101" y="60" fill="#fde047" font-size="10.5" font-weight="bold">O</text>' +
                '<text x="122" y="58" fill="#fde047" font-size="9.5" font-weight="bold">R=' + rMeter + 'm</text>' +
                '<text x="52" y="102" fill="#4ade80" font-size="9.5" font-weight="bold">H₀=' + hCenter + 'm</text>' +
                '<text x="123" y="114" fill="#fca5a5" font-size="9.5" font-weight="bold">Cabin (t=0)</text>' +
                '<text x="168" y="24" fill="#cbd5e1" font-size="9.5" font-weight="bold">1 vòng: ' + tPeriod + 'p</text>' +
            '</svg></div>';
        },

        // 2. Hình Đồ thị độ sâu mực nước bến cảng / sóng huyết áp (Đề 3 Câu 1 Phần II & Câu 2 Phần III)
        waveModel: function(midVal, maxVal, minVal, labelY) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 138" width="235" height="132">' +
                '<line x1="26" y1="114" x2="230" y2="114" stroke="#94a3b8" stroke-width="1.5"/><polygon points="234,114 226,110 226,118" fill="#94a3b8"/>' +
                '<line x1="36" y1="125" x2="36" y2="12" stroke="#94a3b8" stroke-width="1.5"/><polygon points="36,8 32,16 40,16" fill="#94a3b8"/>' +
                '<line x1="36" y1="30" x2="222" y2="30" stroke="#475569" stroke-width="1" stroke-dasharray="3 3"/>' +
                '<line x1="36" y1="62" x2="222" y2="62" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4 2"/>' +
                '<line x1="36" y1="94" x2="222" y2="94" stroke="#475569" stroke-width="1" stroke-dasharray="3 3"/>' +
                '<path d="M 36 62 Q 58 30 80 30 Q 102 30 124 62 Q 146 94 168 94 Q 190 94 212 62" fill="none" stroke="#38bdf8" stroke-width="2.4"/>' +
                '<text x="10" y="34" fill="#fde047" font-size="10" font-weight="bold">' + maxVal + '</text>' +
                '<text x="10" y="66" fill="#4ade80" font-size="10" font-weight="bold">' + midVal + '</text>' +
                '<text x="10" y="98" fill="#f87171" font-size="10" font-weight="bold">' + minVal + '</text>' +
                '<text x="44" y="18" fill="#cbd5e1" font-size="10" font-weight="bold">' + labelY + '</text>' +
                '<text x="218" y="108" fill="#cbd5e1" font-size="10" font-style="italic">t</text>' +
            '</svg></div>';
        },

        // 3. Hình Tháp hộp giấy trang trí hội chợ (Đề 3 - Câu 4 Phần III)
        boxPyramid: function(bottomBoxes) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 240 135" width="230" height="128">' +
                '<rect x="104" y="16" width="32" height="18" rx="3" fill="rgba(250,204,21,0.22)" stroke="#fde047" stroke-width="1.6"/>' +
                '<rect x="86" y="38" width="68" height="18" rx="3" fill="rgba(56,189,248,0.18)" stroke="#38bdf8" stroke-width="1.6"/>' +
                '<rect x="64" y="60" width="112" height="18" rx="3" fill="rgba(56,189,248,0.18)" stroke="#38bdf8" stroke-width="1.6"/>' +
                '<rect x="34" y="96" width="172" height="22" rx="3" fill="rgba(74,222,128,0.2)" stroke="#4ade80" stroke-width="1.8"/>' +
                '<text x="120" y="29" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">1 hộp</text>' +
                '<text x="120" y="51" fill="#e2e8f0" font-size="10" font-weight="bold" text-anchor="middle">2 hộp</text>' +
                '<text x="120" y="90" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">...</text>' +
                '<text x="120" y="111" fill="#4ade80" font-size="10.5" font-weight="bold" text-anchor="middle">Hàng đáy: ' + bottomBoxes + ' hộp</text>' +
            '</svg></div>';
        },

        // 4. Bảng thống kê mẫu số liệu ghép nhóm
        statTable: function(row1Title, row1Arr, row2Title, row2Arr) {
            let h1 = '<td style="padding:4px 7px;border:1px solid #334155;color:#fde047;font-weight:800;white-space:nowrap;">' + row1Title + '</td>';
            let h2 = '<td style="padding:4px 7px;border:1px solid #334155;color:#38bdf8;font-weight:800;white-space:nowrap;">' + row2Title + '</td>';
            for (let i = 0; i < row1Arr.length; i++) {
                h1 += '<td style="padding:4px 6px;border:1px solid #334155;text-align:center;color:#f8fafc;font-weight:700;white-space:nowrap;">' + row1Arr[i] + '</td>';
                h2 += '<td style="padding:4px 6px;border:1px solid #334155;text-align:center;color:#4ade80;font-weight:800;">' + row2Arr[i] + '</td>';
            }
            return '<div style="overflow-x:auto;margin:8px 0 4px;"><table style="width:100%;border-collapse:collapse;background:#040b16;font-size:11.5px;border:1.5px solid #334155;border-radius:8px;">' +
                '<tr>' + h1 + '</tr><tr>' + h2 + '</tr></table></div>';
        }
    };

    // MODULE W34-01: TẬP GIÁ TRỊ, CHU KÌ & TÍNH CHẴN LẺ HÀM SỐ LƯỢNG GIÁC (ĐỀ 3 CÂU 1, 3, 6 & ĐỀ 4 CÂU 3, 6 PHẦN I)
    window.registerMathTopicGenerator('11', 'g11_w34_tap_gia_tri_chu_ki_co_ban', {
        title: '📈 Hàm số lượng giác cơ bản: Tập giá trị, Chu kì T của y = sin(kx) & Tính chẵn lẻ (Đề 3 & Đề 4)',
        shortLabel: '📈 Tập giá trị & Chu kì cơ bản',
        keywords: /tập giá trị của hàm số|chu kì tuần hoàn của hàm số y = sin|hàm số chẵn/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const mode = step % 3;
            if (mode === 0) {
                // Đề 3 - Câu 1 Phần I: Tập giá trị của hàm số y = cos x là [-1; 1]
                const a = ((seed + step) % 5) + 1;
                return {
                    q: '[Toán 11] Biết tập giá trị của hàm số ' + F.m('y = ' + (a === 1 ? '' : a) + 'cos x') + ' là đoạn ' + F.m('[m; M]') + '. Tính hiệu ' + F.m('T = M &minus; m') + '.',
                    ans: String(2 * a)
                };
            } else if (mode === 1) {
                // Đề 4 - Câu 6 Phần I: Chu kì tuần hoàn của hàm số y = sin(kx) là T = 2π/k
                const k = ((seed + step) % 5 + 1) * 2; // 2, 4, 6, 8, 10
                const mDen = k / 2;
                return {
                    q: '[Toán 11] Biết chu kì tuần hoàn của hàm số ' + F.m('y = sin(' + k + 'x)') + ' có dạng ' + F.m('T = ' + F.frac('&pi;', 'm')) + ' (với ' + F.m('m &isin; N*') + '). Tìm giá trị của ' + F.m('m') + '.',
                    ans: String(mDen)
                };
            } else {
                // Đề 4 - Câu 1 Phần I: Đổi góc 120° sang radian = 2π/3
                const angles = [
                    { deg: 120, a: 2, b: 3 },
                    { deg: 150, a: 5, b: 6 },
                    { deg: 135, a: 3, b: 4 },
                    { deg: 60,  a: 1, b: 3 }
                ];
                const pk = angles[(seed + step) % angles.length];
                return {
                    q: '[Toán 11] Số đo bằng radian của góc ' + F.m(pk.deg + '°') + ' có dạng phân số tối giản ' + F.m(F.frac('a&pi;', 'b')) + ' (với ' + F.m('a, b &isin; N*') + '). Tính tích ' + F.m('P = a &middot; b') + '.',
                    ans: String(pk.a * pk.b)
                };
            }
        }
    });

    // MODULE W34-02: TÍNH cos α KHI BIẾT sin α TRONG GÓC PHẦN TƯ THỨ II (ĐỀ 3 CÂU 5 & ĐỀ 4 CÂU 2, 5 PHẦN I)
    window.registerMathTopicGenerator('11', 'g11_w34_tinh_cos_goc_tu', {
        title: '🧭 Giá trị lượng giác cơ bản: Tính cos α khi biết sin α với π/2 < α < π (Đề 3 & Đề 4 Câu 5)',
        shortLabel: '🧭 Tính cos α (π/2 < α < π)',
        keywords: /sin \\alpha = 3\/5|sin \\alpha = 1\/3|giá trị của cos/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Đề 3 - Câu 5 Phần I: Cho sin α = 3/5 (π/2 < α < π) => cos α = -4/5 = -0.8
                const pyth = [
                    { sinStr: F.frac('3', '5'), cosVal: -0.8 },
                    { sinStr: F.frac('4', '5'), cosVal: -0.6 },
                    { sinStr: '0,6',            cosVal: -0.8 },
                    { sinStr: '0,8',            cosVal: -0.6 }
                ];
                const pk = pyth[(seed + step) % pyth.length];
                return {
                    q: '[Toán 11] Cho ' + F.m('sin &alpha; = ' + pk.sinStr) + ' với ' + F.m(F.frac('&pi;', '2') + ' &lt; &alpha; &lt; &pi;') + '. Giá trị của ' + F.m('cos &alpha;') + ' (viết dưới dạng số thập phân) bằng bao nhiêu?',
                    ans: String(pk.cosVal)
                };
            } else {
                // Đề 4 - Câu 5 Phần I: Cho sin α = 1/3 (π/2 < α < π) => cos α = -2*sqrt(2)/3 => 9*cos^2(α) = 8
                const k = ((seed + step) % 4) + 3; // 3, 4, 5, 6
                const kSq = k * k;
                const ansVal = kSq - 1;
                return {
                    q: '[Toán 11] Cho ' + F.m('sin &alpha; = ' + F.frac('1', k)) + ' với ' + F.m(F.frac('&pi;', '2') + ' &lt; &alpha; &lt; &pi;') + '. Biết ' + F.m('cos &alpha; = &minus;' + F.frac(F.sqrt('m'), k)) + ', hãy tìm giá trị của số nguyên dương ' + F.m('m') + '.',
                    ans: String(ansVal)
                };
            }
        }
    });

    // MODULE W34-03: PHƯƠNG TRÌNH LƯỢNG GIÁC ĐẶC BIỆT & TỰ LUẬN √3 tan(ax ± b) = 1 (ĐỀ 3 & ĐỀ 4 CÂU 4 PHẦN I, CÂU 1 PHẦN IV)
    window.registerMathTopicGenerator('11', 'g11_w34_pt_tan_can_3', {
        title: '🔍 Phương trình lượng giác: sin x = 1, cos x = 0 & Giải √3·tan(2x − π/6) = 1 (Đề 3 & Đề 4)',
        shortLabel: '🔍 PT √3·tan(u) = 1',
        keywords: /căn 3 tan|sin x = 1|cos x = 0/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Đề 3 - Câu 1 Phần IV: Giải phương trình sqrt(3)*tan(2x - π/6) = 1 <=> 2x - 30° = 30° + k180° <=> x = 30° + k90°
                const shiftDeg = (((seed + step) % 3) + 1) * 10; // 10°, 20°, 30° (30° là chuẩn Đề 3!)
                const minPosDeg = (shiftDeg + 30) / 2;
                return {
                    q: '[Toán 11] Giải phương trình lượng giác ' + F.m(F.sqrt('3') + ' tan(2x &minus; ' + shiftDeg + '°) = 1') + '. Tìm nghiệm dương nhỏ nhất (đơn vị: độ) của phương trình đã cho.',
                    ans: String(minPosDeg)
                };
            } else {
                // Đề 4 - Câu 1 Phần IV: Giải phương trình sqrt(3)*tan(x + π/3) = 1 <=> x + 60° = 30° + k180° <=> x = -30° + k180°
                // Nghiệm dương nhỏ nhất ứng với k = 1 là x = 150°!
                const addDeg = (((seed + step) % 3) + 2) * 15; // 30°, 45°, 60° (60° là chuẩn Đề 4!)
                const minPosDeg = (30 - addDeg) + 180;
                return {
                    q: '[Toán 11] Giải phương trình lượng giác ' + F.m(F.sqrt('3') + ' tan(x + ' + addDeg + '°) = 1') + '. Tìm nghiệm dương nhỏ nhất (đơn vị: độ) của phương trình đã cho.',
                    ans: String(minPosDeg)
                };
            }
        }
    });

    // MODULE W34-04: TOÁN THỰC TẾ ĐỘ SÂU MỰC NƯỚC BẾN CẢNG h(t) = 3cos(πt/6 + π/3) + 12 (ĐỀ 3 - CÂU 1 PHẦN II)
    window.registerMathTopicGenerator('11', 'g11_w34_muc_nuoc_ben_cang', {
        title: '⚓ Toán thực tế: Độ sâu mực nước bến cảng h(t) = 3cos(πt/6 + π/3) + 12 (Đề 3 - Câu 1 Phần II)',
        shortLabel: '⚓ Độ sâu Bến cảng',
        keywords: /bến cảng|độ sâu của nước|12 giờ|mức cao nhất/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Đề 3 - Câu 1 Phần II:
            // h(t) = A * cos(π*t / 6 + π / 3) + B (0 <= t <= 24).
            // Độ sâu lớn nhất: B + A; nhỏ nhất: B - A; chu kì T = 2π / (π/6) = 12 giờ.
            // Thời điểm đạt độ sâu lớn nhất lần đầu tiên trong ngày: π*t/6 + π/3 = 2π => t = 10 (giờ).
            const A = ((seed + step) % 4) + 2;      // 2, 3, 4, 5 m (3m ở đề gốc)
            const B = ((seed * 2 + step) % 5) + 10; // 10..14 m (12m ở đề gốc)
            const svg = G11_W34_UI.waveModel(B, B + A, B - A, 'h(m)');

            if (step % 2 === 0) {
                return {
                    q: '[Toán 11] Tại một bến cảng, độ sâu của mực nước ' + F.m('h') + ' (mét) tại thời điểm ' + F.m('t') + ' (giờ) trong một ngày (' + F.m('0 &le; t &le; 24') + ') được tính bởi công thức ' + F.m('h(t) = ' + A + ' cos(' + F.frac('&pi;t', '6') + ' + ' + F.frac('&pi;', '3') + ') + ' + B) + ' (biểu diễn như hình vẽ). Tính tổng của độ sâu lớn nhất và chu kì biến thiên (tính theo giờ) của mực nước trong ngày.' + svg,
                    ans: String((B + A) + 12)
                };
            } else {
                return {
                    q: '[Toán 11] Tại một bến cảng, độ sâu của mực nước ' + F.m('h') + ' (mét) tại thời điểm ' + F.m('t') + ' (giờ) trong một ngày (' + F.m('0 &le; t &le; 24') + ') được tính bởi công thức ' + F.m('h(t) = ' + A + ' cos(' + F.frac('&pi;t', '6') + ' + ' + F.frac('&pi;', '3') + ') + ' + B) + '. Hỏi vào lúc mấy giờ sáng trong ngày thì độ sâu của mực nước tại bến cảng đạt mức cao nhất?' + svg,
                    ans: '10'
                };
            }
        }
    });

    // MODULE W34-05: TOÁN THỰC TẾ VÒNG QUAY MẶT TRỜI & ĐU QUAY FERRIS WHEEL (ĐỀ 3 CÂU 1 & ĐỀ 4 CÂU 2 PHẦN III)
    window.registerMathTopicGenerator('11', 'g11_w34_vong_quay_mat_troi', {
        title: '🎡 Toán thực tế: Tính độ cao cabin Vòng quay Mặt Trời (Ferris wheel) sau t phút (Kèm SVG)',
        shortLabel: '🎡 Vòng quay Mặt Trời',
        keywords: /vòng quay mặt trời|đu quay|ferris wheel|vị trí thấp nhất/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Công thức tổng quát khi tại t = 0 cabin ở vị trí thấp nhất:
            // h(t) = H0 - R * cos((2π / T) * t)
            if (step % 2 === 0) {
                // Chuẩn Đề 3 - Câu 1 Phần III:
                // Quay 1 vòng hết T = 15 phút, bán kính R = 30m, tâm cao H0 = 35m.
                // Sau t = 10 phút: góc quay = 4π/3 => cos(4π/3) = -0.5 => h(10) = 35 - 30*(-0.5) = 35 + 15 = 50m!
                const rList = [20, 30, 40, 50];
                const R  = rList[(seed + step) % rList.length];
                const H0 = R + 5;
                const T  = 15;
                const t  = 10;
                const ansH = H0 + (R / 2); // Vì cos(2π*10/15) = cos(4π/3) = -1/2
                const svg = G11_W34_UI.ferrisWheel(R, H0, T);
                return {
                    q: '[Toán 11] Một chiếc vòng quay Mặt Trời quay đều, mỗi vòng quay hết ' + F.m(T) + ' phút. Bán kính vòng quay là ' + F.m(R + ' m') + ', tâm vòng quay cách mặt đất ' + F.m(H0 + ' m') + ' (như hình vẽ). Ban đầu (' + F.m('t = 0') + ') cabin ở vị trí thấp nhất. Tính độ cao của cabin (đơn vị: mét, so với mặt đất) sau khi quay được ' + F.m(t) + ' phút.' + svg,
                    ans: String(ansH)
                };
            } else {
                // Chuẩn Đề 4 - Câu 2 Phần III:
                // Quay 1 vòng mất T = 20 phút, bán kính R = 20m, tâm cao H0 = 25m.
                // Sau t = 5 phút (tức 1/4 vòng quay): cos(π/2) = 0 => độ cao cabin đúng bằng độ cao tâm H0!
                const R  = (((seed + step) % 4) + 2) * 10; // 20, 30, 40, 50m (20m ở Đề 4)
                const H0 = R + 5;                          // 25, 35, 45, 55m (25m ở Đề 4)
                const T  = 20;
                const t  = 5;
                const svg = G11_W34_UI.ferrisWheel(R, H0, T);
                return {
                    q: '[Toán 11] Một chiếc đu quay (Ferris wheel) có bán kính ' + F.m(R + ' m') + ', tâm đu quay cách mặt đất ' + F.m(H0 + ' m') + ' (như hình vẽ). Đu quay quay đều, mỗi vòng quay mất ' + F.m(T) + ' phút. Biết rằng tại thời điểm ban đầu (' + F.m('t = 0') + '), cabin nằm ở vị trí thấp nhất. Tính độ cao của cabin (so với mặt đất, đơn vị: mét) sau khi quay được ' + F.m(t) + ' phút.' + svg,
                    ans: String(H0)
                };
            }
        }
    });

    // MODULE W34-06: TOÁN THỰC TẾ SINH HỌC: MÔ HÌNH HÀM SỐ HUYẾT ÁP & NHỊP TIM (ĐỀ 3 CÂU 2 & ĐỀ 4 CÂU 1 PHẦN III)
    window.registerMathTopicGenerator('11', 'g11_w34_huyet_ap_nhip_tim', {
        title: '💓 Toán thực tế Y sinh: Tính nhịp tim từ hàm số huyết áp p(t) = A + B·sin(ωt) (Đề 3 & Đề 4)',
        shortLabel: '💓 Huyết áp & Nhịp tim',
        keywords: /huyết áp|nhịp tim|mmhg|160\\pi t|150\\pi t/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Đề 3 Câu 2 Phần III (p(t) = 115 + 25*sin(160πt) => 80 nhịp/phút)
            // & Đề 4 Câu 1 Phần III (P(t) = 120 + 15*cos(150πt) => 75 nhịp/phút)
            // Chu kì 1 nhịp tim là T = 2π / (2*N*π) = 1/N (phút) => Số nhịp tim trong 1 phút là N = ω / (2π)!
            const heartRates = [70, 72, 75, 80, 85, 90];
            const bpm = heartRates[(seed + step) % heartRates.length];
            const omegaCoeff = 2 * bpm; // 140, 144, 150, 160, 170, 180
            const midP = (step % 2 === 0) ? 115 : 120;
            const ampP = (step % 2 === 0) ? 25 : 15;
            const funcName = (step % 2 === 0) ? 'sin' : 'cos';
            const svg = G11_W34_UI.waveModel(midP, midP + ampP, midP - ampP, 'mmHg');

            return {
                q: '[Toán 11] Huyết áp của một người được mô hình hóa bởi hàm số ' + F.m('p(t) = ' + midP + ' + ' + ampP + ' ' + funcName + '(' + omegaCoeff + '&pi;t)') + ', trong đó ' + F.m('p(t)') + ' là huyết áp tính bằng ' + F.m('mmHg') + ' và ' + F.m('t') + ' là thời gian tính bằng phút (như đồ thị). Biết một chu kì biến thiên của huyết áp tương ứng với một nhịp tim, hỏi nhịp tim của người này là bao nhiêu nhịp trong một phút?' + svg,
                ans: String(bpm)
            };
        }
    });

    // MODULE W34-07: DÃY SỐ u_n = 2n/(n²+1), SỐ HẠNG CSC & CSN CƠ BẢN (ĐỀ 3 CÂU 7, 8, 9 & ĐỀ 4 CÂU 7, 8, 9 PHẦN I)
    window.registerMathTopicGenerator('11', 'g11_w34_day_so_csc_csn_phan_1', {
        title: '🔢 Dãy số, CSC & CSN cơ bản: Tính u₃ = 2n/(n²+1), u₂ = u₁·q và u₅ = u₁ + 4d (Đề 3 & Đề 4 Phần I)',
        shortLabel: '🔢 Dãy số, CSC & CSN (Phần I)',
        keywords: /n\^2\+1|số hạng thứ 5 của cấp số cộng|u_1 = -2/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const mode = step % 3;

            if (mode === 0) {
                // Đề 3 - Câu 9 Phần I: Cho u_n = (k*n) / (n^2 + 1). Khi k = 2, n = 3 => u_3 = 6/10 = 0.6
                const nVal = 3;
                const kMult = ((seed + step) % 5 + 1) * 2; // 2, 4, 6, 8, 10
                const u3Val = (kMult * nVal) / (nVal * nVal + 1); // Chia cho 10 luôn ra thập phân đẹp!
                return {
                    q: '[Toán 11] Cho dãy số ' + F.m('(u<sub>n</sub>)') + ' có công thức số hạng tổng quát ' + F.m('u<sub>n</sub> = ' + F.frac(kMult + 'n', 'n<sup>2</sup> + 1')) + '. Giá trị của số hạng thứ ba ' + F.m('u<sub>3</sub>') + ' bằng bao nhiêu?',
                    ans: String(u3Val)
                };
            } else if (mode === 1) {
                // Đề 3 - Câu 8 Phần I: Cho CSN có u1 = -a, q = b => Tính u2 = u1 * q
                const u1 = -(((seed + step) % 5) + 2); // -2..-6 (-2 ở Đề 3)
                const q  = ((step % 4) + 2);           // 2..5 (3 ở Đề 3 => u2 = -6)
                return {
                    q: '[Toán 11] Cho cấp số nhân ' + F.m('(u<sub>n</sub>)') + ' có số hạng đầu ' + F.m('u<sub>1</sub> = ' + u1) + ' và công bội ' + F.m('q = ' + q) + '. Số hạng thứ hai ' + F.m('u<sub>2</sub>') + ' bằng bao nhiêu?',
                    ans: String(u1 * q)
                };
            } else {
                // Đề 4 - Câu 9 Phần I: Cho CSC có u1 = 3, d = 4 => Tính u5 = u1 + 4d = 19
                const u1 = ((seed + step) % 6) + 2; // 2..7 (3 ở Đề 4)
                const d  = ((step % 5) + 3);        // 3..7 (4 ở Đề 4)
                const kTerm = 5;
                return {
                    q: '[Toán 11] Cho cấp số cộng ' + F.m('(u<sub>n</sub>)') + ' có số hạng đầu ' + F.m('u<sub>1</sub> = ' + u1) + ' và công sai ' + F.m('d = ' + d) + '. Số hạng thứ ' + F.m(kTerm) + ' của cấp số cộng bằng bao nhiêu?',
                    ans: String(u1 + (kTerm - 1) * d)
                };
            }
        }
    });

    // MODULE W34-08: HỆ PHƯƠNG TRÌNH CẤP SỐ CỘNG & TỔNG S_20 (ĐỀ 3 CÂU 2a PHẦN IV & ĐỀ 4 CÂU 2 PHẦN II)
    window.registerMathTopicGenerator('11', 'g11_w34_he_pt_csc_tong_s20', {
        title: '➕ Cấp số cộng: Giải hệ u₂ + u₅ = 14, u₃ − u₁ = 4 & Tính tổng S₂₀ (Đề 3 & Đề 4)',
        shortLabel: '➕ Hệ PT CSC & Tổng S₂₀',
        keywords: /u2\+u5=14|u3-u1=4|tổng 20 số hạng đầu/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Chuẩn Đề 3 - Câu 2a Phần IV:
                // Hệ CSC: u2 + u5 = 2*u1 + 5*d = A và u3 - u1 = 2*d = B.
                // Khi u1 = 2, d = 2 => u2 + u5 = 14, u3 - u1 = 4 (Chuẩn 100% Đề 3!)
                const u1 = ((seed + step) % 5) + 2; // 2..6
                const d  = ((step % 4) + 2);        // 2..5
                const eq1 = (2 * u1) + (5 * d);
                const eq2 = 2 * d;
                return {
                    q: '[Toán 11] Cho cấp số cộng ' + F.m('(u<sub>n</sub>)') + ' thỏa mãn hệ thức ' + F.m('u<sub>2</sub> + u<sub>5</sub> = ' + eq1) + ' và ' + F.m('u<sub>3</sub> &minus; u<sub>1</sub> = ' + eq2) + '. Tính tổng ' + F.m('T = u<sub>1</sub> + d') + ' của số hạng đầu ' + F.m('u<sub>1</sub>') + ' và công sai ' + F.m('d') + '.',
                    ans: String(u1 + d)
                };
            } else {
                // Chuẩn Đề 4 - Câu 2 Phần II: Cho CSC có u1 = 2, d = 5 => Tổng 20 số hạng đầu S_20 = 990
                const u1 = ((seed + step) % 4) + 2; // 2..5 (2 ở Đề 4)
                const d  = ((step % 4) + 3);        // 3..6 (5 ở Đề 4)
                const s20 = (20 * (2 * u1 + 19 * d)) / 2;
                return {
                    q: '[Toán 11] Cho cấp số cộng ' + F.m('(u<sub>n</sub>)') + ' có số hạng đầu ' + F.m('u<sub>1</sub> = ' + u1) + ' và công sai ' + F.m('d = ' + d) + '. Tính tổng ' + F.m('S<sub>20</sub>') + ' của ' + F.m('20') + ' số hạng đầu tiên của cấp số cộng.',
                    ans: String(s20)
                };
            }
        }
    });

    // MODULE W34-09: TỔNG n SỐ HẠNG ĐẦU CẤP SỐ NHÂN S_10 (q = -2) & S_6 (q = 2) (ĐỀ 3 & ĐỀ 4 CÂU 3 PHẦN III)
    window.registerMathTopicGenerator('11', 'g11_w34_tong_csn_q_am_duong', {
        title: '✖️ Cấp số nhân: Tính tổng S₁₀ với q = −2 và S₆ với q = 2 (Đề 3 & Đề 4 - Câu 3 Phần III)',
        shortLabel: '✖️ Tổng S_n CSN (q = ±2)',
        keywords: /tổng 10 số hạng đầu tiên của cấp số nhân|q = -2|tổng 6 số hạng đầu/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Chuẩn Đề 3 - Câu 3 Phần III: u1 = 2, q = -2, tính S_10 = 2*(1 - (-2)^10)/(1 - (-2)) = -682
                const u1 = (((seed + step) % 3) + 1) * 3; // 3, 6, 9 (hoặc 2 với n=10)
                const isDefault = (step % 4 === 0);
                const firstTerm = isDefault ? 2 : u1;
                const nTerms    = isDefault ? 10 : 8;
                const sVal      = (firstTerm * (1 - Math.pow(-2, nTerms))) / 3;
                return {
                    q: '[Toán 11] Tính tổng ' + F.m(nTerms) + ' số hạng đầu tiên của cấp số nhân có số hạng đầu ' + F.m('u<sub>1</sub> = ' + firstTerm) + ' và công bội ' + F.m('q = &minus;2') + '.',
                    ans: String(sVal)
                };
            } else {
                // Chuẩn Đề 4 - Câu 3 Phần III: u1 = 3, q = 2, tính S_6 = 3*(2^6 - 1) = 189
                const u1 = ((seed + step) % 5) + 2; // 2..6 (3 ở Đề 4)
                const nTerms = ((step % 3) + 5);    // 5, 6, 7 (6 ở Đề 4)
                const sVal = u1 * (Math.pow(2, nTerms) - 1);
                return {
                    q: '[Toán 11] Cho cấp số nhân ' + F.m('(u<sub>n</sub>)') + ' có số hạng đầu ' + F.m('u<sub>1</sub> = ' + u1) + ' và công bội ' + F.m('q = 2') + '. Tính tổng ' + F.m(nTerms) + ' số hạng đầu tiên của cấp số nhân đó.',
                    ans: String(sVal)
                };
            }
        }
    });

    // MODULE W34-10: TOÁN THỰC TẾ CSC: XẾP HỘP KIM TỰ THÁP, GHẾ HỘI TRƯỜNG & CHẠY MARATHON (ĐỀ 3 & ĐỀ 4)
    window.registerMathTopicGenerator('11', 'g11_w34_kim_tu_thap_marathon', {
        title: '🏃 Toán thực tế CSC: Xếp hộp Kim tự tháp, Ghế hội trường & Tập chạy Marathon (Đề 3 & Đề 4)',
        shortLabel: '🏃 Kim tự tháp & Marathon',
        keywords: /kim tự tháp|hộp giấy|tập chạy bộ|marathon|75 km/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const mode = step % 3;

            if (mode === 0) {
                // Chuẩn Đề 3 - Câu 4 Phần III: Xếp hộp giấy hình kim tự tháp từ n hộp ở đáy giảm dần về 1 hộp ở đỉnh
                // Tổng S = n*(n + 1)/2 (Khi n = 20 => S = 210 hộp!)
                const nBottom = ((seed + step) % 11) + 15; // 15..25 hộp (20 ở Đề 3)
                const totalBoxes = (nBottom * (nBottom + 1)) / 2;
                const svg = G11_W34_UI.boxPyramid(nBottom);
                return {
                    q: '[Toán 11] Để trang trí một khu hội chợ, người ta xếp các hộp giấy thành hình kim tự tháp: hàng dưới cùng xếp ' + F.m(nBottom) + ' hộp, hàng ngay phía trên xếp ' + F.m(nBottom - 1) + ' hộp, và tiếp tục xếp giảm dần mỗi hàng ' + F.m('1') + ' hộp cho đến khi hàng trên cùng có đúng ' + F.m('1') + ' hộp (như hình vẽ). Hỏi người ta đã sử dụng tất cả bao nhiêu hộp giấy?' + svg,
                    ans: String(totalBoxes)
                };
            } else if (mode === 1) {
                // Chuẩn Đề 4 - Câu 2 Phần IV Tự luận: Tập chạy bộ marathon
                // Ngày đầu chạy u1 = 3 km, mỗi ngày sau tăng thêm d = 0,5 km. Tìm số ngày n để tổng tích lũy đạt S_n (km).
                // Khi u1 = 3, d = 0,5, n = 12 ngày => S_12 = 12*(6 + 11*0,5)/2 = 69 km; khi n = 12 với u1=3,25 hoặc khi u1=3, d=0,5:
                // Lưu ý trong Đề 4: u1 = 3, d = 0,5, S_n = 75 => n*(5,5 + 0,5n)/2 = 75 => n^2 + 11n - 300 = 0 (nghiệm gần đúng) HOẶC nếu u1 = 2,5, d = 0,5, n = 15 => S = 90; với u1 = 3, d = 0,5, S_10 = 52,5; S_12 = 69; S_13 = 78; nếu u1 = 2, d = 1 => S_10 = 65.
                // Để ra số ngày n nguyên tuyệt đối cho học sinh: Cho u1 = 3 km, d = 0,5 km, n = 12, 14, 16, 20 ngày => tính sẵn S_n nguyên!
                const nDaysList = [10, 12, 14, 16, 20]; // Chọn n chẵn để S_n nguyên đẹp
                const nDays = nDaysList[(seed + step) % nDaysList.length];
                const u1Km  = 3;
                const dKm   = 0.5;
                const totalKm = (nDays * (2 * u1Km + (nDays - 1) * dKm)) / 2;
                return {
                    q: '[Toán 11] Một người tập chạy bộ để chuẩn bị cho giải chạy marathon. Ngày đầu tiên, người đó chạy được quãng đường ' + F.m(u1Km + ' km') + '. Để tăng dần sức bền, mỗi ngày tiếp theo người đó đều chạy tăng thêm ' + F.m('0,5 km') + ' so với ngày ngay trước đó. Hỏi sau đúng bao nhiêu ngày thì tổng quãng đường người đó đã chạy tích lũy được đạt đúng ' + F.m(totalKm + ' km') + '?',
                    ans: String(nDays)
                };
            } else {
                // Chuẩn Đề 4 - Câu 4 Phần III: Hội trường 25 hàng ghế, hàng đầu 20 ghế, mỗi hàng sau hơn 2 ghế => 1100 chỗ ngồi
                const nRows = ((seed + step) % 6) + 20; // 20..25 hàng ghế
                const u1    = 20;
                const d     = 2;
                const totalSeats = (nRows * (2 * u1 + (nRows - 1) * d)) / 2;
                return {
                    q: '[Toán 11] Trong một hội trường, người ta sắp xếp ghế ngồi thành các hàng theo nguyên tắc: Hàng đầu tiên có ' + F.m(u1) + ' ghế, mỗi hàng ngay phía sau có nhiều hơn hàng ngay phía trước nó ' + F.m(d) + ' ghế. Hỏi nếu hội trường có ' + F.m(nRows) + ' hàng ghế thì tổng cộng có bao nhiêu chỗ ngồi?',
                    ans: String(totalSeats)
                };
            }
        }
    });

    // MODULE W34-11: TOÁN THỰC TẾ CSN: TĂNG LƯƠNG 10%/NĂM & LÃI KÉP NGÂN HÀNG (ĐỀ 3 CÂU 2 PHẦN II & CÂU 2b PHẦN IV)
    window.registerMathTopicGenerator('11', 'g11_w34_tang_luong_lai_kep', {
        title: '💰 Toán thực tế CSN: Mức lương tăng 10%/năm & Gửi tiết kiệm lãi kép ngân hàng (Đề 3 Phần II & IV)',
        shortLabel: '💰 Tăng lương & Lãi kép',
        keywords: /tăng thêm 10%|lãi kép|gửi tiết kiệm 100 triệu|732,6/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Chuẩn Đề 3 - Câu 2 Phần II:
                // Năm đầu nhận u1 = 120 triệu đồng, mỗi năm sau tăng 10% (q = 1,1).
                // Năm thứ 3 nhận u3 = u1 * (1,1)^2; Tổng sau 5 năm là S_5 = u1 * ((1,1)^5 - 1) / 0,1.
                const u1List = [100, 120, 150, 200]; // 120 triệu là chuẩn Đề 3!
                const u1 = u1List[(seed + step) % u1List.length];
                const u3 = Math.round(u1 * 1.21 * 10) / 10; // Khi u1 = 120 => u3 = 145,2 triệu đồng!
                return {
                    q: '[Toán 11] Một người bắt đầu đi làm tại một công ty. Trong năm đầu tiên, tổng mức lương người đó nhận được là ' + F.m(u1) + ' triệu đồng. Kể từ năm thứ hai, mỗi năm tổng lương của người đó được tăng thêm ' + F.m('10%') + ' so với năm ngay trước đó. Hỏi tổng mức lương người đó nhận được ở năm thứ ' + F.m('3') + ' là bao nhiêu triệu đồng?',
                    ans: String(u3)
                };
            } else {
                // Chuẩn Đề 3 - Câu 2b Phần IV:
                // Ông A gửi P0 triệu đồng vào ngân hàng theo thể thức lãi kép, kì hạn 1 năm với lãi suất r%/năm trong 5 năm.
                // T = P0 * (1 + r/100)^5 (làm tròn đến hàng phần chục triệu đồng).
                const p0List = [100, 200, 300];
                const p0 = p0List[(seed + step) % p0List.length];
                const rate = 6; // 6%/năm
                const totalAfter5 = Math.round(p0 * Math.pow(1.06, 5) * 10) / 10; // Khi p0=100 => 133,8 triệu đồng
                return {
                    q: '[Toán 11] Ông A gửi tiết kiệm ' + F.m(p0) + ' triệu đồng vào ngân hàng với thể thức lãi kép, kì hạn ' + F.m('1') + ' năm với lãi suất ' + F.m(rate + '%/năm') + '. Giả sử lãi suất không đổi trong suốt quá trình gửi. Hỏi sau đúng ' + F.m('5') + ' năm, tổng số tiền cả gốc lẫn lãi ông A nhận được là bao nhiêu triệu đồng (làm tròn kết quả đến hàng phần chục)?',
                    ans: String(totalAfter5)
                };
            }
        }
    });

    // MODULE W34-12: THỐNG KÊ CƠ BẢN & TRUNG BÌNH CỘNG, MỐT, TRUNG VỊ, TỨ PHÂN VỊ (ĐỀ 3 & ĐỀ 4 CÂU 10, 11, 12 PHẦN I & CÂU 3 PHẦN IV)
    window.registerMathTopicGenerator('11', 'g11_w34_thong_ke_tong_hop', {
        title: '📊 Thống kê Đề 3 & Đề 4: Giá trị đại diện, Số trung bình, Trung vị Me, Tứ phân vị Q₁, Q₃ & Mốt (Kèm Bảng)',
        shortLabel: '📊 Thống kê Đề 3 & Đề 4',
        keywords: /cân nặng|khoảng tuổi|thời gian sử dụng điện thoại|thời gian đọc sách/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const mode = step % 4;

            if (mode === 0) {
                // Đề 3 - Câu 11 Phần I: Giá trị đại diện của nhóm [71;80) trong bảng cân nặng là 75,5
                const groups = ['[35;44)', '[44;53)', '[53;62)', '[62;71)', '[71;80)', '[80;89)'];
                const freqs  = [2, 7, 1, 14, 19, 20];
                const pickIdx = (seed + step) % groups.length;
                const aVal = 35 + (pickIdx * 9);
                const bVal = aVal + 9;
                const repVal = (aVal + bVal) / 2;
                const tbl = G11_W34_UI.statTable('Cân nặng (kg)', groups, 'Số người', freqs);
                return {
                    q: '[Toán 11] Cho mẫu số liệu ghép nhóm về cân nặng (đơn vị: kg) và số người như bảng sau:' + tbl + 'Tính giá trị đại diện của nhóm ' + F.m('[' + aVal + '; ' + bVal + ')') + '.',
                    ans: String(repVal)
                };
            } else if (mode === 1) {
                // Đề 3 - Câu 3 Phần IV: Thời gian sử dụng điện thoại của 30 học sinh: [0;1):2, [1;2):5, [2;3):10, [3;4):8, [4;5):5
                // Trung vị Me = 2 + (15 - 7)/10 * 1 = 2,8 (giờ); Q1 = 2 + (7,5 - 7)/10 * 1 = 2,05 (giờ)
                const groups = ['[0;1)', '[1;2)', '[2;3)', '[3;4)', '[4;5)'];
                const freqs  = [2, 5, 10, 8, 5];
                const tbl = G11_W34_UI.statTable('Thời gian (giờ)', groups, 'Số học sinh', freqs);
                return {
                    q: '[Toán 11] Khảo sát thời gian sử dụng điện thoại mỗi ngày (đơn vị: giờ) của 30 học sinh, ta có bảng số liệu ghép nhóm sau:' + tbl + 'Tìm trung vị ' + F.m('M<sub>e</sub>') + ' của mẫu số liệu ghép nhóm trên.',
                    ans: '2.8'
                };
            } else if (mode === 2) {
                // Đề 4 - Câu 11 Phần I: Tìm Q1 của mẫu khoảng tuổi: [15;23):21, [23;31):8, [31;39):10, [39;47):21, [47;55):18, [55;63):7 (N = 85)
                // Vị trí Q1 = 85/4 = 21,25 thuộc nhóm [23;31) => Q1 = 23 + (21,25 - 21)/8 * 8 = 23,25!
                const groups = ['[15;23)', '[23;31)', '[31;39)', '[39;47)', '[47;55)', '[55;63)'];
                const freqs  = [21, 8, 10, 21, 18, 7];
                const tbl = G11_W34_UI.statTable('Khoảng tuổi', groups, 'Số người', freqs);
                return {
                    q: '[Toán 11] Cho mẫu số liệu ghép nhóm về khoảng tuổi và số người như bảng sau:' + tbl + 'Tìm tứ phân vị thứ nhất ' + F.m('Q<sub>1</sub>') + ' của mẫu số liệu ghép nhóm đã cho.',
                    ans: '23.25'
                };
            } else {
                // Đề 4 - Câu 3 Phần IV: Thời gian đọc sách trong tuần của 40 HS: [0;2):5, [2;4):12, [4;6):13, [6;8):8, [8;10):2
                // Thời gian đọc sách trung bình = (5*1 + 12*3 + 13*5 + 8*7 + 2*9)/40 = 180/40 = 4,5 (giờ)
                const groups = ['[0;2)', '[2;4)', '[4;6)', '[6;8)', '[8;10)'];
                const freqs  = [5, 12, 13, 8, 2];
                const tbl = G11_W34_UI.statTable('Thời gian (giờ)', groups, 'Số học sinh', freqs);
                return {
                    q: '[Toán 11] Khảo sát thời gian đọc sách trong tuần (đơn vị: giờ) của 40 học sinh, ta thu được bảng số liệu ghép nhóm như sau:' + tbl + 'Hãy tính thời gian đọc sách trung bình (đơn vị: giờ) của mẫu số liệu ghép nhóm trên.',
                    ans: '4.5'
                };
            }
        }
    });

    if (typeof window.refreshAdminTopicDropdown === 'function') {
        window.refreshAdminTopicDropdown();
    }
})();
//==============
(function() {
    if (typeof window.registerMathTopicGenerator !== 'function') return;
    const F = window.IMATHS_FMT;

    // ===================================================================
    // BỘ HÀM VẼ ĐỒ THỊ & BẢNG BIẾN THIÊN VECTOR SVG CHÍNH XÁC (CÂU 1 -> 8)
    // ===================================================================
    const G11_W2_SVG = {
        // 1. Đồ thị hàm số y = tan x có 2 đường tiệm cận đứng x = -π/2, x = π/2 đi qua O(0;0) (Chuẩn Câu 1)
        tanGraphExact: function(asymLbl) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 140" width="235" height="135">' +
                '<line x1="18" y1="70" x2="228" y2="70" stroke="#94a3b8" stroke-width="1.5"/>' +
                '<polygon points="233,70 225,66 225,74" fill="#94a3b8"/>' +
                '<line x1="122" y1="132" x2="122" y2="10" stroke="#94a3b8" stroke-width="1.5"/>' +
                '<polygon points="122,5 118,13 126,13" fill="#94a3b8"/>' +
                // Các đường tiệm cận đứng x = -π/2 và x = π/2
                '<line x1="74" y1="12" x2="74" y2="128" stroke="#f87171" stroke-width="1.4" stroke-dasharray="4 3"/>' +
                '<line x1="170" y1="12" x2="170" y2="128" stroke="#f87171" stroke-width="1.4" stroke-dasharray="4 3"/>' +
                // Nhánh chính đi qua gốc tọa độ O(122, 70) với tiếp tuyến y = x tại O
                '<path d="M 80 126 C 92 92, 106 82, 122 70 C 138 58, 152 48, 164 14" fill="none" stroke="#38bdf8" stroke-width="2.4" stroke-linecap="round"/>' +
                // Hai nhánh phụ hai bên
                '<path d="M 32 70 C 48 58, 58 48, 68 14" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>' +
                '<path d="M 176 126 C 186 92, 196 82, 212 70" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>' +
                '<circle cx="122" cy="70" r="3.2" fill="#fde047"/>' +
                '<text x="50" y="84" fill="#f87171" font-size="10" font-weight="bold">&minus;' + asymLbl + '</text>' +
                '<text x="174" y="84" fill="#f87171" font-size="10" font-weight="bold">' + asymLbl + '</text>' +
                '<text x="110" y="84" fill="#cbd5e1" font-size="10">O</text>' +
                '<text x="128" y="18" fill="#cbd5e1" font-size="11" font-style="italic">y</text>' +
                '<text x="220" y="84" fill="#cbd5e1" font-size="11" font-style="italic">x</text>' +
            '</svg></div>';
        },

        // 2. Đồ thị hàm số y = cos x cắt trục hoành tại -π/2, π/2, 3π/2 (Chuẩn Câu 2)
        cosZeroGraphExact: function() {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 250 138" width="235" height="132">' +
                '<line x1="15" y1="70" x2="232" y2="70" stroke="#94a3b8" stroke-width="1.5"/>' +
                '<polygon points="237,70 229,66 229,74" fill="#94a3b8"/>' +
                '<line x1="105" y1="128" x2="105" y2="12" stroke="#94a3b8" stroke-width="1.5"/>' +
                '<polygon points="105,7 101,15 109,15" fill="#94a3b8"/>' +
                '<line x1="20" y1="34" x2="225" y2="34" stroke="#475569" stroke-width="1" stroke-dasharray="3 3"/>' +
                '<line x1="20" y1="106" x2="225" y2="106" stroke="#475569" stroke-width="1" stroke-dasharray="3 3"/>' +
                // Đường cong y = cos x đi qua (-π/2; 0)=(65,70), (0; 1)=(105,34), (π/2; 0)=(145,70), (π; -1)=(185,106), (3π/2; 0)=(225,70)
                '<path d="M 25 106 C 40 106, 52 88, 65 70 C 78 52, 90 34, 105 34 C 120 34, 132 52, 145 70 C 158 88, 170 106, 185 106 C 200 106, 212 88, 225 70" fill="none" stroke="#38bdf8" stroke-width="2.4" stroke-linecap="round"/>' +
                '<circle cx="65" cy="70" r="3.4" fill="#fde047"/>' +
                '<circle cx="145" cy="70" r="3.4" fill="#4ade80"/>' +
                '<circle cx="225" cy="70" r="3.4" fill="#4ade80"/>' +
                '<text x="44" y="86" fill="#fde047" font-size="10" font-weight="bold">&minus;&pi;/2</text>' +
                '<text x="136" y="86" fill="#4ade80" font-size="10" font-weight="bold">&pi;/2</text>' +
                '<text x="198" y="64" fill="#4ade80" font-size="10" font-weight="bold">3&pi;/2</text>' +
                '<text x="93" y="31" fill="#fde047" font-size="10" font-weight="bold">1</text>' +
                '<text x="86" y="118" fill="#cbd5e1" font-size="10">&minus;1</text>' +
                '<text x="94" y="84" fill="#cbd5e1" font-size="10">O</text>' +
            '</svg></div>';
        },

        // 3. Đường tròn lượng giác biểu diễn phương trình sin x = sin(π/m) có 2 điểm ngọn cung bù nhau (Chuẩn Câu 3)
        unitCircleSinEq: function(denM) {
            const supNum = denM - 1;
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 140" width="235" height="134">' +
                '<line x1="20" y1="74" x2="225" y2="74" stroke="#94a3b8" stroke-width="1.4"/>' +
                '<polygon points="230,74 222,70 222,78" fill="#94a3b8"/>' +
                '<line x1="122" y1="132" x2="122" y2="10" stroke="#94a3b8" stroke-width="1.4"/>' +
                '<polygon points="122,5 118,13 126,13" fill="#94a3b8"/>' +
                '<circle cx="122" cy="74" r="50" fill="rgba(56,189,248,0.1)" stroke="#38bdf8" stroke-width="2"/>' +
                // Đường nằm ngang y = sin(π/m) cắt đường tròn tại M1 và M2 đối xứng qua Oy
                '<line x1="56" y1="45" x2="188" y2="45" stroke="#fde047" stroke-width="1.4" stroke-dasharray="3 2"/>' +
                '<line x1="122" y1="74" x2="163" y2="45" stroke="#4ade80" stroke-width="1.8"/>' +
                '<line x1="122" y1="74" x2="81" y2="45" stroke="#4ade80" stroke-width="1.8"/>' +
                '<circle cx="163" cy="45" r="3.5" fill="#fde047"/>' +
                '<circle cx="81" cy="45" r="3.5" fill="#fde047"/>' +
                '<text x="169" y="44" fill="#fde047" font-size="10.5" font-weight="bold">&pi;/' + denM + '</text>' +
                '<text x="36" y="44" fill="#4ade80" font-size="10.5" font-weight="bold">' + supNum + '&pi;/' + denM + '</text>' +
                '<text x="110" y="88" fill="#cbd5e1" font-size="10">O</text>' +
            '</svg></div>';
        },

        // 4. Bảng biến thiên & Cực trị của hàm số y = a*cos(kx) - c trên 1 chu kì (Chuẩn Câu 4)
        bbtCosMinMax: function(kFreq, yMax, yMin) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 250 128" width="238" height="124">' +
                '<rect x="10" y="8" width="230" height="112" rx="6" fill="#040b16" stroke="#475569" stroke-width="1.6"/>' +
                '<line x1="10" y1="36" x2="240" y2="36" stroke="#475569" stroke-width="1.4"/>' +
                '<line x1="46" y1="8" x2="46" y2="120" stroke="#475569" stroke-width="1.4"/>' +
                '<text x="28" y="26" fill="#fde047" font-size="11" font-weight="bold" font-style="italic" text-anchor="middle">x</text>' +
                '<text x="28" y="82" fill="#38bdf8" font-size="11" font-weight="bold" font-style="italic" text-anchor="middle">y</text>' +
                '<text x="72" y="26" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">0</text>' +
                '<text x="142" y="26" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">&pi;/' + kFreq + '</text>' +
                '<text x="212" y="26" fill="#e2e8f0" font-size="11" font-weight="bold" text-anchor="middle">2&pi;/' + kFreq + '</text>' +
                '<text x="72" y="56" fill="#4ade80" font-size="11.5" font-weight="bold" text-anchor="middle">' + yMax + '</text>' +
                '<text x="142" y="108" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">' + yMin + '</text>' +
                '<text x="212" y="56" fill="#4ade80" font-size="11.5" font-weight="bold" text-anchor="middle">' + yMax + '</text>' +
                '<line x1="84" y1="58" x2="126" y2="98" stroke="#94a3b8" stroke-width="1.6"/>' +
                '<polygon points="130,102 122,99 127,93" fill="#94a3b8"/>' +
                '<line x1="156" y1="98" x2="198" y2="58" stroke="#4ade80" stroke-width="1.6"/>' +
                '<polygon points="202,54 198,62 193,57" fill="#4ade80"/>' +
            '</svg></div>';
        }
    };

    // ===================================================================
    // MODULE 1 (CHUẨN CÂU 1): TẬP XÁC ĐỊNH CỦA HÀM SỐ y = tan x
    // ===================================================================
    window.registerMathTopicGenerator('11', 'g11_web2_c1_txd_ham_tan', {
        title: '🔍 Câu 1: Tập xác định của hàm số y = tan x (Kèm Đồ thị SVG chuẩn)',
        shortLabel: '🔍 Câu 1: TXĐ y = tan x',
        keywords: /tập xác định của hàm số y = tan x|d = r \\/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 1: Hàm số y = tan(a*x) xác định khi cos(a*x) != 0 <=> x != π/(2a) + k*π/a (k ∈ Z).
            // Khi a = 1 (y = tan x): D = R \ {π/2 + kπ, k ∈ Z} (Đúng 100% Đáp án B Câu 1!).
            const aCoeff = ((seed + step) % 3) + 1; // 1, 2, 3 (Khi a = 1 là đúng đề gốc y = tan x)
            const mDen   = 2 * aCoeff;              // Mẫu số của π/m là 2, 4, 6
            const funcStr = (aCoeff === 1) ? 'tan x' : ('tan(' + aCoeff + 'x)');
            const periodStr = (aCoeff === 1) ? 'k&pi;' : ('k' + F.frac('&pi;', aCoeff));
            const svg = G11_W2_SVG.tanGraphExact('&pi;/' + mDen);

            return {
                q: '[Toán 11] Biết tập xác định của hàm số ' + F.m('y = ' + funcStr) + ' (có đồ thị và các đường tiệm cận đứng như hình vẽ) là ' + F.m('D = R \\ {' + F.frac('&pi;', 'm') + ' + ' + periodStr + ', k &isin; Z}') + '. Tìm giá trị của số nguyên dương ' + F.m('m') + '.' + svg,
                ans: String(mDen)
            };
        }
    });

    // ===================================================================
    // MODULE 2 (CHUẨN CÂU 2): NGHIỆM CỦA PHƯƠNG TRÌNH cos x = 0
    // ===================================================================
    window.registerMathTopicGenerator('11', 'g11_web2_c2_pt_cos_x_bang_0', {
        title: '📉 Câu 2: Nghiệm của phương trình lượng giác đặc biệt cos x = 0 (Kèm Đồ thị SVG chuẩn)',
        shortLabel: '📉 Câu 2: PT cos x = 0',
        keywords: /phương trình cos x = 0 có tất cả các nghiệm là/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const svg  = G11_W2_SVG.cosZeroGraphExact();

            if (step % 2 === 0) {
                // Chuẩn Câu 2: Phương trình cos x = 0 <=> x = π/2 + kπ (k ∈ Z) (Đáp án C Câu 2).
                // Hỏi trực tiếp mẫu số m trong họ nghiệm x = π/m + kπ, hoặc đếm số nghiệm trên đoạn [0; n*π].
                const nPi = ((seed + step) % 5) + 2; // 2, 3, 4, 5, 6
                // Trên mỗi khoảng dài π có đúng 1 nghiệm của cos x = 0 => Trên đoạn [0; n*π] có đúng n nghiệm!
                return {
                    q: '[Toán 11] Biết phương trình ' + F.m('cos x = 0') + ' có tất cả các nghiệm là ' + F.m('x = ' + F.frac('&pi;', '2') + ' + k&pi; (k &isin; Z)') + ' (minh họa bởi các giao điểm của đồ thị ' + F.m('y = cos x') + ' với trục hoành ' + F.m('Ox') + ' như hình vẽ). Hỏi trên đoạn ' + F.m('[0; ' + nPi + '&pi;]') + ', phương trình ' + F.m('cos x = 0') + ' có tất cả bao nhiêu nghiệm?' + svg,
                    ans: String(nPi)
                };
            } else {
                const aMult = ((seed + step) % 4) + 1; // 1, 2, 3, 4
                const aStr  = (aMult === 1) ? 'x' : (aMult + 'x');
                // cos(a*x) = 0 <=> x = π/(2a) + kπ/a => nghiệm dương nhỏ nhất là π/(2a) => mẫu số m = 2*a
                return {
                    q: '[Toán 11] Phương trình lượng giác ' + F.m('cos(' + aStr + ') = 0') + ' có nghiệm dương nhỏ nhất là ' + F.m('x = ' + F.frac('&pi;', 'm')) + ' (với ' + F.m('m &isin; N*') + '). Tìm giá trị của ' + F.m('m') + '.' + svg,
                    ans: String(2 * aMult)
                };
            }
        }
    });

    // ===================================================================
    // MODULE 3 (CHUẨN CÂU 3): PHƯƠNG TRÌNH LƯỢNG GIÁC CƠ BẢN sin x = sin(π/5)
    // ===================================================================
    window.registerMathTopicGenerator('11', 'g11_web2_c3_pt_sin_x_bang_sin_a', {
        title: '⭕ Câu 3: Họ nghiệm của phương trình sin x = sin(π/5) trên đường tròn lượng giác (Kèm SVG)',
        shortLabel: '⭕ Câu 3: PT sin x = sin(π/5)',
        keywords: /phương trình sin x = sin|4\\pi\/5/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 3: sin x = sin(π/m) <=> x = π/m + k2π hoặc x = π - π/m + k2π = ((m - 1)π)/m + k2π (k ∈ Z).
            // Khi m = 5: hai họ nghiệm là x = π/5 + k2π và x = 4π/5 + k2π (Đúng 100% Đáp án A Câu 3!).
            const mList = [5, 7, 8, 9, 10, 11]; // Khi m = 5 là đúng chuẩn Câu 3 trong ảnh
            const mDen  = mList[(seed + step) % mList.length];
            const aNum  = mDen - 1;
            const svg   = G11_W2_SVG.unitCircleSinEq(mDen);

            return {
                q: '[Toán 11] Phương trình ' + F.m('sin x = sin ' + F.frac('&pi;', mDen)) + ' có tất cả các nghiệm được biểu diễn bởi hai họ nghiệm là ' + F.m('x = ' + F.frac('&pi;', mDen) + ' + k2&pi;') + ' và ' + F.m('x = ' + F.frac('a&pi;', mDen) + ' + k2&pi; (k &isin; Z)') + ' với ' + F.m('0 &lt; a &lt; ' + mDen) + ' (như hình vẽ). Tìm giá trị của ' + F.m('a') + '.' + svg,
                ans: String(aNum)
            };
        }
    });

    // ===================================================================
    // MODULE 4 (CHUẨN CÂU 4): GIÁ TRỊ NHỎ NHẤT CỦA HÀM SỐ y = cos 3x − 4
    // ===================================================================
    window.registerMathTopicGenerator('11', 'g11_web2_c4_gtnn_cos_3x_tru_4', {
        title: '📊 Câu 4: Tìm giá trị nhỏ nhất của hàm số y = cos 3x − 4 (Kèm Bảng biến thiên SVG chuẩn)',
        shortLabel: '📊 Câu 4: GTNN y = cos 3x − 4',
        keywords: /giá trị nhỏ nhất của hàm số y = cos 3x - 4|-5/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 4: Cho hàm số y = a*cos(3x) - c (với a > 0).
            // Vì -1 <= cos 3x <= 1 nên giá trị nhỏ nhất là y_min = -a - c, giá trị lớn nhất là y_max = a - c.
            // Khi a = 1, c = 4: y = cos 3x - 4 => GTNN bằng -1 - 4 = -5 (Chuẩn 100% Đáp án C Câu 4!).
            const aCoeff = ((step % 2 === 0) ? 1 : (((seed + step) % 3) + 2)); // Ưu tiên a = 1 như đề gốc
            const cSub   = ((seed + step) % 5) + 3; // 3, 4, 5, 6, 7 (4 ở đề gốc)
            const kFreq  = 3;
            const aStr   = (aCoeff === 1) ? '' : String(aCoeff);
            const yMax   = aCoeff - cSub;
            const yMin   = -aCoeff - cSub;
            const svg    = G11_W2_SVG.bbtCosMinMax(kFreq, yMax, yMin);

            return {
                q: '[Toán 11] Cho hàm số ' + F.m('y = ' + aStr + 'cos 3x &minus; ' + cSub) + ' có bảng biến thiên trên một chu kì như hình vẽ bên dưới. Giá trị nhỏ nhất của hàm số đã cho bằng bao nhiêu?' + svg,
                ans: String(yMin)
            };
        }
    });

    // ===================================================================
    // MODULE 5 (CHUẨN CÂU 5): CÔNG THỨC CỘNG cos(a − π/6)
    // ===================================================================
    window.registerMathTopicGenerator('11', 'g11_web2_c5_cong_thuc_cong_cos', {
        title: '⚡ Câu 5: Khai triển công thức cộng cos(a − π/6) = (√3/2)cos a + (1/2)sin a',
        shortLabel: '⚡ Câu 5: Công thức cos(a − π/6)',
        keywords: /cos\(a - \\pi\/6\)|khẳng định nào sau đây đúng/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 5: cos(a - π/6) = cos a * cos(π/6) + sin a * sin(π/6) = (sqrt(3)/2)*cos a + (1/2)*sin a (Đáp án A).
            if (step % 2 === 0) {
                // Thay cos a = 2*sqrt(3)*m, sin a = 2*n để tính giá trị nguyên của cos(a - π/6) hoặc hỏi hệ số khai triển
                const k = ((seed + step) % 5) + 1; // 1..5
                // Khai triển k * 2 * cos(a - π/6) = k*sqrt(3)*cos a + k*sin a = A*sqrt(3)*cos a + B*sin a => A + B = 2k
                return {
                    q: '[Toán 11] Áp dụng công thức cộng ' + F.m('cos(a &minus; ' + F.frac('&pi;', '6') + ') = ' + F.frac(F.sqrt('3'), '2') + ' cos a + ' + F.frac('1', '2') + ' sin a') + ', khi khai triển biểu thức ' + F.m('P = ' + (2 * k) + ' cos(a &minus; ' + F.frac('&pi;', '6') + ')') + ' về dạng ' + F.m('m' + F.sqrt('3') + ' cos a + n sin a') + ' thì tổng ' + F.m('T = m + n') + ' bằng bao nhiêu?',
                    ans: String(2 * k)
                };
            } else {
                // Tính giá trị của 10 * cos(a - π/6) khi biết sin a = 3/5 và cos a = 4/sqrt(3) ... hoặc tại góc đặc biệt a = π/6 => cos(0) = 1
                const mMult = ((seed + step) % 7) + 2; // 2..8
                return {
                    q: '[Toán 11] Biết đẳng thức đúng là ' + F.m('cos(a &minus; ' + F.frac('&pi;', '6') + ') = ' + F.frac(F.sqrt('3'), '2') + ' cos a + ' + F.frac('1', '2') + ' sin a') + '. Hãy tính giá trị của biểu thức ' + F.m('A = ' + mMult + '(&radic;3 cos ' + F.frac('&pi;', '6') + ' + sin ' + F.frac('&pi;', '6') + ')') + '.',
                    ans: String(2 * mMult)
                };
            }
        }
    });

    // ===================================================================
    // MODULE 6 (CHUẨN CÂU 6): DÃY SỐ CHO BỞI CÔNG THỨC TRUY HỒI u_{n+1} = 2u_n − 1
    // ===================================================================
    window.registerMathTopicGenerator('11', 'g11_web2_c6_day_so_truy_hoi_u3', {
        title: '🔁 Câu 6: Tính số hạng thứ ba u₃ của dãy số truy hồi u₁ = 3, u_{n+1} = 2u_n − 1',
        shortLabel: '🔁 Câu 6: Dãy truy hồi u₃',
        keywords: /u_1 = 3|u_\{n\+1\} = 2u_n - 1|số hạng thứ ba của dãy số/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 6: Cho dãy số u1 = a, u_{n+1} = 2*u_n - b (n ∈ N*).
            // Khi u1 = 3, b = 1: u2 = 2(3) - 1 = 5; u3 = 2(5) - 1 = 9 (Chuẩn 100% Đáp án C Câu 6!).
            const u1 = ((seed + step) % 5) + 2; // 2, 3, 4, 5, 6 (3 ở đề gốc)
            const b  = ((step % 3) + 1);        // 1, 2, 3       (1 ở đề gốc)
            const u2 = (2 * u1) - b;
            const u3 = (2 * u2) - b;

            return {
                q: '[Toán 11] Cho dãy số ' + F.m('(u<sub>n</sub>)') + ' được xác định bởi ' + F.m('u<sub>1</sub> = ' + u1) + ' và ' + F.m('u<sub>n+1</sub> = 2u<sub>n</sub> &minus; ' + b + ' (&forall;n &isin; N*)') + '. Số hạng thứ ba ' + F.m('u<sub>3</sub>') + ' của dãy số này bằng bao nhiêu?',
                ans: String(u3)
            };
        }
    });

    // ===================================================================
    // MODULE 7 (CHUẨN CÂU 7): TÌM CÔNG BỘI q CỦA CẤP SỐ NHÂN ĐAN DẤU
    // ===================================================================
    window.registerMathTopicGenerator('11', 'g11_web2_c7_cong_boi_cap_so_nhan', {
        title: '✖️ Câu 7: Tìm công bội q của cấp số nhân 2/3; −1/3; 1/6',
        shortLabel: '✖️ Câu 7: Công bội q CSN',
        keywords: /cho cấp số nhân 2\/3; -1\/3; 1\/6|công bội của cấp số nhân/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 7: Cho cấp số nhân 2/3; -1/3; 1/6 => Công bội q = (-1/3) : (2/3) = -1/2 = -0.5 (Đáp án D Câu 7).
            const cases = [
                { seqHtml: F.frac('2', '3') + '; &minus;' + F.frac('1', '3') + '; ' + F.frac('1', '6'), qAns: -0.5 }, // Chuẩn 100% Câu 7!
                { seqHtml: F.frac('4', '5') + '; &minus;' + F.frac('2', '5') + '; ' + F.frac('1', '5'), qAns: -0.5 },
                { seqHtml: F.frac('1', '3') + '; ' + F.frac('1', '6') + '; ' + F.frac('1', '12'),       qAns: 0.5 },
                { seqHtml: F.frac('3', '2') + '; &minus;3; 6',                                           qAns: -2 },
                { seqHtml: F.frac('2', '5') + '; &minus;' + F.frac('4', '5') + '; ' + F.frac('8', '5'), qAns: -2 }
            ];
            const pk = cases[(seed + step) % cases.length];

            return {
                q: '[Toán 11] Cho cấp số nhân có ba số hạng liên tiếp là ' + F.m(pk.seqHtml) + '. Công bội ' + F.m('q') + ' của cấp số nhân đã cho bằng bao nhiêu (viết dưới dạng số thập phân nếu là phân số)?',
                ans: String(pk.qAns)
            };
        }
    });

    // ===================================================================
    // MODULE 8 (CHUẨN CÂU 8): TÍNH sin 2x KHI BIẾT sin x − cos x = −1/2
    // ===================================================================
    window.registerMathTopicGenerator('11', 'g11_web2_c8_tinh_sin2x_tu_hieu', {
        title: '📐 Câu 8: Tính giá trị của sin 2x khi biết sin x − cos x = −1/2',
        shortLabel: '📐 Câu 8: Tính sin 2x',
        keywords: /nếu sin x - cos x = -1\/2 thì sin 2x bằng/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 8: Ta có (sin x - cos x)^2 = sin^2(x) + cos^2(x) - 2*sin x*cos x = 1 - sin 2x
            // => sin 2x = 1 - (sin x - cos x)^2.
            // Khi sin x - cos x = -1/2 => sin 2x = 1 - 1/4 = 3/4 = 0,75 (Chuẩn 100% Câu 8!).
            const cases = [
                { diffHtml: '&minus;' + F.frac('1', '2'), multK: 1,  ansVal: 0.75 }, // Chuẩn đề gốc: 3/4 = 0.75
                { diffHtml: F.frac('1', '2'),             multK: 4,  ansVal: 3 },    // 4 * sin 2x = 3
                { diffHtml: '&minus;' + F.frac('1', '3'), multK: 9,  ansVal: 8 },    // sin 2x = 8/9 => 9 * sin 2x = 8
                { diffHtml: F.frac('2', '3'),             multK: 9,  ansVal: 5 },    // sin 2x = 5/9 => 9 * sin 2x = 5
                { diffHtml: '&minus;' + F.frac('3', '5'), multK: 25, ansVal: 16 }    // sin 2x = 16/25 => 25 * sin 2x = 16
            ];
            const pk = cases[(seed + step) % cases.length];

            if (pk.multK === 1) {
                return {
                    q: '[Toán 11] Nếu ' + F.m('sin x &minus; cos x = ' + pk.diffHtml) + ' thì giá trị của ' + F.m('sin 2x') + ' (viết dưới dạng số thập phân) bằng bao nhiêu?',
                    ans: String(pk.ansVal)
                };
            } else {
                return {
                    q: '[Toán 11] Nếu ' + F.m('sin x &minus; cos x = ' + pk.diffHtml) + ' thì giá trị của biểu thức ' + F.m('P = ' + pk.multK + ' sin 2x') + ' bằng bao nhiêu?',
                    ans: String(pk.ansVal)
                };
            }
        }
    });

    if (typeof window.refreshAdminTopicDropdown === 'function') {
        window.refreshAdminTopicDropdown();
    }
})();

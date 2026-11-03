/* Kho đề Toán 12 – trích từ snippet iMaths Studio (registerMathTopicGenerator) */

(function() {
    if (typeof window.registerMathTopicGenerator !== 'function') return;
    const F = window.IMATHS_FMT;

    // XÓA SẠCH TOÀN BỘ MODULE KHỐI 12 CŨ
    if (window.IMATHS_ADMIN_GENERATORS) {
        window.IMATHS_ADMIN_GENERATORS['12'] = {};
    }

    // ===================================================================
    // BỘ HÀM VẼ ĐỒ THỊ SVG & BẢNG BIẾN THIÊN CHUẨN ĐỀ TOÁN 12 - THPT VIỆT ĐỨC
    // ===================================================================
    const G12_VD_UI = {
        // 1. Đồ thị hàm số bậc ba có 2 điểm cực trị (Câu 3 & Câu 5 Phần I)
        cubicGraph: function(x1, y1, x2, y2) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 142" width="235" height="135">' +
                '<line x1="18" y1="74" x2="228" y2="74" stroke="#94a3b8" stroke-width="1.5"/><polygon points="232,74 224,70 224,78" fill="#94a3b8"/>' +
                '<line x1="115" y1="132" x2="115" y2="12" stroke="#94a3b8" stroke-width="1.5"/><polygon points="115,8 111,16 119,16" fill="#94a3b8"/>' +
                '<line x1="82" y1="74" x2="82" y2="28" stroke="#fde047" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="115" y1="28" x2="82" y2="28" stroke="#fde047" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="158" y1="74" x2="158" y2="112" stroke="#4ade80" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="115" y1="112" x2="158" y2="112" stroke="#4ade80" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<path d="M 40 124 C 60 28, 70 28, 82 28 C 102 28, 138 112, 158 112 C 170 112, 182 112, 202 16" fill="none" stroke="#38bdf8" stroke-width="2.5"/>' +
                '<circle cx="82" cy="28" r="3.5" fill="#fde047"/><circle cx="158" cy="112" r="3.5" fill="#4ade80"/>' +
                '<text x="74" y="88" fill="#fde047" font-size="10.5" font-weight="bold">' + x1 + '</text>' +
                '<text x="154" y="68" fill="#4ade80" font-size="10.5" font-weight="bold">' + x2 + '</text>' +
                '<text x="120" y="32" fill="#fde047" font-size="10.5" font-weight="bold">' + y1 + '</text>' +
                '<text x="92" y="116" fill="#4ade80" font-size="10.5" font-weight="bold">' + y2 + '</text>' +
                '<text x="103" y="87" fill="#cbd5e1" font-size="10">O</text>' +
                '<text x="220" y="88" fill="#cbd5e1" font-size="11" font-style="italic">x</text>' +
                '<text x="122" y="18" fill="#cbd5e1" font-size="11" font-style="italic">y</text>' +
            '</svg></div>';
        },

        // 2. Đồ thị hàm phân thức bậc nhất / bậc nhất có TCĐ x = xAsym, TCN y = yAsym (Câu 6 Phần I & Câu 5 Phần III)
        rationalGraph: function(xAsym, yAsym, yInt, xInt) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 142" width="235" height="135">' +
                '<line x1="18" y1="92" x2="228" y2="92" stroke="#94a3b8" stroke-width="1.5"/><polygon points="232,92 224,88 224,96" fill="#94a3b8"/>' +
                '<line x1="140" y1="132" x2="140" y2="12" stroke="#94a3b8" stroke-width="1.5"/><polygon points="140,8 136,16 144,16" fill="#94a3b8"/>' +
                '<line x1="92" y1="12" x2="92" y2="132" stroke="#fde047" stroke-width="1.5" stroke-dasharray="4 3"/>' +
                '<line x1="18" y1="54" x2="225" y2="54" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="4 3"/>' +
                '<path d="M 22 64 Q 72 70 84 128" fill="none" stroke="#38bdf8" stroke-width="2.4"/>' +
                '<path d="M 100 14 Q 116 44 222 50" fill="none" stroke="#38bdf8" stroke-width="2.4"/>' +
                '<circle cx="140" cy="30" r="3.2" fill="#fde047"/><circle cx="56" cy="92" r="3.2" fill="#4ade80"/>' +
                '<text x="72" y="106" fill="#fde047" font-size="10.5" font-weight="bold">' + xAsym + '</text>' +
                '<text x="145" y="51" fill="#4ade80" font-size="10.5" font-weight="bold">' + yAsym + '</text>' +
                '<text x="146" y="33" fill="#fde047" font-size="10.5" font-weight="bold">' + yInt + '</text>' +
                '<text x="44" y="106" fill="#4ade80" font-size="10.5" font-weight="bold">' + xInt + '</text>' +
                '<text x="128" y="105" fill="#cbd5e1" font-size="10">O</text>' +
            '</svg></div>';
        },

        // 3. Bảng biến thiên hàm số bậc ba (Câu 8 Phần I)
        bbtCubic: function(xCD, yCD, xCT, yCT) {
            return '<div style="overflow-x:auto;margin:8px 0 4px;"><table style="width:100%;border-collapse:collapse;background:#040b16;font-size:11.5px;border:1.5px solid #334155;text-align:center;color:#f8fafc;">' +
                '<tr style="border-bottom:1px solid #334155;"><td style="padding:4px 8px;border-right:1px solid #334155;color:#fde047;font-weight:900;">x</td><td>&minus;&infin;</td><td style="color:#fde047;font-weight:900;">' + xCD + '</td><td></td><td style="color:#4ade80;font-weight:900;">' + xCT + '</td><td>+&infin;</td></tr>' +
                '<tr style="border-bottom:1px solid #334155;"><td style="padding:4px 8px;border-right:1px solid #334155;color:#38bdf8;font-weight:900;">f\'(x)</td><td>+</td><td>0</td><td>&minus;</td><td>0</td><td>+</td></tr>' +
                '<tr><td style="padding:8px;border-right:1px solid #334155;color:#c084fc;font-weight:900;">f(x)</td><td>&minus;&infin; &nearr;</td><td style="color:#fde047;font-weight:900;">' + yCD + '</td><td>&searr;</td><td style="color:#4ade80;font-weight:900;">' + yCT + '</td><td>&nearr; +&infin;</td></tr>' +
            '</table></div>';
        },

        // 4. Đồ thị hàm số liên tục trên đoạn [0; 4] tìm GTLN & GTNN (Câu 12 Phần I)
        segmentMaxMinGraph: function(y0, y1Max, y3Min, y4End) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 142" width="235" height="135">' +
                '<line x1="25" y1="96" x2="228" y2="96" stroke="#94a3b8" stroke-width="1.5"/><polygon points="232,96 224,92 224,100" fill="#94a3b8"/>' +
                '<line x1="42" y1="130" x2="42" y2="12" stroke="#94a3b8" stroke-width="1.5"/><polygon points="42,8 38,16 46,16" fill="#94a3b8"/>' +
                '<line x1="82" y1="96" x2="82" y2="38" stroke="#fde047" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="42" y1="38" x2="82" y2="38" stroke="#fde047" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="162" y1="96" x2="162" y2="118" stroke="#f87171" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="42" y1="118" x2="162" y2="118" stroke="#f87171" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="202" y1="96" x2="202" y2="20" stroke="#4ade80" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<path d="M 42 58 Q 82 22 122 58 L 162 118 L 202 20" fill="none" stroke="#38bdf8" stroke-width="2.5"/>' +
                '<circle cx="42" cy="58" r="3" fill="#fde047"/><circle cx="82" cy="38" r="3.5" fill="#fde047"/>' +
                '<circle cx="162" cy="118" r="3.5" fill="#f87171"/><circle cx="202" cy="20" r="3.5" fill="#4ade80"/>' +
                '<text x="26" y="62" fill="#cbd5e1" font-size="10">' + y0 + '</text>' +
                '<text x="26" y="42" fill="#fde047" font-size="10.5" font-weight="bold">' + y1Max + '</text>' +
                '<text x="20" y="122" fill="#f87171" font-size="10.5" font-weight="bold">' + y3Min + '</text>' +
                '<text x="26" y="24" fill="#4ade80" font-size="10.5" font-weight="bold">' + y4End + '</text>' +
                '<text x="79" y="110" fill="#fde047" font-size="10" font-weight="bold">1</text>' +
                '<text x="119" y="110" fill="#cbd5e1" font-size="10">2</text>' +
                '<text x="159" y="90" fill="#f87171" font-size="10" font-weight="bold">3</text>' +
                '<text x="199" y="110" fill="#4ade80" font-size="10" font-weight="bold">4</text>' +
            '</svg></div>';
        },

        // 5. Hình Tấm bìa hình chữ nhật cắt 4 góc vuông cạnh x gấp thành hộp không nắp (Câu 3 Phần III)
        cardboardBox: function(lenA, widB) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 140" width="235" height="134">' +
                '<rect x="42" y="24" width="166" height="96" fill="rgba(56,189,248,0.1)" stroke="#38bdf8" stroke-width="2"/>' +
                '<rect x="42" y="24" width="26" height="24" fill="rgba(250,204,21,0.3)" stroke="#fde047" stroke-width="1.4"/>' +
                '<rect x="182" y="24" width="26" height="24" fill="rgba(250,204,21,0.3)" stroke="#fde047" stroke-width="1.4"/>' +
                '<rect x="42" y="96" width="26" height="24" fill="rgba(250,204,21,0.3)" stroke="#fde047" stroke-width="1.4"/>' +
                '<rect x="182" y="96" width="26" height="24" fill="rgba(250,204,21,0.3)" stroke="#fde047" stroke-width="1.4"/>' +
                '<rect x="68" y="48" width="114" height="48" fill="none" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="4 3"/>' +
                '<text x="55" y="40" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">x</text>' +
                '<text x="195" y="40" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">x</text>' +
                '<text x="125" y="16" fill="#4ade80" font-size="10.5" font-weight="bold" text-anchor="middle">' + lenA + ' cm</text>' +
                '<text x="20" y="76" fill="#4ade80" font-size="10.5" font-weight="bold" text-anchor="middle">' + widB + 'cm</text>' +
                '<text x="125" y="76" fill="#cbd5e1" font-size="10" font-style="italic" text-anchor="middle">Đáy hộp (đường gấp)</text>' +
            '</svg></div>';
        }
    };

    // ===================================================================
    // MODULE VD12-01: SỐ ĐIỂM CỰC TRỊ TỪ ĐẠO HÀM ĐÃ PHÂN TÍCH NHÂN TỬ (CÂU 1 PHẦN I)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_vd_so_diem_cuc_tri_dao_ham', {
        title: '🔍 Cực trị hàm số: Đếm số điểm cực trị từ đạo hàm f\'(x) = (x+a)(x−b)²(x−c) (Câu 1 Phần I)',
        shortLabel: '🔍 Đếm cực trị từ f\'(x)',
        keywords: /bao nhiêu điểm cực trị|đạo hàm là|nghiệm bội/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const mode = step % 3;
            const a = ((seed + step) % 4) + 1;
            const b = ((seed * 2 + step) % 3) + 1;
            const c = b + ((step % 4) + 2);
            const d = c + 2;

            if (mode === 0) {
                // Chuẩn Câu 1 Phần I: 2 nhân tử bậc lẻ, 1 nhân tử mũ chẵn => 2 điểm cực trị
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' có tập xác định là ' + F.m('R') + ' và có đạo hàm là ' + F.m('f\'(x) = (x + ' + a + ')(x &minus; ' + b + ')<sup>2</sup>(x &minus; ' + c + ')') + '. Hàm số đã cho có bao nhiêu điểm cực trị?',
                    ans: '2'
                };
            } else if (mode === 1) {
                // 3 nhân tử mũ lẻ (1, 3, 1), 1 nhân tử mũ chẵn (4) => 3 điểm cực trị
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' liên tục trên ' + F.m('R') + ' và có đạo hàm ' + F.m('f\'(x) = x(x + ' + a + ')<sup>3</sup>(x &minus; ' + b + ')<sup>4</sup>(x &minus; ' + c + ')') + '. Hàm số đã cho có tất cả bao nhiêu điểm cực trị?',
                    ans: '3'
                };
            } else {
                // 1 nhân tử mũ lẻ, 2 nhân tử mũ chẵn => 1 điểm cực trị
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' có đạo hàm trên ' + F.m('R') + ' là ' + F.m('f\'(x) = (x + ' + a + ')<sup>2</sup>(x &minus; ' + b + ')<sup>4</sup>(x &minus; ' + d + ')') + '. Hỏi hàm số ' + F.m('y = f(x)') + ' có bao nhiêu điểm cực trị?',
                    ans: '1'
                };
            }
        }
    });

    // ===================================================================
    // MODULE VD12-02: ĐƠN ĐIỆU & NHẬN DIỆN ĐỒ THỊ HÀM BẬC BA (CÂU 2, 3, 5 PHẦN I)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_vd_don_dieu_do_thi_bac_3', {
        title: '📈 Đồ thị Bậc ba: Khoảng nghịch biến & Xác định hàm số f(x) từ đồ thị (Câu 2, 3, 5 Phần I)',
        shortLabel: '📈 Đơn điệu & Đồ thị Bậc 3',
        keywords: /nghịch biến trên khoảng nào|liên tục trên r và có đồ thị|hàm số bậc ba/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Chuẩn Câu 3 Phần I: Nhìn đồ thị hàm bậc 3 có CĐ tại x1 và CT tại x2 => nghịch biến trên (x1; x2)
                const pairs = [
                    { x1: -1, y1: 5, x2: 2, y2: -5 }, // Chuẩn Câu 3 Phần I
                    { x1: -1, y1: 5, x2: 1, y2: 1 },  // Chuẩn Câu 5 Phần I
                    { x1: -2, y1: 4, x2: 1, y2: -1 },
                    { x1: 0,  y1: 4, x2: 2, y2: 0 }
                ];
                const pk  = pairs[(seed + step) % pairs.length];
                const svg = G12_VD_UI.cubicGraph(pk.x1, pk.y1, pk.x2, pk.y2);
                return {
                    q: '[Toán 12] Cho hàm số bậc ba ' + F.m('y = f(x)') + ' có đồ thị như hình vẽ bên dưới. Biết hàm số nghịch biến trên khoảng ' + F.m('(a; b)') + ' có độ dài lớn nhất, hãy tính hiệu ' + F.m('T = b &minus; a') + '.' + svg,
                    ans: String(pk.x2 - pk.x1)
                };
            } else {
                // Chuẩn Câu 5 Phần I: Đồ thị hàm bậc ba y = a*x^3 + b*x^2 + c*x + d đạt CĐ tại (-1; yCD) và CT tại (1; yCT)
                // Hàm số y = k*x^3 - 3*k*x + d => Tại x = 2 có f(2) = 8k - 6k + d = 2k + d = yCD!
                const k = ((seed + step) % 3) + 1; // 1, 2, 3
                const d = ((step % 4) + 2);        // 2, 3, 4, 5 (Khi k=1, d=3 => CĐ(-1;5), CT(1;1) chuẩn Câu 5!)
                const yCD = (2 * k) + d;
                const yCT = (-2 * k) + d;
                const svg = G12_VD_UI.cubicGraph(-1, yCD, 1, yCT);
                return {
                    q: '[Toán 12] Cho hàm số bậc ba ' + F.m('y = f(x) = ax<sup>3</sup> + bx<sup>2</sup> + cx + d') + ' liên tục trên ' + F.m('R') + ' có đồ thị đi qua điểm cực đại ' + F.m('(&minus;1; ' + yCD + ')') + ' và điểm cực tiểu ' + F.m('(1; ' + yCT + ')') + ' như hình vẽ. Tính giá trị của ' + F.m('f(2)') + '.' + svg,
                    ans: String(yCD)
                };
            }
        }
    });

    // ===================================================================
    // MODULE VD12-03: CHUYỂN ĐỘNG CHẤT ĐIỂM – THỜI ĐIỂM VẬN TỐC CỰC ĐẠI (CÂU 4 PHẦN I)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_vd_van_toc_lon_nhat', {
        title: '🚀 Toán thực tế Vật lí: Tìm thời điểm vận tốc v(t) của chất điểm đạt GTLN (Câu 4 Phần I)',
        shortLabel: '🚀 Vận tốc cực đại v(t)',
        keywords: /chất điểm chuyển động|vận tốc của chất điểm|s\(t\)/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 4 Phần I: s(t) = -t^3 + b*t^2 + c*t + d => v(t) = s'(t) = -3t^2 + 2b*t + c.
            // Vận tốc đạt GTLN tại đỉnh parabol: t = b / 3.
            if (step % 2 === 0) {
                // Khi b = 3*t0 => Thời điểm t = t0 nguyên đẹp!
                const t0 = ((seed + step) % 5) + 2; // 2, 3, 4, 5, 6 giây
                const bCoeff = 3 * t0;
                const cCoeff = ((step % 5) + 3);
                return {
                    q: '[Toán 12] Một chất điểm chuyển động trên trục số với vị trí cho bởi ' + F.m('s(t) = &minus;t<sup>3</sup> + ' + bCoeff + 't<sup>2</sup> + ' + cCoeff + 't + 6') + ', trong đó ' + F.m('s') + ' tính bằng mét, ' + F.m('t') + ' tính bằng giây (' + F.m('t &ge; 0') + '). Trong ' + F.m('10') + ' giây đầu của chuyển động, vận tốc của chất điểm đạt giá trị lớn nhất tại thời điểm ' + F.m('t') + ' bằng bao nhiêu giây?',
                    ans: String(t0)
                };
            } else {
                // Giữ đúng số liệu Câu 4 Phần I: s(t) = -t^3 + 5t^2 + 4t + 6 => t = 5/3 => hỏi 3*t = 5
                const bList = [5, 7, 8, 10]; // Không chia hết cho 3
                const bCoeff = bList[(seed + step) % bList.length];
                return {
                    q: '[Toán 12] Một chất điểm chuyển động trên trục số với vị trí cho bởi ' + F.m('s(t) = &minus;t<sup>3</sup> + ' + bCoeff + 't<sup>2</sup> + 4t + 6') + ' (' + F.m('s') + ' tính bằng mét, ' + F.m('t &ge; 0') + ' tính bằng giây). Biết vận tốc của chất điểm đạt giá trị lớn nhất tại thời điểm ' + F.m('t = t<sub>0</sub>') + ', hãy tính giá trị của biểu thức ' + F.m('P = 3t<sub>0</sub>') + '.',
                    ans: String(bCoeff)
                };
            }
        }
    });

    // ===================================================================
    // MODULE VD12-04: ĐỒ THỊ HÀM PHÂN THỨC y = (ax + b)/(cx + d) (CÂU 6 PHẦN I & CÂU 5 PHẦN III)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_vd_do_thi_ham_phan_thuc_bcd', {
        title: '📊 Đồ thị Phân thức: Tìm hệ số b, c, d từ đồ thị y = (ax+b)/(cx+d) (Câu 6 Phần I & Câu 5 Phần III)',
        shortLabel: '📊 Đồ thị y = (ax+b)/(cx+d)',
        keywords: /2b\+3c-4d|3x\+b|cx\+d|2x\+1/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 5 Phần III:
            // Cho hàm số y = (a*x + b) / (c*x + d) có đồ thị nhận x = xAsym (< 0) làm TCĐ, y = a làm TCN (nên c = 1, d = -xAsym).
            // Đồ thị cắt trục tung tại (0; yInt) => b / d = yInt => b = d * yInt.
            // Khi a = 3, xAsym = -2, yInt = 6 => c = 1, d = 2, b = 12 => T = 2b + 3c - 4d = 24 + 3 - 8 = 19 (Chuẩn 100% Câu 5 Phần III!)
            const xAsym = -(((seed + step) % 3) + 1); // -1, -2, -3 (-2 ở đề gốc)
            const aVal  = ((step % 3) + 2);           // 2, 3, 4    (3 ở đề gốc)
            const cVal  = 1;
            const dVal  = -xAsym;                     // 1, 2, 3
            const kMult = ((seed * 2 + step) % 2) + 2; // 2 hoặc 3
            const yInt  = aVal * kMult;               // 6 ở đề gốc
            const bVal  = dVal * yInt;                // 12 ở đề gốc
            const xInt  = -(bVal / aVal);             // -4 ở đề gốc
            const ansT  = (2 * bVal) + (3 * cVal) - (4 * dVal);
            const svg   = G12_VD_UI.rationalGraph(xAsym, aVal, yInt, xInt);

            return {
                q: '[Toán 12] Cho hàm số ' + F.m('y = ' + F.frac(aVal + 'x + b', 'cx + d')) + ' (với ' + F.m('b, c, d') + ' là các hằng số) có đồ thị như hình vẽ bên dưới (tiệm cận đứng ' + F.m('x = ' + xAsym) + ', tiệm cận ngang ' + F.m('y = ' + aVal) + ' và cắt trục tung tại điểm có tung độ bằng ' + F.m(yInt) + '). Tính giá trị của biểu thức ' + F.m('T = 2b + 3c &minus; 4d') + '.' + svg,
                ans: String(ansT)
            };
        }
    });

    // ===================================================================
    // MODULE VD12-05: CỰC TRỊ & ĐƠN ĐIỆU HÀM SỐ LOGARIT (CÂU 7, 10 PHẦN I)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_vd_cuc_tri_don_dieu_logarit', {
        title: '📐 Hàm số Logarit: Cực tiểu của f(x) = ln x + k/x & Đơn điệu của f(x) = ln(x² − 2ax + c) (Câu 7, 10 Phần I)',
        shortLabel: '📐 Cực trị & Đơn điệu ln(u)',
        keywords: /ln x|ln\(x\^2|giá trị cực tiểu của hàm số/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Chuẩn Câu 7 Phần I: Cho f(x) = ln x + k/x (x > 0).
                // Đạo hàm f'(x) = 1/x - k/x^2 = (x - k)/x^2 = 0 <=> x = k.
                // Giá trị cực tiểu là f(k) = 1 + ln k (Khi k = 4 => y_CT = 1 + ln 4 chuẩn Câu 7 Phần I!)
                const k = ((seed + step) % 8) + 2; // 2..9 (4 ở đề gốc)
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('f(x) = ln x + ' + F.frac(k, 'x')) + ' với ' + F.m('x &gt; 0') + '. Biết giá trị cực tiểu của hàm số có dạng ' + F.m('y<sub>CT</sub> = a + ln b') + ' (với ' + F.m('a, b &isin; N*') + '). Tính tổng ' + F.m('T = a + b') + '.',
                    ans: String(1 + k)
                };
            } else {
                // Chuẩn Câu 10 Phần I: Cho f(x) = ln(x^2 - 2*a*x + c) với c > a^2.
                // f'(x) = (2x - 2a)/(x^2 - 2ax + c) > 0 <=> x > a => Hàm số đồng biến trên (a; +∞) (Khi a=1 => (1; +∞) chuẩn Câu 10!)
                const a = ((seed + step) % 6) + 1; // 1..6
                const twoA = 2 * a;
                const c = (a * a) + ((step % 4) + 2);
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('f(x) = ln(x<sup>2</sup> &minus; ' + twoA + 'x + ' + c + ')') + '. Biết hàm số đồng biến trên khoảng ' + F.m('(a; +&infin;)') + ' và nghịch biến trên khoảng ' + F.m('(&minus;&infin;; a)') + ', hãy tìm giá trị của ' + F.m('a') + '.',
                    ans: String(a)
                };
            }
        }
    });

    // ===================================================================
    // MODULE VD12-06: BẢNG BIẾN THIÊN & MAX - MIN TRÊN ĐOẠN TỪ ĐỒ THỊ (CÂU 8, 12 PHẦN I)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_vd_bbt_max_min_do_thi', {
        title: '📉 Bảng biến thiên & Đồ thị trên đoạn: Điểm cực đại và Tổng GTLN + GTNN (Câu 8, 12 Phần I)',
        shortLabel: '📉 BBT & Max–Min Đồ thị',
        keywords: /bảng biến thiên|tổng của giá trị lớn nhất và giá trị nhỏ nhất|trên đoạn \[0;3\]/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Chuẩn Câu 8 Phần I: Cho BBT hàm số f(x) có điểm cực đại (xCD; yCD) và điểm cực tiểu (xCT; yCT)
                const xCD = -(((seed + step) % 4) + 1); // -1..-4 (-2 ở đề gốc)
                const yCD = ((seed * 2 + step) % 6) + 3; // 3..8 (4 ở đề gốc)
                const xCT = ((step % 3) + 1);            // 1..3 (1 ở đề gốc)
                const yCT = -(((seed + step * 2) % 3) + 1); // -1..-3 (-1 ở đề gốc)
                const bbt = G12_VD_UI.bbtCubic(xCD, yCD, xCT, yCT);
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' liên tục trên ' + F.m('R') + ' và có bảng biến thiên như sau:' + bbt + 'Biết điểm cực đại của đồ thị hàm số là ' + F.m('M(x<sub>0</sub>; y<sub>0</sub>)') + ', tính tổng ' + F.m('T = x<sub>0</sub> + y<sub>0</sub>') + '.',
                    ans: String(xCD + yCD)
                };
            } else {
                // Chuẩn Câu 12 Phần I: Cho đồ thị hàm số y = f(x) liên tục trên [0; 4].
                // Trên đoạn [0; 3], GTLN đạt tại x = 1 là M = y1Max, GTNN đạt tại x = 3 là m = y3Min.
                // Khi y0 = 2, y1Max = 3, y3Min = -1, y4End = 4 => M + m = 3 + (-1) = 2 (Chuẩn 100% Câu 12 Phần I!)
                const y1Max = ((seed + step) % 4) + 3;     // 3..6 (3 ở đề gốc)
                const y0    = y1Max - 1;
                const y3Min = -(((step % 3) + 1));         // -1..-3 (-1 ở đề gốc)
                const y4End = y1Max + 1;
                const svg   = G12_VD_UI.segmentMaxMinGraph(y0, y1Max, y3Min, y4End);
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' liên tục trên đoạn ' + F.m('[0; 4]') + ' và có đồ thị như hình vẽ bên dưới. Tổng của giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn ' + F.m('[0; 3]') + ' bằng bao nhiêu?' + svg,
                    ans: String(y1Max + y3Min)
                };
            }
        }
    });

    // ===================================================================
    // MODULE VD12-07: ĐẾM SỐ ĐƯỜNG TIỆM CẬN ĐỨNG & NGANG TỪ GIỚI HẠN (CÂU 9, 11 PHẦN I)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_vd_dem_tiem_can_gioi_han', {
        title: '📏 Tiệm cận: Đếm tổng số đường tiệm cận đứng và ngang từ các giới hạn (Câu 9, 11 Phần I)',
        shortLabel: '📏 Đếm Tiệm cận từ lim',
        keywords: /tổng số đường tiệm cận đứng và ngang|lim/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const mode = step % 3;
            const a = ((seed + step) % 5) + 2;
            const x0 = ((step % 4) + 1);

            if (mode === 0) {
                // Chuẩn Câu 11 Phần I: lim(x->+∞) = a, lim(x->-∞) = -a (2 TCN khác nhau) và lim(x->x0+) = +∞ (1 TCĐ) => Tổng = 3!
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' xác định trên tập ' + F.m('R \\ {' + x0 + '}') + ' và liên tục trên từng khoảng xác định. Biết rằng ' + F.m('lim<sub>x&rarr;+&infin;</sub> f(x) = ' + a) + ', ' + F.m('lim<sub>x&rarr;&minus;&infin;</sub> f(x) = &minus;' + a) + ' và ' + F.m('lim<sub>x&rarr;' + x0 + '<sup>+</sup></sub> f(x) = +&infin;') + '. Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số ' + F.m('y = f(x)') + ' là bao nhiêu?',
                    ans: '3'
                };
            } else if (mode === 1) {
                // lim(x->+∞) = a và lim(x->-∞) = a (trùng nhau -> chỉ 1 TCN y = a) + 1 TCĐ x = x0 => Tổng = 2!
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' xác định trên ' + F.m('R \\ {' + x0 + '}') + ' thỏa mãn ' + F.m('lim<sub>x&rarr;+&infin;</sub> f(x) = ' + a) + ', ' + F.m('lim<sub>x&rarr;&minus;&infin;</sub> f(x) = ' + a) + ' và ' + F.m('lim<sub>x&rarr;' + x0 + '<sup>&minus;</sup></sub> f(x) = &minus;&infin;') + '. Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số là bao nhiêu?',
                    ans: '2'
                };
            } else {
                // Chuẩn Câu 9 Phần I: Hàm số y = (1 - a*x)/(x + d) có TCĐ x = -d và TCN y = -a
                const d = ((seed + step) % 6) + 2;
                return {
                    q: '[Toán 12] Đồ thị của hàm số phân thức ' + F.m('y = ' + F.frac('1 &minus; ' + a + 'x', 'x + ' + d)) + ' có đường tiệm cận đứng là ' + F.m('x = x<sub>0</sub>') + ' và đường tiệm cận ngang là ' + F.m('y = y<sub>0</sub>') + '. Tính tích ' + F.m('P = x<sub>0</sub> &middot; y<sub>0</sub>') + '.',
                    ans: String((-d) * (-a))
                };
            }
        }
    });

    // ===================================================================
    // MODULE VD12-08: KHẢO SÁT HÀM SỐ LƯỢNG GIÁC f(x) = x + 2cos x TRÊN [0; 2π] (CÂU 1 PHẦN II)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_vd_khao_sat_x_cong_2cosx', {
        title: '🧭 Đạo hàm Lượng giác: Cực trị và đơn điệu của f(x) = x + 2cos x trên [0; 2π] (Câu 1 Phần II)',
        shortLabel: '🧭 Hàm f(x) = x + 2cos x',
        keywords: /x \+ 2 cos x|1 - 2 sin x|5\\pi\/6/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 1 Phần II: Xét f(x) = k*x + 2*k*cos x trên đoạn [0; 2π] (với k >= 1).
            // f'(x) = k*(1 - 2*sin x) = 0 <=> sin x = 1/2 <=> x = π/6 (điểm cực đại) và x = 5π/6 (điểm cực tiểu).
            const k = ((seed + step) % 4) + 1;
            const kStr = (k === 1) ? '' : String(k);
            const twoK = 2 * k;

            if (step % 2 === 0) {
                return {
                    q: '[Toán 12] Xét hàm số ' + F.m('f(x) = ' + kStr + 'x + ' + twoK + ' cos x') + ' trên đoạn ' + F.m('[0; 2&pi;]') + '. Biết hàm số đạt cực đại tại ' + F.m('x<sub>CĐ</sub> = ' + F.frac('a&pi;', '6')) + ' và đạt cực tiểu tại ' + F.m('x<sub>CT</sub> = ' + F.frac('b&pi;', '6')) + '. Tính hiệu ' + F.m('T = b &minus; a') + '.',
                    ans: '4'
                };
            } else {
                // Hỏi f(0) + f(π) = (0 + 2k) + (kπ - 2k) = kπ => hỏi (f(0) + f(π))/π = k
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('f(x) = ' + kStr + 'x + ' + twoK + ' cos x') + ' trên đoạn ' + F.m('[0; 2&pi;]') + '. Tính giá trị của biểu thức ' + F.m('P = ' + F.frac('f(0) + f(&pi;)', '&pi;')) + '.',
                    ans: String(k)
                };
            }
        }
    });

    // ===================================================================
    // MODULE VD12-09: TOÁN THỰC TẾ MÔ HÌNH QUẦN THỂ VI KHUẨN 2 GIAI ĐOẠN (CÂU 2 PHẦN II)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_vd_vi_khuan_hai_giai_doan', {
        title: '🦠 Toán thực tế Y sinh: Sự phát triển của quần thể vi khuẩn 2 giai đoạn liên tục (Câu 2 Phần II)',
        shortLabel: '🦠 Vi khuẩn 2 giai đoạn',
        keywords: /quần thể vi khuẩn|môi trường nuôi cấy|giai đoạn 1|giai đoạn 2/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 2 Phần II:
            // Giai đoạn 1 (0 <= t <= 3): N(t) = N0 * e^(0,8*t).
            // Giai đoạn 2 (t > 3): M(t) = A - (4*N0/3) * e^(4,2 - 0,6*t).
            // Do hàm số liên tục tại t = 3: N(3) = M(3) => N0*e^2,4 = A - (4*N0/3)*e^2,4 => A = (7*N0/3) * e^2,4.
            // Khi N0 = 40: A = (280/3) * e^2,4 ≈ 1028,83 (triệu cá thể), tốc độ tại t = 3 là N'(3) = 32 * e^2,4 ≈ 352,74!
            const n0List = [30, 40, 60]; // 40 là chuẩn đề gốc!
            const n0 = n0List[(seed + step) % n0List.length];
            const e24 = Math.exp(2.4);

            if (step % 2 === 0) {
                const valA = Math.round(((7 * n0) / 3) * e24);
                return {
                    q: '[Toán 12] Một nhóm nghiên cứu quan sát sự phát triển của một quần thể vi khuẩn. Trong giai đoạn 1 (từ ' + F.m('t = 0') + ' đến ' + F.m('t = 3') + ' giờ), số lượng vi khuẩn (triệu cá thể) tăng theo hàm mũ ' + F.m('N(t) = ' + n0 + 'e<sup>0,8t</sup>') + '. Trong giai đoạn 2 (sau ' + F.m('3') + ' giờ), số lượng vi khuẩn được biểu thị bởi ' + F.m('M(t) = A &minus; ' + F.frac(4 * n0, '3') + 'e<sup>4,2 &minus; 0,6t</sup>') + '. Biết số lượng vi khuẩn biến thiên liên tục tại thời điểm chuyển giao ' + F.m('t = 3') + ' giờ (tức ' + F.m('N(3) = M(3)') + '), hãy tìm giá trị của hằng số ' + F.m('A') + ' (làm tròn đến hàng đơn vị).',
                    ans: String(valA)
                };
            } else {
                const rateAt3 = Math.round((0.8 * n0) * e24); // Khi n0 = 40 => 32 * e^2.4 ≈ 353 triệu cá thể/giờ
                return {
                    q: '[Toán 12] Trong giai đoạn 1 (từ ' + F.m('t = 0') + ' đến ' + F.m('t = 3') + ' giờ), số lượng vi khuẩn trong môi trường nuôi cấy tăng trưởng theo hàm số ' + F.m('N(t) = ' + n0 + 'e<sup>0,8t</sup>') + ' (với ' + F.m('t') + ' tính bằng giờ, ' + F.m('N') + ' tính bằng triệu cá thể). Tính tốc độ tăng trưởng ' + F.m('N\'(3)') + ' của vi khuẩn tại thời điểm ' + F.m('t = 3') + ' giờ (đơn vị: triệu cá thể/giờ, làm tròn đến hàng đơn vị).',
                    ans: String(rateAt3)
                };
            }
        }
    });

    // ===================================================================
    // MODULE VD12-10: ĐƯỜNG THẲNG ĐI QUA 2 ĐIỂM CỰC TRỊ CỦA HÀM BẬC BA (CÂU 3 PHẦN II)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_vd_duong_thang_qua_2_cuc_tri', {
        title: '📐 Cực trị Bậc ba: Hệ số góc đường thẳng qua 2 điểm cực trị & GTNN trên [0; 2] (Câu 3 Phần II)',
        shortLabel: '📐 Đường thẳng qua 2 cực trị',
        keywords: /đường thẳng đi qua hai điểm cực trị|x\^3 - 6x\^2 \+ 9x/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 3 Phần II:
            // Xét hàm số f(x) = k*(x^3 - 6x^2 + 9x) + c (với k >= 1).
            // f'(x) = 3k*(x - 1)(x - 3) = 0 <=> x = 1 (y_CĐ = 4k + c) và x = 3 (y_CT = c).
            // Hệ số góc đường thẳng đi qua 2 điểm cực trị A(1; 4k+c) và B(3; c) là: m = (c - (4k+c)) / (3 - 1) = -2*k!
            // Khi k = 1, c = 2: f(x) = x^3 - 6x^2 + 9x + 2 => hệ số góc = -2, GTNN trên [0; 2] là f(0) = 2 (Chuẩn 100% Câu 3 Phần II!)
            const k = ((seed + step) % 4) + 1; // 1..4
            const c = ((step % 5) + 2);        // 2..6
            const kStr = (k === 1) ? '' : String(k);
            const b6   = 6 * k;
            const c9   = 9 * k;

            if (step % 2 === 0) {
                return {
                    q: '[Toán 12] Cho hàm số bậc ba ' + F.m('f(x) = ' + kStr + 'x<sup>3</sup> &minus; ' + b6 + 'x<sup>2</sup> + ' + c9 + 'x + ' + c) + '. Tính hệ số góc của đường thẳng đi qua hai điểm cực trị của đồ thị hàm số đã cho.',
                    ans: String(-2 * k)
                };
            } else {
                // Trên đoạn [0; 2]: f(0) = c, f(1) = 4k + c, f(2) = 2k + c => GTNN = c và GTLN = 4k + c
                return {
                    q: '[Toán 12] Cho hàm số bậc ba ' + F.m('f(x) = ' + kStr + 'x<sup>3</sup> &minus; ' + b6 + 'x<sup>2</sup> + ' + c9 + 'x + ' + c) + '. Tính tổng giá trị lớn nhất và giá trị nhỏ nhất của hàm số ' + F.m('f(x)') + ' trên đoạn ' + F.m('[0; 2]') + '.',
                    ans: String((4 * k + c) + c)
                };
            }
        }
    });

    // ===================================================================
    // MODULE VD12-11: TÂM ĐỐI XỨNG, TIỆM CẬN XIÊN & GIAO ĐIỂM HÀM BẬC 2/BẬC 1 (CÂU 4 PHẦN II)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_vd_tam_doi_xung_tiem_can_xien', {
        title: '🎯 Hàm phân thức bậc 2/bậc 1: Tâm đối xứng I, Tiệm cận xiên & Diện tích ΔOAB (Câu 4 Phần II)',
        shortLabel: '🎯 Tâm đối xứng & TC Xiên',
        keywords: /tâm đối xứng của \(c\)|tiệm cận xiên|diện tích tam giác oab/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 4 Phần II:
            // Cho hàm số y = (-x^2 + (3 - d)*x + c) / (x + d) = -x + 3 - R/(x + d)
            // TCĐ: x = -d; TCX: y = -x + 3 => Tâm đối xứng là giao của 2 tiệm cận: I(-d; d + 3)!
            // Khi d = 2: y = (-x^2 + x - 2)/(x + 2) => Tâm đối xứng I(-2; 5), diện tích ΔOAB = 3 (Chuẩn 100% Câu 4 Phần II!)
            const d = ((seed + step) % 5) + 2; // 2..6 (2 ở đề gốc)
            const xCenter = -d;
            const yCenter = d + 3;

            if (step % 2 === 0) {
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = &minus;x + 3 &minus; ' + F.frac('8', 'x + ' + d)) + ' có đồ thị ' + F.m('(C)') + '. Biết tâm đối xứng của đồ thị ' + F.m('(C)') + ' (giao điểm của đường tiệm cận đứng và đường tiệm cận xiên) là điểm ' + F.m('I(x<sub>0</sub>; y<sub>0</sub>)') + ', hãy tính giá trị của biểu thức ' + F.m('T = y<sub>0</sub> &minus; x<sub>0</sub>') + '.',
                    ans: String(yCenter - xCenter)
                };
            } else {
                // Ý b Câu 4 Phần II: Đường thẳng Δ: x + 2y = -2 cắt (C): y = (-x^2 + x - 2)/(x + 2) tại A(0; -1) và B(2k; -1 - k)
                // Khi giữ đúng phương trình Câu 4 Phần II với độ mở k: diện tích ΔOAB = 1/2 * OA * |x_B| = 3
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = ' + F.frac('&minus;x<sup>2</sup> + x &minus; 2', 'x + 2')) + ' có đồ thị ' + F.m('(C)') + '. Đường thẳng ' + F.m('&Delta;: x + 2y = &minus;2') + ' cắt ' + F.m('(C)') + ' tại hai điểm phân biệt ' + F.m('A, B') + '. Tính diện tích của tam giác ' + F.m('OAB') + ' (với ' + F.m('O') + ' là gốc tọa độ).',
                    ans: '3'
                };
            }
        }
    });

    // ===================================================================
    // MODULE VD12-12: ĐƠN ĐIỆU CỦA HÀM SỐ HỢP g(x) = f(x² - 2ax) (CÂU 1 PHẦN III)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_vd_don_dieu_ham_hop', {
        title: '🧠 Vận dụng cao Hàm hợp: Tìm m nhỏ nhất để g(x) = f(x² − 2ax) đồng biến trên (m; +∞) (Câu 1 Phần III)',
        shortLabel: '🧠 Đơn điệu Hàm hợp g(x)',
        keywords: /g\(x\) = f\(x\^2|đồng biến trên khoảng \(m;\+\\infty\)|2,41/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 1 Phần III:
            // Cho f(x) = x^3 - 3x => f'(u) = 3(u^2 - 1) >= 0 <=> u >= 1 hoặc u <= -1.
            // Đặt g(x) = f(x^2 - 2*a*x). Ta có g'(x) = 2(x - a) * f'(x^2 - 2ax).
            // Trên nhánh phải x > a, để g'(x) >= 0 <=> x^2 - 2ax >= 1 <=> (x - a)^2 >= a^2 + 1 <=> x >= a + sqrt(a^2 + 1).
            // Vậy giá trị nhỏ nhất của m để g(x) đồng biến trên (m; +∞) là: m_min = a + sqrt(a^2 + 1)!
            // Khi a = 1: g(x) = f(x^2 - 2x) => m_min = 1 + sqrt(2) ≈ 2,41 (Chuẩn 100% đáp số Câu 1 Phần III!)
            const a = ((seed + step) % 3) + 1; // 1, 2, 3 (Khi a = 1 là chuẩn đề gốc!)
            const twoA = (a === 1) ? '2x' : ((2 * a) + 'x');
            const mMin = Math.round((a + Math.sqrt(a * a + 1)) * 100) / 100;

            return {
                q: '[Toán 12] Cho hàm số ' + F.m('f(x) = x<sup>3</sup> &minus; 3x') + '. Đặt ' + F.m('g(x) = f(x<sup>2</sup> &minus; ' + twoA + ')') + '. Biết rằng hàm số ' + F.m('g(x)') + ' đồng biến trên khoảng ' + F.m('(m; +&infin;)') + '. Tìm giá trị nhỏ nhất của ' + F.m('m') + ' (làm tròn kết quả đến chữ số hàng phần trăm).',
                ans: String(mMin)
            };
        }
    });

    // ===================================================================
    // MODULE VD12-13: TOÁN THỰC TẾ TỐI ƯU ĐIỆN NĂNG XE ĐIỆN GIAO HÀNG (CÂU 2 PHẦN III)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_vd_toi_uu_xe_dien_giao_hang', {
        title: '⚡ Toán thực tế Tối ưu: Vận tốc xe điện giao hàng để điện năng tiêu thụ nhỏ nhất (Câu 2 Phần III)',
        shortLabel: '⚡ Tối ưu Xe điện (Cauchy)',
        keywords: /xe điện giao hàng|công suất tiêu thụ điện|điện năng tiêu thụ/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 2 Phần III:
            // Quãng đường S (km), vận tốc v (km/h) => thời gian t = S / v (giờ).
            // Công suất P(v) = A + v^2 / B (kW).
            // Điện năng E(v) = P(v) * (S / v) = S * (A / v + v / B) đạt GTNN khi A / v = v / B <=> v = sqrt(A * B)!
            // Khi A = 12, B = 300 => A * B = 3600 => v = 60 km/h (Chuẩn 100% đáp số Câu 2 Phần III!)
            const cases = [
                { distS: 120, A: 12, B: 300, vOpt: 60 }, // Chuẩn đề gốc: v = 60 km/h
                { distS: 150, A: 10, B: 250, vOpt: 50 }, // v = sqrt(2500) = 50 km/h
                { distS: 100, A: 16, B: 300, vOpt: 48, customA: 12, customB: 192 },
                { distS: 160, A: 15, B: 240, vOpt: 60 }, // v = sqrt(3600) = 60 km/h
                { distS: 140, A: 16, B: 400, vOpt: 80 }  // v = sqrt(6400) = 80 km/h
            ];
            const pk = cases[(seed + step) % cases.length];
            const aVal = pk.customA || pk.A;
            const bVal = pk.customB || pk.B;
            const vAns = Math.sqrt(aVal * bVal);

            return {
                q: '[Toán 12] Một xe điện giao hàng đi quãng đường bằng phẳng dài ' + F.m(pk.distS + ' km') + ' với vận tốc không đổi ' + F.m('v (km/h)') + '. Công suất tiêu thụ điện khi xe chạy ở vận tốc này được mô hình hóa bởi hàm số ' + F.m('P(v) = ' + aVal + ' + ' + F.frac('v<sup>2</sup>', bVal) + ' (kW)') + '. Bỏ qua điện năng lúc khởi hành và dừng xe. Để tổng điện năng tiêu thụ trên cả quãng đường (điện năng = công suất &times; thời gian) là nhỏ nhất, xe cần chạy với vận tốc ' + F.m('v') + ' bằng bao nhiêu ' + F.m('km/h') + '?',
                ans: String(vAns)
            };
        }
    });

    // ===================================================================
    // MODULE VD12-14: TOÁN THỰC TẾ CẮT 4 GÓC TẤM BÌA GẤP HỘP KHÔNG NẮP (CÂU 3 PHẦN III)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_vd_cat_bia_gap_hop_khong_nap', {
        title: '📦 Toán thực tế Hình học: Cắt 4 góc tấm bìa gấp hộp không nắp có thể tích lớn nhất (Kèm SVG)',
        shortLabel: '📦 Cắt bìa gấp hộp V_max',
        keywords: /tấm bìa hình chữ nhật|bốn góc bốn hình vuông|chiếc hộp không nắp|3,9/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 3 Phần III:
            // Tấm bìa kích thước A x B (cm), cắt 4 góc 4 hình vuông cạnh x (0 < x < B/2).
            // Thể tích V(x) = x*(A - 2x)*(B - 2x) = 4x^3 - 2(A+B)x^2 + A*B*x.
            // V'(x) = 12x^2 - 4(A+B)x + A*B = 0 <=> x = ((A + B) - sqrt(A^2 - A*B + B^2)) / 6!
            // Khi A = 30, B = 20 => x = (50 - 10*sqrt(7))/6 = (25 - 5*sqrt(7))/3 ≈ 3,9 cm (Chuẩn 100% Câu 3 Phần III!)
            const rectSizes = [
                { A: 30, B: 20, xRound: 3.9 }, // Chuẩn đề gốc: 3,9 cm
                { A: 16, B: 10, xRound: 2.0 }, // Nghiệm nguyên tuyệt đối: x = (26 - 14)/6 = 2 cm!
                { A: 24, B: 15, xRound: 3.0 }, // Nghiệm nguyên tuyệt đối: x = (39 - 21)/6 = 3 cm!
                { A: 32, B: 20, xRound: 4.0 }, // Nghiệm nguyên tuyệt đối: x = (52 - 28)/6 = 4 cm!
                { A: 40, B: 25, xRound: 5.0 }  // Nghiệm nguyên tuyệt đối: x = (65 - 35)/6 = 5 cm!
            ];
            const pk  = rectSizes[(seed + step) % rectSizes.length];
            const svg = G12_VD_UI.cardboardBox(pk.A, pk.B);

            return {
                q: '[Toán 12] Từ một tấm bìa hình chữ nhật có kích thước ' + F.m(pk.A + ' cm &times; ' + pk.B + ' cm') + ', người ta cắt bỏ ở bốn góc bốn hình vuông bằng nhau có cạnh ' + F.m('x (cm)') + ' rồi gấp theo các đường nét đứt (như hình vẽ) để tạo thành một chiếc hộp hình hộp chữ nhật không có nắp. Tìm ' + F.m('x') + ' (đơn vị: ' + F.m('cm') + ', làm tròn đến hàng phần mười nếu cần) để thể tích của chiếc hộp đạt giá trị lớn nhất.' + svg,
                ans: String(pk.xRound)
            };
        }
    });

    // ===================================================================
    // MODULE VD12-15: TOÁN THỰC TẾ KINH TẾ – TỐI ƯU LỢI NHUẬN CỬA HÀNG (CÂU 4 PHẦN III)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_vd_toi_uu_loi_nhuan_cua_hang', {
        title: '💰 Toán thực tế Kinh tế: Tìm lợi nhuận lớn nhất L(x) = x·p(x) − C(x) của cửa hàng (Câu 4 Phần III)',
        shortLabel: '💰 Tối ưu Lợi nhuận L(x)',
        keywords: /giá bán mỗi sản phẩm|p\(x\)=600-0,5x|tổng chi phí sản xuất|75/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 4 Phần III:
            // Giá bán 1 sản phẩm: p(x) = P0 - 0,5*x (nghìn đồng); Chi phí: C(x) = c1*x + C_fixed (nghìn đồng).
            // Hàm lợi nhuận: L(x) = x*p(x) - C(x) = -0,5*x^2 + (P0 - c1)*x - C_fixed (nghìn đồng).
            // Đạt GTLN tại x_opt = P0 - c1, với L_max = 0,5 * (P0 - c1)^2 - C_fixed (nghìn đồng).
            // Đổi sang triệu đồng (chia cho 1000): Khi P0 = 600, c1 = 100, C_fixed = 50000 => x_opt = 500, L_max = 75 triệu đồng!
            const cases = [
                { p0: 600, c1: 100, fixed: 50000, maxMil: 75 },  // Chuẩn đề gốc: 75 triệu đồng
                { p0: 500, c1: 100, fixed: 30000, maxMil: 50 },  // x_opt = 400 => 80000 - 30000 = 50 triệu đồng
                { p0: 700, c1: 100, fixed: 60000, maxMil: 120 }, // x_opt = 600 => 180000 - 60000 = 120 triệu đồng
                { p0: 550, c1: 150, fixed: 20000, maxMil: 60 }   // x_opt = 400 => 80000 - 20000 = 60 triệu đồng
            ];
            const pk = cases[(seed + step) % cases.length];

            return {
                q: '[Toán 12] Một cửa hàng dự kiến bán ' + F.m('x') + ' sản phẩm mỗi tháng (' + F.m('0 &le; x &le; 800') + '). Giá bán mỗi sản phẩm là ' + F.m('p(x) = ' + pk.p0 + ' &minus; 0,5x') + ' (nghìn đồng) và tổng chi phí sản xuất mỗi tháng là ' + F.m('C(x) = ' + pk.c1 + 'x + ' + pk.fixed) + ' (nghìn đồng). Lợi nhuận lớn nhất mà cửa hàng có thể đạt được trong một tháng là bao nhiêu triệu đồng?',
                ans: String(pk.maxMil)
            };
        }
    });

    // ===================================================================
    // MODULE VD12-16: TIỆM CẬN XIÊN CỦA HÀM CĂN THỨC BẬC BA y = ∛(a³x³ + bx² + cx + d) (CÂU 6 PHẦN III)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_vd_tiem_can_xien_can_bac_ba', {
        title: '🎯 Tiệm cận xiên Vận dụng cao: Hàm căn thức bậc ba y = ∛(8x³ + 2x + 1) (Câu 6 Phần III)',
        shortLabel: '🎯 TC Xiên ∛(8x³ + 2x + 1)',
        keywords: /tiệm cận xiên của đồ thị hàm số|8x\^3\+2x\+1|4052/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 6 Phần III:
            // Hàm số y = ∛(k^3 * x^3 + 3*k^2*b * x^2 + m*x + n) có đường tiệm cận xiên là y = a*x + b với a = k!
            // Khi hệ số của x^2 bằng 0 (như đề gốc y = ∛(8x^3 + 2x + 1)): a = ∛8 = 2 và b = 0 => T = 2026a + 2027b = 4052!
            const k = ((seed + step) % 3) + 2; // 2, 3, 4
            const kCube = k * k * k;           // 8, 27, 64

            if (step % 2 === 0) {
                // Dạng chuẩn Câu 6 Phần III (khuyết x^2 nên b = 0): T = 2026*a + 2027*b = 2026 * k
                const mCoeff = ((step % 5) + 2);
                const ansT   = 2026 * k;
                return {
                    q: '[Toán 12] Đường tiệm cận xiên của đồ thị hàm số ' + F.m('y = <sup>3</sup>' + F.sqrt(kCube + 'x<sup>3</sup> + ' + mCoeff + 'x + 1')) + ' có phương trình là ' + F.m('y = ax + b (a &ne; 0)') + '. Giá trị của biểu thức ' + F.m('T = 2026a + 2027b') + ' bằng bao nhiêu?',
                    ans: String(ansT)
                };
            } else {
                // Dạng mở rộng có hệ số x^2: y = ∛(k^3*x^3 + 3*k^2*b*x^2 + 5x + 1) => TCX là y = k*x + b
                const bVal = ((step % 3) + 1); // 1, 2, 3
                const x2Coeff = 3 * k * k * bVal;
                return {
                    q: '[Toán 12] Đường tiệm cận xiên của đồ thị hàm số ' + F.m('y = <sup>3</sup>' + F.sqrt(kCube + 'x<sup>3</sup> + ' + x2Coeff + 'x<sup>2</sup> + 5x + 1')) + ' có phương trình là ' + F.m('y = ax + b') + '. Tính tổng ' + F.m('T = a + b') + '.',
                    ans: String(k + bVal)
                };
            }
        }
    });

    if (typeof window.refreshAdminTopicDropdown === 'function') {
        window.refreshAdminTopicDropdown();
    }
})();
//==================
(function() {
    if (typeof window.registerMathTopicGenerator !== 'function') return;
    const F = window.IMATHS_FMT;

    // ===================================================================
    // BỘ HÀM VẼ ĐỒ THỊ KHOA HỌC SVG & BẢNG BIẾN THIÊN - THPT VIỆT NAM BA LAN
    // ===================================================================
    const G12_VNBL_UI = {
        // 1. Đồ thị đạo hàm f'(x) cắt trục hoành tại 3 điểm x1, x2, x3 (Câu 1 Phần I)
        derivGraph: function(x1, x2, x3) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 138" width="235" height="132">' +
                '<line x1="18" y1="74" x2="228" y2="74" stroke="#94a3b8" stroke-width="1.5"/><polygon points="232,74 224,70 224,78" fill="#94a3b8"/>' +
                '<line x1="78" y1="128" x2="78" y2="12" stroke="#94a3b8" stroke-width="1.5"/><polygon points="78,8 74,16 82,16" fill="#94a3b8"/>' +
                '<path d="M 32 124 C 46 28, 68 28, 108 74 C 138 112, 162 112, 188 74 C 198 56, 206 34, 214 16" fill="none" stroke="#38bdf8" stroke-width="2.4"/>' +
                '<circle cx="48" cy="74" r="3.4" fill="#fde047"/>' +
                '<circle cx="108" cy="74" r="3.4" fill="#fde047"/>' +
                '<circle cx="188" cy="74" r="3.4" fill="#4ade80"/>' +
                '<text x="38" y="90" fill="#fde047" font-size="10.5" font-weight="bold">' + x1 + '</text>' +
                '<text x="102" y="90" fill="#fde047" font-size="10.5" font-weight="bold">' + x2 + '</text>' +
                '<text x="192" y="90" fill="#4ade80" font-size="10.5" font-weight="bold">' + x3 + '</text>' +
                '<text x="66" y="88" fill="#cbd5e1" font-size="10">O</text>' +
                '<text x="205" y="34" fill="#fde047" font-size="11" font-weight="bold" font-style="italic">f\'(x)</text>' +
                '<text x="220" y="88" fill="#cbd5e1" font-size="11" font-style="italic">x</text>' +
                '<text x="85" y="18" fill="#cbd5e1" font-size="11" font-style="italic">y</text>' +
            '</svg></div>';
        },

        // 2. Đồ thị hàm phân thức bậc 2/bậc 1 có TCĐ, TCX & Cây cầu ngắn nhất qua sông (Câu 6 Phần I, Câu 4 & 6 Phần III)
        slantHyperbola: function(xAsym, slantLbl, showBridge) {
            const bridgeLine = showBridge
                ? '<line x1="92" y1="84" x2="144" y2="54" stroke="#fde047" stroke-width="2.4"/><circle cx="92" cy="84" r="3.5" fill="#fde047"/><circle cx="144" cy="54" r="3.5" fill="#fde047"/><text x="76" y="84" fill="#fde047" font-size="10" font-weight="bold">A</text><text x="150" y="58" fill="#fde047" font-size="10" font-weight="bold">B</text>'
                : '';
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 142" width="235" height="135">' +
                '<line x1="18" y1="92" x2="228" y2="92" stroke="#94a3b8" stroke-width="1.4"/><polygon points="232,92 224,88 224,96" fill="#94a3b8"/>' +
                '<line x1="88" y1="132" x2="88" y2="12" stroke="#94a3b8" stroke-width="1.4"/><polygon points="88,8 84,16 92,16" fill="#94a3b8"/>' +
                '<line x1="118" y1="12" x2="118" y2="132" stroke="#f87171" stroke-width="1.4" stroke-dasharray="4 3"/>' +
                '<line x1="36" y1="126" x2="196" y2="16" stroke="#4ade80" stroke-width="1.4" stroke-dasharray="4 3"/>' +
                '<path d="M 38 128 Q 92 80 110 130" fill="none" stroke="#38bdf8" stroke-width="2.4"/>' +
                '<path d="M 126 14 Q 142 64 198 20" fill="none" stroke="#38bdf8" stroke-width="2.4"/>' +
                bridgeLine +
                '<text x="122" y="106" fill="#f87171" font-size="10" font-weight="bold">x=' + xAsym + '</text>' +
                '<text x="168" y="24" fill="#4ade80" font-size="10" font-weight="bold">' + slantLbl + '</text>' +
                '<text x="75" y="105" fill="#cbd5e1" font-size="10">O</text>' +
            '</svg></div>';
        },

        // 3. Hình Hồ nước nhân tạo trong công viên & Đường thẳng d: y = -x + C (Câu 3 Phần II)
        parkLakeMap: function(xMax, lineC) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 250 142" width="235" height="135">' +
                '<line x1="24" y1="118" x2="234" y2="118" stroke="#94a3b8" stroke-width="1.5"/><polygon points="238,118 230,114 230,122" fill="#94a3b8"/>' +
                '<line x1="36" y1="130" x2="36" y2="12" stroke="#94a3b8" stroke-width="1.5"/><polygon points="36,8 32,16 40,16" fill="#94a3b8"/>' +
                '<path d="M 36 118 L 36 74 Q 52 84 68 68 Q 96 34 114 42 Q 134 52 152 118 Z" fill="rgba(56,189,248,0.22)" stroke="#38bdf8" stroke-width="2.2"/>' +
                '<line x1="92" y1="14" x2="216" y2="118" stroke="#fde047" stroke-width="2"/>' +
                '<circle cx="110" cy="40" r="3.4" fill="#4ade80"/>' +
                '<text x="86" y="88" fill="#38bdf8" font-size="10.5" font-weight="bold">HỒ NƯỚC</text>' +
                '<text x="148" y="52" fill="#fde047" font-size="10" font-weight="bold">d: y=&minus;x+' + lineC + '</text>' +
                '<text x="104" y="33" fill="#4ade80" font-size="10" font-weight="bold">M</text>' +
                '<text x="23" y="130" fill="#cbd5e1" font-size="10">O</text>' +
                '<text x="148" y="131" fill="#fde047" font-size="10" font-weight="bold">' + xMax + '</text>' +
                '<text x="210" y="131" fill="#fde047" font-size="10" font-weight="bold">' + lineC + '</text>' +
            '</svg></div>';
        },

        // 4. Hình Tam giác đều ABC cạnh a cắt hình chữ nhật MNPQ cuộn thành hình trụ (Câu 3 Phần III)
        equilateralRectCut: function(sideA) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 140" width="235" height="134">' +
                '<polygon points="122,16 44,120 200,120" fill="rgba(56,189,248,0.1)" stroke="#38bdf8" stroke-width="2"/>' +
                '<rect x="78" y="62" width="88" height="58" fill="rgba(250,204,21,0.22)" stroke="#fde047" stroke-width="1.8"/>' +
                '<circle cx="122" cy="16" r="3" fill="#38bdf8"/><circle cx="44" cy="120" r="3" fill="#38bdf8"/><circle cx="200" cy="120" r="3" fill="#38bdf8"/>' +
                '<circle cx="78" cy="62" r="3" fill="#fde047"/><circle cx="166" cy="62" r="3" fill="#fde047"/>' +
                '<circle cx="78" cy="120" r="3" fill="#4ade80"/><circle cx="166" cy="120" r="3" fill="#4ade80"/>' +
                '<text x="118" y="12" fill="#38bdf8" font-size="11" font-weight="bold">A</text>' +
                '<text x="30" y="124" fill="#38bdf8" font-size="11" font-weight="bold">B</text>' +
                '<text x="206" y="124" fill="#38bdf8" font-size="11" font-weight="bold">C</text>' +
                '<text x="63" y="62" fill="#fde047" font-size="10.5" font-weight="bold">Q</text>' +
                '<text x="172" y="62" fill="#fde047" font-size="10.5" font-weight="bold">P</text>' +
                '<text x="73" y="133" fill="#4ade80" font-size="10.5" font-weight="bold">M</text>' +
                '<text x="162" y="133" fill="#4ade80" font-size="10.5" font-weight="bold">N</text>' +
                '<text x="122" y="95" fill="#fde047" font-size="10" font-weight="bold" text-anchor="middle">Cạnh ' + sideA + ' cm</text>' +
            '</svg></div>';
        },

        // 5. Bảng xét dấu f'(x) (Câu 5 Phần I)
        signTable4: function(x1, x2, x3, x4, signsArr) {
            return '<div style="overflow-x:auto;margin:8px 0 4px;"><table style="width:100%;border-collapse:collapse;background:#040b16;font-size:11.5px;border:1.5px solid #334155;text-align:center;color:#f8fafc;">' +
                '<tr style="border-bottom:1px solid #334155;"><td style="padding:5px 8px;border-right:1px solid #334155;color:#fde047;font-weight:900;">x</td><td>&minus;&infin;</td><td></td><td style="color:#fde047;font-weight:800;">' + x1 + '</td><td></td><td style="color:#fde047;font-weight:800;">' + x2 + '</td><td></td><td style="color:#fde047;font-weight:800;">' + x3 + '</td><td></td><td style="color:#fde047;font-weight:800;">' + x4 + '</td><td></td><td>+&infin;</td></tr>' +
                '<tr><td style="padding:5px 8px;border-right:1px solid #334155;color:#38bdf8;font-weight:900;">f\'(x)</td><td></td><td style="color:#4ade80;font-weight:900;">' + signsArr[0] + '</td><td>0</td><td style="color:#4ade80;font-weight:900;">' + signsArr[1] + '</td><td>0</td><td style="color:#4ade80;font-weight:900;">' + signsArr[2] + '</td><td>0</td><td style="color:#4ade80;font-weight:900;">' + signsArr[3] + '</td><td>0</td><td style="color:#4ade80;font-weight:900;">' + signsArr[4] + '</td><td></td></tr>' +
            '</table></div>';
        }
    };

    // MODULE BL12-01: XÉT DẤU ĐỒ THỊ ĐẠO HÀM f'(x) & BẢNG XÉT DẤU f'(x) (CÂU 1, 5 PHẦN I)
    window.registerMathTopicGenerator('12', 'g12_bl_do_thi_bang_xet_dau_f_phay', {
        title: '📉 Đạo hàm f\'(x): Khoảng nghịch biến từ đồ thị f\'(x) & Đếm cực đại từ bảng xét dấu (Câu 1, 5 Phần I)',
        shortLabel: '📉 Đồ thị & BXD f\'(x)',
        keywords: /f'\(x\) có đồ thị|bảng xét dấu f'\(x\)|số điểm cực đại/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Chuẩn Câu 1 Phần I: Đồ thị của đạo hàm f'(x) cắt Ox tại x1 < x2 < x3.
                // Trên khoảng (x2; x3), đồ thị f'(x) nằm dưới trục hoành (f'(x) < 0) nên f(x) nghịch biến trên (x2; x3)!
                const x1 = -(((seed + step) % 3) + 1); // -1, -2, -3 (-1 ở đề gốc)
                const x2 = ((step % 2) + 1);           // 1, 2       (1 ở đề gốc)
                const x3 = x2 + ((seed * 2 + step) % 4) + 3; // 4..8 (4 ở đề gốc)
                const svg = G12_VNBL_UI.derivGraph(x1, x2, x3);
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' xác định, có đạo hàm trên ' + F.m('R') + ' và đạo hàm ' + F.m('f\'(x)') + ' có đồ thị như hình vẽ bên dưới. Biết trên đoạn ' + F.m('[' + x1 + '; ' + x3 + ']') + ', hàm số ' + F.m('y = f(x)') + ' nghịch biến trên khoảng ' + F.m('(a; b)') + ' có độ dài lớn nhất. Tính tổng ' + F.m('T = a + b') + '.' + svg,
                    ans: String(x2 + x3)
                };
            } else {
                // Chuẩn Câu 5 Phần I: Bảng xét dấu f'(x) qua 4 điểm 0, 1, 2, 4 với dấu [-, +, -, +, +] (không đổi dấu qua x=4)
                const signPatterns = [
                    { signs: ['&minus;', '+', '&minus;', '+', '+'], cd: 1, ct: 2 }, // Chuẩn Câu 5 Phần I: 1 cực đại
                    { signs: ['+', '&minus;', '+', '&minus;', '&minus;'], cd: 2, ct: 1 },
                    { signs: ['+', '&minus;', '&minus;', '+', '&minus;'], cd: 2, ct: 1 }
                ];
                const pk  = signPatterns[(seed + step) % signPatterns.length];
                const tbl = G12_VNBL_UI.signTable4(0, 1, 2, 4, pk.signs);
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' liên tục trên ' + F.m('R') + ' và có bảng xét dấu của đạo hàm ' + F.m('f\'(x)') + ' như sau:' + tbl + 'Số điểm cực đại của hàm số ' + F.m('y = f(x)') + ' là bao nhiêu?',
                    ans: String(pk.cd)
                };
            }
        }
    });

    // MODULE BL12-02: ĐƯỜNG THẲNG ĐI QUA ĐIỂM CỰC ĐẠI & ĐỒNG BIẾN TRÊN R (CÂU 2, 3, 8, 12 PHẦN I)
    window.registerMathTopicGenerator('12', 'g12_bl_duong_thang_qua_cuc_dai', {
        title: '📈 Đồ thị Bậc ba: Đường thẳng qua điểm cực đại & GTNN, GTLN trên [-2; 2] (Câu 2, 3, 8, 12 Phần I)',
        shortLabel: '📈 Điểm cực đại & Max–Min',
        keywords: /đi qua điểm cực đại|luôn đồng biến trên r|trên đoạn \[-2; 2\]/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Chuẩn Câu 3 Phần I: Đồ thị hàm bậc ba có điểm cực đại M(1; yCD). Đường thẳng y = x + b đi qua M => b = yCD - 1
                const xCD = ((seed + step) % 3) + 1;       // 1, 2, 3 (1 ở đề gốc)
                const yCD = xCD + ((step % 4) + 2);        // 3..8    (3 ở đề gốc => b = 2)
                const bVal = yCD - xCD;
                return {
                    q: '[Toán 12] Cho hàm số bậc ba ' + F.m('y = f(x)') + ' có điểm cực tiểu là ' + F.m('(&minus;1; &minus;1)') + ' và điểm cực đại là ' + F.m('M(' + xCD + '; ' + yCD + ')') + '. Biết đường thẳng ' + F.m('y = x + b') + ' đi qua điểm cực đại của đồ thị hàm số đã cho, hãy tìm giá trị của ' + F.m('b') + '.',
                    ans: String(bVal)
                };
            } else {
                // Chuẩn Câu 12 Phần I: Cho hàm số f(x) = x^3 - 3x - c trên đoạn [-2; 2]
                // Đạt CĐ tại x = -1, f(2) = f(-1) = 2 - c (GTLN M); đạt CT tại x = 1, f(-2) = f(1) = -2 - c (GTNN m).
                // Khi c = 3: m = -5, M = -1 (Chuẩn 100% Câu 12 Phần I!)
                const c = ((seed + step) % 5) + 2; // 2..6 (3 ở đề gốc)
                const minM = -2 - c;
                const maxM = 2 - c;
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x) = x<sup>3</sup> &minus; 3x &minus; ' + c) + ' liên tục trên đoạn ' + F.m('[&minus;2; 2]') + '. Gọi ' + F.m('m') + ' và ' + F.m('M') + ' lần lượt là giá trị nhỏ nhất và giá trị lớn nhất của hàm số trên đoạn ' + F.m('[&minus;2; 2]') + '. Tính tổng ' + F.m('T = m + M') + '.',
                    ans: String(minM + maxM)
                };
            }
        }
    });

    // MODULE BL12-03: TIỆM CẬN NGANG, TIỆM CẬN ĐỨNG & GIAO ĐIỂM TRỤC TUNG Oy (CÂU 4, 7, 11 PHẦN I)
    window.registerMathTopicGenerator('12', 'g12_bl_tiem_can_giao_truc_oy', {
        title: '📏 Hàm phân thức cơ bản: Tiệm cận ngang y = (ax−1)/(1−x) & Giao điểm trục Oy (Câu 4, 7, 11 Phần I)',
        shortLabel: '📏 TCN & Giao điểm Oy',
        keywords: /2x-1\/1-x|cắt trục oy tại điểm|tiệm cận đứng của đồ thị/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Chuẩn Câu 4 Phần I: Tiệm cận ngang của đồ thị hàm số y = (a*x - 1)/(1 - x) là y = -a (chú ý mẫu số là 1 - x!)
                const a = ((seed + step) % 7) + 2; // 2..8 (2 ở đề gốc => y = -2!)
                return {
                    q: '[Toán 12] Đường tiệm cận ngang của đồ thị hàm số ' + F.m('y = ' + F.frac(a + 'x &minus; 1', '1 &minus; x')) + ' là đường thẳng ' + F.m('y = y<sub>0</sub>') + '. Tìm giá trị của ' + F.m('y<sub>0</sub>') + '.',
                    ans: String(-a)
                };
            } else {
                // Chuẩn Câu 11 Phần I: Đồ thị hàm số y = (a*x - b)/(x + 1) cắt trục Oy (x = 0) tại điểm có tung độ y = -b
                const a = ((seed + step) % 5) + 2;
                const b = ((step % 6) + 3); // 3 ở đề gốc => (0; -3)
                return {
                    q: '[Toán 12] Đồ thị của hàm số ' + F.m('y = ' + F.frac(a + 'x &minus; ' + b, 'x + 1')) + ' cắt trục tung ' + F.m('Oy') + ' tại điểm có tọa độ ' + F.m('(x<sub>0</sub>; y<sub>0</sub>)') + '. Tính tổng ' + F.m('T = x<sub>0</sub> + y<sub>0</sub>') + '.',
                    ans: String(-b)
                };
            }
        }
    });

    // MODULE BL12-04: TIỆM CẬN XIÊN & NHẬN DIỆN ĐỒ THỊ HÀM BẬC 2 / BẬC 1 (CÂU 6, 10 PHẦN I)
    window.registerMathTopicGenerator('12', 'g12_bl_tiem_can_xien_a_3b', {
        title: '📐 Tiệm cận xiên: Tính a + 3b từ TCX y = ax + b & Nhận diện đồ thị bậc 2/bậc 1 (Câu 6, 10 Phần I)',
        shortLabel: '📐 Tiệm cận xiên a + 3b',
        keywords: /a\+3b|x\^2-2x\+2|x\^2-x\+1/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 10 Phần I:
            // Cho hàm số y = (a*x^2 + m*x + c) / (x - 1) = a*x + (a + m) + R/(x - 1) => TCX là y = a*x + b với b = a + m.
            // Khi a = 1, m = -2: y = (x^2 - 2x + 2)/(x - 1) = x - 1 + 1/(x - 1) => a = 1, b = -1 => a + 3b = -2 (Chuẩn 100% Câu 10!)
            const a = ((step % 2) + 1);                // 1 hoặc 2
            const b = -(((seed + step) % 4) + 1);      // -1, -2, -3, -4 (-1 ở đề gốc)
            const mCoeff = b - a;                      // Để phép chia cho (x - 1) có thương là a*x + b
            const aStr = (a === 1) ? '' : String(a);
            const mStr = (mCoeff >= 0) ? ('+ ' + mCoeff + 'x') : ('&minus; ' + Math.abs(mCoeff) + 'x');
            const ansVal = a + (3 * b);
            const svg = G12_VNBL_UI.slantHyperbola(1, 'y=' + aStr + 'x' + b, false);

            return {
                q: '[Toán 12] Đồ thị hàm số ' + F.m('y = ' + F.frac(aStr + 'x<sup>2</sup> ' + mStr + ' + 2', 'x &minus; 1')) + ' (có dạng như hình vẽ) nhận đường thẳng ' + F.m('y = ax + b') + ' làm đường tiệm cận xiên. Giá trị của biểu thức ' + F.m('T = a + 3b') + ' bằng bao nhiêu?' + svg,
                ans: String(ansVal)
            };
        }
    });

    // MODULE BL12-05: VẬT LÍ PHÓNG THẲNG ĐỨNG ĐẠT ĐỘ CAO LỚN NHẤT (CÂU 9 PHẦN I)
    window.registerMathTopicGenerator('12', 'g12_bl_vat_phong_thang_dung', {
        title: '🚀 Toán thực tế Vật lí: Thời gian vật phóng thẳng đứng đạt độ cao lớn nhất h(t) (Câu 9 Phần I)',
        shortLabel: '🚀 Vật phóng thẳng đứng',
        keywords: /phóng thẳng đứng|24,5t - 4,9t\^2|độ cao lớn nhất/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 9 Phần I:
            // h(t) = h0 + v0*t - 4,9*t^2. Đạo hàm h'(t) = v0 - 9,8*t = 0 <=> t = v0 / 9,8 (giây).
            // Khi v0 = 24,5 m/s => t = 24,5 / 9,8 = 2,5 giây (Chuẩn 100% Câu 9 Phần I!)
            const tPeakList = [1.5, 2, 2.5, 3, 3.5, 4];
            const tPeak = tPeakList[(seed + step) % tPeakList.length];
            const v0    = Math.round(9.8 * tPeak * 10) / 10; // 14.7, 19.6, 24.5, 29.4, 34.3, 39.2
            const h0    = ((step % 4) + 2);

            return {
                q: '[Toán 12] Một vật được phóng thẳng đứng lên trên từ độ cao ' + F.m(h0 + ' m') + ' với vận tốc ban đầu là ' + F.m(v0 + ' m/s') + '. Khi bỏ qua sức cản của không khí, độ cao ' + F.m('h') + ' (mét) của vật sau ' + F.m('t') + ' (giây) được cho bởi công thức ' + F.m('h(t) = ' + h0 + ' + ' + v0 + 't &minus; 4,9t<sup>2</sup>') + '. Hỏi sau bao nhiêu giây kể từ lúc phóng thì vật đạt độ cao lớn nhất?',
                ans: String(tPeak)
            };
        }
    });

    // MODULE BL12-06: XÉT DẤU HỆ SỐ a, b, c & TIẾP TUYẾN HÀM PHÂN THỨC (CÂU 1 PHẦN II)
    window.registerMathTopicGenerator('12', 'g12_bl_xet_dau_abc_tiep_tuyen', {
        title: '📊 Đồ thị y = (ax+b)/(x+c): Xác định hệ số a, b, c & Tiếp tuyến tại giao điểm Ox (Câu 1 Phần II)',
        shortLabel: '📊 Hệ số a, b, c & Tiếp tuyến',
        keywords: /trong ba số a, b, c|tiếp tuyến của đồ thị hàm số tại giao điểm/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 1 Phần II:
            // Cho y = (a*x + b)/(x + c) có TCĐ x = xAsym (> 0 => c = -xAsym < 0), TCN y = a (< 0), cắt Ox tại (xInt; 0) với xInt > 0 => b = -a*xInt > 0.
            // Khi xAsym = 1, a = -1, xInt = 2 => c = -1, a = -1, b = 2 (có đúng 2 số âm trong a, b, c!).
            const xAsym = ((seed + step) % 3) + 1;     // 1, 2, 3 (1 ở đề gốc)
            const aVal  = -(((step % 2) + 1));         // -1, -2  (-1 ở đề gốc)
            const cVal  = -xAsym;                      // -1, -2, -3
            const xInt  = xAsym + 1;                   // 2, 3, 4 (2 ở đề gốc)
            const bVal  = -aVal * xInt;                // Dương
            const yInt  = bVal / cVal;                 // Âm
            const svg   = G12_VNBL_UI.rationalGraph ? '' : '';

            if (step % 2 === 0) {
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = ' + F.frac('ax + b', 'x + c')) + ' có đồ thị nhận đường thẳng ' + F.m('x = ' + xAsym) + ' làm tiệm cận đứng, đường thẳng ' + F.m('y = ' + aVal) + ' làm tiệm cận ngang và đi qua điểm ' + F.m('(' + xInt + '; 0)') + '. Tính tổng ' + F.m('S = a + b + c') + '.',
                    ans: String(aVal + bVal + cVal)
                };
            } else {
                // Ý d Câu 1 Phần II: Phương trình tiếp tuyến tại giao điểm A(2; 0) của y = (-x + 2)/(x - 1) là y = -x + 2
                // Với xInt = xAsym + 1 => xInt - xAsym = 1 => y'(xInt) = (a*c - b)/1^2 = a*c - b.
                const slopeK = (aVal * cVal) - bVal;
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = ' + F.frac(aVal + 'x + ' + bVal, 'x &minus; ' + xAsym)) + ' có đồ thị ' + F.m('(C)') + '. Tính hệ số góc ' + F.m('k') + ' của tiếp tuyến với đồ thị ' + F.m('(C)') + ' tại giao điểm của ' + F.m('(C)') + ' với trục hoành ' + F.m('Ox') + '.',
                    ans: String(slopeK)
                };
            }
        }
    });

    // MODULE BL12-07: TOÁN THỰC TẾ XÂY BỂ CHỨA NƯỚC KHÔNG NẮP CHI PHÍ NHỎ NHẤT (CÂU 2 PHẦN II)
    window.registerMathTopicGenerator('12', 'g12_bl_xay_be_nuoc_khong_nap', {
        title: '🏗️ Toán thực tế Tối ưu: Xây bể chứa nước không nắp đáy dài gấp đôi rộng (Câu 2 Phần II)',
        shortLabel: '🏗️ Xây bể nước không nắp',
        keywords: /ông nam|bể chứa nước|chiều dài gấp hai lần chiều rộng|36m\^3/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 2 Phần II:
            // Thể tích bể V = 2x * x * h = 2*x^2*h => h = V / (2*x^2).
            // Bể không nắp => Tổng diện tích mặt cần xây: S(x) = 2*x^2 + 6*x*h = 2*x^2 + 3*V / x.
            // S'(x) = 4x - 3V / x^2 = 0 <=> x^3 = 3V / 4.
            // Chọn V = 4 * k^3 / 3 (khi k = 3 => V = 36 m^3 chuẩn đề gốc!) => x_opt = k, chiều cao tối ưu h = 2k / 3, S_min = 6 * k^2!
            const cases = [
                { volV: 36,  xOpt: 3, hOpt: 2, sMin: 54 },  // Chuẩn 100% Câu 2 Phần II: V = 36, x = 3m, h = 2m, S_min = 54 m^2
                { volV: 288, xOpt: 6, hOpt: 4, sMin: 216 }, // k = 6: V = 288, x = 6m, h = 4m, S_min = 216 m^2
                { volV: 972, xOpt: 9, hOpt: 6, sMin: 486 }  // k = 9: V = 972, x = 9m, h = 6m
            ];
            const pk = cases[(seed + step) % cases.length];

            if (step % 2 === 0) {
                return {
                    q: '[Toán 12] Ông Nam cần xây dựng một bể chứa nước dạng hình hộp chữ nhật không có nắp đậy có thể tích là ' + F.m(pk.volV + ' m<sup>3</sup>') + '. Đáy bể có chiều dài gấp hai lần chiều rộng. Biết chi phí vật liệu xây dựng mỗi mét vuông diện tích bề mặt (gồm đáy và 4 mặt xung quanh) là như nhau. Để tổng chi phí vật liệu xây dựng là nhỏ nhất thì chiều cao ' + F.m('h') + ' của bể phải bằng bao nhiêu mét?',
                    ans: String(pk.hOpt)
                };
            } else {
                return {
                    q: '[Toán 12] Ông Nam cần xây dựng một bể chứa nước dạng hình hộp chữ nhật không có nắp đậy có thể tích là ' + F.m(pk.volV + ' m<sup>3</sup>') + '. Đáy bể có chiều dài gấp hai lần chiều rộng (gọi chiều rộng là ' + F.m('x (m)') + ' thì tổng diện tích các mặt cần xây là ' + F.m('S(x) = 2x<sup>2</sup> + ' + F.frac(3 * pk.volV, 'x')) + '). Tìm giá trị nhỏ nhất của tổng diện tích các mặt cần xây (đơn vị: ' + F.m('m<sup>2</sup>') + ').',
                    ans: String(pk.sMin)
                };
            }
        }
    });

    // MODULE BL12-08: TOÁN THỰC TẾ HỒ NƯỚC CÔNG VIÊN & BẾN THUYỀN ĐẠP NƯỚC (CÂU 3 PHẦN II)
    window.registerMathTopicGenerator('12', 'g12_bl_ho_nuoc_cong_vien_ben_thuyen', {
        title: '🚣 Toán thực tế Đồ thị: Hồ nước nhân tạo trong công viên & Bến thuyền đạp nước (Kèm SVG)',
        shortLabel: '🚣 Hồ nước & Bến thuyền',
        keywords: /hồ nước nhân tạo|bến thuyền đạp nước|-x\^3\+9x\^2-15x\+56|810/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 3 Phần II:
            // Bờ hồ là đồ thị y = f(x) = 1/10 * (-x^3 + 9x^2 - 15x + C0) với 0 <= x <= 8, mỗi đơn vị trục tọa độ = 100 m.
            // f'(x) = 1/10 * (-3x^2 + 18x - 15) = 0 <=> x = 1 (cực tiểu) hoặc x = 5 (cực đại).
            // Khoảng cách thẳng đứng lớn nhất từ trục Ox đến bờ hồ đạt tại x = 5: f(5) = (25 + C0) / 10 (đơn vị) = 10 * (25 + C0) (mét).
            // Khi C0 = 56: f(5) = 8,1 đơn vị = 810 m (Chuẩn 100% ý c Câu 3 Phần II!)
            const svg = G12_VNBL_UI.parkLakeMap(8, 15);

            if (step % 2 === 0) {
                const c0List = [56, 65, 75]; // 56 là chuẩn đề gốc (810m)
                const c0 = c0List[(seed + step) % c0List.length];
                const maxMeters = 10 * (25 + c0);
                return {
                    q: '[Toán 12] Một hồ nước nhân tạo trong công viên được giới hạn bởi các trục tọa độ và đường bờ hồ là một phần đồ thị hàm số bậc ba ' + F.m('y = f(x) = ' + F.frac('1', '10') + '(&minus;x<sup>3</sup> + 9x<sup>2</sup> &minus; 15x + ' + c0 + ')') + ' với ' + F.m('0 &le; x &le; 8') + ', đơn vị đo trên mỗi trục tọa độ là ' + F.m('100 m') + ' (như hình vẽ). Tại những điểm trên đường đi dạo ven hồ dọc theo trục ' + F.m('Ox') + ', khoảng cách lớn nhất theo phương thẳng đứng đến bờ hồ đối diện trên thực tế bằng bao nhiêu mét?' + svg,
                    ans: String(maxMeters)
                };
            } else {
                // Ý d Câu 3 Phần II: Khoảng cách ngắn nhất từ điểm M trên bờ hồ f(x) = 1/10*(-x^3 + 9x^2 - 15x + 56) đến đường thẳng d: y = -x + 15
                // Đạt tại x = (9 + sqrt(66))/3 ≈ 5,71 => d_min = 100 * g(x2) / sqrt(2) ≈ 108 m (làm tròn đến hàng đơn vị).
                return {
                    q: '[Toán 12] Một hồ nước nhân tạo trong công viên có đường bờ hồ là đồ thị hàm số ' + F.m('y = f(x) = ' + F.frac('1', '10') + '(&minus;x<sup>3</sup> + 9x<sup>2</sup> &minus; 15x + 56)') + ' với ' + F.m('0 &le; x &le; 8') + ' (mỗi đơn vị trên trục tọa độ ứng với ' + F.m('100 m') + '). Trong công viên có con đường thẳng ' + F.m('d: y = &minus;x + 15') + ' (như hình vẽ). Người ta xây một bến thuyền tại điểm ' + F.m('M') + ' trên bờ hồ sao cho khoảng cách từ ' + F.m('M') + ' đến đường thẳng ' + F.m('d') + ' là ngắn nhất. Tính khoảng cách thực tế ngắn nhất đó (đơn vị: mét, làm tròn đến hàng đơn vị).' + svg,
                    ans: '108'
                };
            }
        }
    });

    // MODULE BL12-09: TÍCH KHOẢNG CÁCH TỪ M ĐẾN TIỆM CẬN ĐỨNG VÀ TIỆM CẬN XIÊN (CÂU 4 PHẦN II)
    window.registerMathTopicGenerator('12', 'g12_bl_tich_khoang_cach_2_tiem_can', {
        title: '📏 Tiệm cận xiên: Tích khoảng cách d₁·d₂ từ điểm M thuộc (C) đến 2 đường tiệm cận (Câu 4 Phần II)',
        shortLabel: '📏 Tích khoảng cách d₁·d₂',
        keywords: /tích khoảng cách từ m đến tiệm cận đứng và tiệm cận xiên|x\^2\+2x-3/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 4 Phần II:
            // Cho hàm số y = x + 1 - R / (x + 1) có TCĐ: x + 1 = 0 và TCX: x - y + 1 = 0.
            // Với mọi điểm M(x0; y0) thuộc (C): d1 = |x0 + 1| và d2 = |R / (x0 + 1)| / sqrt(2).
            // Suy ra tích hai khoảng cách luôn không đổi: P = d1 * d2 = |R| / sqrt(2)!
            // Khi R = 4 (y = (x^2 + 2x - 3)/(x + 1)): d1 * d2 = 4 / sqrt(2) = 2*sqrt(2) => Bình phương của tích bằng 8!
            const k = ((seed + step) % 5) + 2; // 2..6
            const R = 2 * k;                   // 4, 6, 8, 10, 12 (4 ở đề gốc)
            const cConst = 1 - R;              // Khi R = 4 => x^2 + 2x - 3
            const cStr = (cConst >= 0) ? ('+ ' + cConst) : ('&minus; ' + Math.abs(cConst));
            // d1 * d2 = k * sqrt(2) => (d1 * d2)^2 = 2 * k^2 (Nguyên tuyệt đối!)
            const ansSq = 2 * k * k;

            return {
                q: '[Toán 12] Cho hàm số ' + F.m('y = ' + F.frac('x<sup>2</sup> + 2x ' + cStr, 'x + 1')) + ' có đồ thị ' + F.m('(C)') + '. Gọi ' + F.m('M') + ' là một điểm bất kì thuộc đồ thị ' + F.m('(C)') + ', ' + F.m('d<sub>1</sub>') + ' và ' + F.m('d<sub>2</sub>') + ' lần lượt là khoảng cách từ ' + F.m('M') + ' đến đường tiệm cận đứng và đường tiệm cận xiên của ' + F.m('(C)') + '. Tính giá trị của biểu thức ' + F.m('P = (d<sub>1</sub> &middot; d<sub>2</sub>)<sup>2</sup>') + '.',
                ans: String(ansSq)
            };
        }
    });

    // MODULE BL12-10: TOÁN THỰC TẾ SẢN XUẤT LINH KIỆN ĐIỆN TỬ ĐẠT LỢI NHUẬN > M (CÂU 1 PHẦN III)
    window.registerMathTopicGenerator('12', 'g12_bl_san_xuat_linh_kien_dien_tu', {
        title: '💰 Toán thực tế Kinh tế: Số sản phẩm ít nhất để lợi nhuận L(x) > 60 triệu đồng (Câu 1 Phần III)',
        shortLabel: '💰 Linh kiện điện tử (2001)',
        keywords: /linh kiện điện tử|chi phí sản xuất bình quân|2001|-0,01x\^2\+500x/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 1 Phần III:
            // Doanh thu: R(x) = -0,01*x^2 + 500*x (nghìn đồng).
            // Chi phí bình quân 1 sản phẩm: H(x) = F0 / x + 420 (nghìn đồng) => Tổng chi phí C(x) = x*H(x) = 420*x + F0.
            // Lợi nhuận: L(x) = -0,01*x^2 + 80*x - F0 (nghìn đồng).
            // Để L(x) > T0 (nghìn đồng) <=> x^2 - 8000*x + 100*(F0 + T0) < 0.
            // Chọn F0 + T0 = x1 * (8000 - x1) / 100 (với x1 = 1000, 1500, 2000, 2500):
            // Khi x1 = 2000 (F0 = 60000, T0 = 60000 nghìn = 60 triệu): 2000 < x < 6000 => Số sản phẩm nguyên ít nhất là x1 + 1 = 2001!
            const cases = [
                { f0: 60000, tMil: 60,  xMinInt: 2001 }, // Chuẩn 100% Câu 1 Phần III: 2001 sản phẩm!
                { f0: 40000, tMil: 30,  xMinInt: 1001 }, // F0+T0 = 70000 => x1 = 1000, x2 = 7000 => ít nhất 1001
                { f0: 50000, tMil: 47.5, xMinInt: 1501 },
                { f0: 75000, tMil: 62.5, xMinInt: 2501 }
            ];
            const pk = cases[(seed + step) % cases.length];

            return {
                q: '[Toán 12] Một công ty sản xuất linh kiện điện tử xác định rằng nếu sản xuất ' + F.m('x') + ' sản phẩm mỗi tháng (' + F.m('x &isin; N*, 1 &le; x &le; 5000') + ') thì doanh thu thu được khi bán hết số hàng đó là ' + F.m('R(x) = &minus;0,01x<sup>2</sup> + 500x') + ' (nghìn đồng). Biết chi phí sản xuất bình quân cho một sản phẩm là ' + F.m('H(x) = ' + F.frac(pk.f0, 'x') + ' + 420') + ' (nghìn đồng). Hỏi trong một tháng, công ty cần sản xuất ít nhất bao nhiêu sản phẩm để lợi nhuận thu được lớn hơn ' + F.m(pk.tMil) + ' triệu đồng?',
                ans: String(pk.xMinInt)
            };
        }
    });

    // MODULE BL12-11: ĐẾM SỐ TIỆM CẬN ĐỨNG CỦA HÀM HỢP y = 1 / (2f(x) - 5) TỪ BBT (CÂU 2 PHẦN III)
    window.registerMathTopicGenerator('12', 'g12_bl_so_tiem_can_dung_ham_hop', {
        title: '🔍 Tiệm cận Hàm hợp: Đếm số đường TCĐ của y = 1/(af(x) − b) từ Bảng biến thiên (Câu 2 Phần III)',
        shortLabel: '🔍 Số TCĐ y = 1/(2f(x)−5)',
        keywords: /2f\(x\)-5|bao nhiêu đường tiệm cận đứng/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 2 Phần III:
            // Cho BBT của hàm số y = f(x) liên tục trên R \ {1}:
            // Nhánh trái x < 1: từ +∞ giảm xuống CT bằng 2 (tại x = -2) rồi tăng lên +∞ (khi x -> 1-).
            // Nhánh phải x > 1: từ -∞ (khi x -> 1+) tăng lên CĐ bằng 3 (tại x = 2) rồi giảm xuống -∞ (khi x -> +∞).
            // Số đường TCĐ của y = 1 / (2*f(x) - m) chính là số nghiệm đơn/tách biệt của phương trình f(x) = m / 2:
            // - Nếu 2 < m/2 < 3 (VD m = 5 => f(x) = 2,5): cắt nhánh trái tại 2 điểm và nhánh phải tại 2 điểm => 4 đường TCĐ!
            // - Nếu m/2 = 2 (m = 4) hoặc m/2 = 3 (m = 6): có 3 nghiệm => 3 đường TCĐ!
            // - Nếu m/2 > 3 (VD m = 7 => f(x) = 3,5) hoặc m/2 < 2 (VD m = 3 => f(x) = 1,5): có 2 nghiệm => 2 đường TCĐ!
            const cases = [
                { mVal: 5, ansAsym: 4 }, // Chuẩn 100% Câu 2 Phần III: 2f(x) - 5 = 0 <=> f(x) = 2.5 => 4 TCĐ!
                { mVal: 4, ansAsym: 3 }, // 2f(x) - 4 = 0 <=> f(x) = 2 => 3 TCĐ
                { mVal: 6, ansAsym: 3 }, // 2f(x) - 6 = 0 <=> f(x) = 3 => 3 TCĐ
                { mVal: 7, ansAsym: 2 }  // 2f(x) - 7 = 0 <=> f(x) = 3.5 => 2 TCĐ
            ];
            const pk = cases[(seed + step) % cases.length];

            return {
                q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' liên tục trên ' + F.m('R \\ {1}') + '. Biết trên khoảng ' + F.m('(&minus;&infin;; 1)') + ', hàm số giảm từ ' + F.m('+&infin;') + ' xuống cực tiểu bằng ' + F.m('2') + ' (tại ' + F.m('x = &minus;2') + ') rồi tăng lên ' + F.m('+&infin;') + '; trên khoảng ' + F.m('(1; +&infin;)') + ', hàm số tăng từ ' + F.m('&minus;&infin;') + ' lên cực đại bằng ' + F.m('3') + ' (tại ' + F.m('x = 2') + ') rồi giảm xuống ' + F.m('&minus;&infin;') + '. Hỏi đồ thị hàm số ' + F.m('y = ' + F.frac('1', '2f(x) &minus; ' + pk.mVal)) + ' có tất cả bao nhiêu đường tiệm cận đứng?',
                ans: String(pk.ansAsym)
            };
        }
    });

    // MODULE BL12-12: CẮT TÔN TAM GIÁC ĐỀU CUỘN THÀNH THÙNG HÌNH TRỤ V_max (CÂU 3 PHẦN III)
    window.registerMathTopicGenerator('12', 'g12_bl_cat_tam_giac_deu_cuon_tru', {
        title: '🛢️ Toán thực tế Vận dụng cao: Cắt hình chữ nhật trong tam giác đều cuộn thành hình trụ V_max (Kèm SVG)',
        shortLabel: '🛢️ Cuộn hình trụ từ Δ đều',
        keywords: /bác phát|thùng hình trụ|mảnh tôn hình tam giác đều|7443/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 3 Phần III:
            // Tam giác đều ABC có cạnh bằng L (cm). Cắt hình chữ nhật MNPQ (M, N ∈ BC) với MN = x (0 < x < L).
            // Chiều cao MQ = sqrt(3)/2 * (L - x). Cuộn lại sao cho MQ trùng NP => chu vi đáy 2π*r = x => r = x / (2π).
            // Thể tích trụ: V(x) = π * r^2 * MQ = sqrt(3)/(8π) * x^2 * (L - x).
            // Đạo hàm của x^2*(L - x) bằng 0 khi x = 2L / 3!
            // Khi đó V_max = sqrt(3)/(8π) * (4L^3 / 27) = (sqrt(3) * L^3) / (54 * π).
            // Khi L = 90 cm: V_max = 13500*sqrt(3)/π ≈ 7443 cm^3 (Chuẩn 100% đáp số Câu 3 Phần III!)
            const sideList = [60, 90, 120]; // 90 cm là chuẩn đề gốc!
            const L = sideList[(seed + step) % sideList.length];
            const svg = G12_VNBL_UI.equilateralRectCut(L);

            if (step % 2 === 0) {
                const vMax = Math.round((Math.sqrt(3) * Math.pow(L, 3)) / (54 * Math.PI));
                return {
                    q: '[Toán 12] Bác Phát muốn làm một chiếc thùng hình trụ không đáy, thân thùng được làm từ một mảnh tôn hình tam giác đều ' + F.m('ABC') + ' có cạnh bằng ' + F.m(L + ' cm') + '. Bác cắt ra một tấm tôn hình chữ nhật ' + F.m('MNPQ') + ' (với ' + F.m('M, N') + ' thuộc cạnh ' + F.m('BC') + '; ' + F.m('P, Q') + ' lần lượt thuộc ' + F.m('AC, AB') + ' như hình vẽ) rồi cuộn lại sao cho hai mép ' + F.m('MQ') + ' và ' + F.m('NP') + ' trùng khít nhau tạo thành hình trụ có chiều cao bằng ' + F.m('MQ') + '. Thể tích lớn nhất của chiếc thùng mà bác Phát có thể làm được bằng bao nhiêu ' + F.m('cm<sup>3</sup>') + ' (làm tròn kết quả đến hàng đơn vị)?' + svg,
                    ans: String(vMax)
                };
            } else {
                // Hỏi độ dài cạnh MN = x = 2L / 3 để thể tích thùng hình trụ lớn nhất (Nguyên tuyệt đối: 40, 60, 80 cm!)
                const xOpt = (2 * L) / 3;
                return {
                    q: '[Toán 12] Từ một mảnh tôn hình tam giác đều ' + F.m('ABC') + ' có cạnh bằng ' + F.m(L + ' cm') + ', bác Phát cắt ra một tấm tôn hình chữ nhật ' + F.m('MNPQ') + ' (với ' + F.m('M, N') + ' thuộc cạnh ' + F.m('BC') + ' như hình vẽ) rồi cuộn lại sao cho hai mép ' + F.m('MQ') + ' và ' + F.m('NP') + ' trùng khít nhau để tạo thành mặt xung quanh của một chiếc thùng hình trụ có chiều cao bằng ' + F.m('MQ') + '. Để thể tích chiếc thùng hình trụ đạt giá trị lớn nhất thì độ dài cạnh ' + F.m('MN') + ' phải bằng bao nhiêu centimét?' + svg,
                    ans: String(xOpt)
                };
            }
        }
    });

    // MODULE BL12-13: TỔNG KHOẢNG CÁCH d1 + 2d2 NHỎ NHẤT & DIỆN TÍCH TAM GIÁC MAB (CÂU 4 PHẦN III)
    window.registerMathTopicGenerator('12', 'g12_bl_dien_tich_mab_tiem_can', {
        title: '🏆 Vận dụng cao Đồ thị: Khi P = d₁ + kd₂ nhỏ nhất, tính diện tích tam giác MAB (Câu 4 Phần III)',
        shortLabel: '🏆 Diện tích ΔMAB (d₁+2d₂)',
        keywords: /diện tích của tam giác mab|p = d1 \+ 2d2|0,3/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 4 Phần III:
            // Cho (C): y = (x^2 - x + 1)/(x - 1) = x + 1/(x - 1) có 2 điểm cực trị A(0; -1) và B(2; 3).
            // Với M(1 + t; 1 + t + 1/t) (t > 0): d1 = t, d2 = 1 / (sqrt(2)*t).
            // Diện tích ΔMAB luôn thu gọn thành công thức tuyệt đẹp: S_MAB = |t - 1/t|!
            // - Khi P = d1 + 2*d2 = t + sqrt(2)/t đạt GTNN => t = 2^(1/4) => S_MAB = 2^(1/4) - 2^(-1/4) ≈ 0,348 => làm tròn 0,3!
            // - Khi P = d1 + 4*sqrt(2)*d2 = t + 4/t đạt GTNN => t = 2 => S_MAB = |2 - 1/2| = 1,5 (Số thập phân chính xác tuyệt đối!)
            const svg = G12_VNBL_UI.slantHyperbola(1, 'y=x', false);

            if (step % 2 === 0) {
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = ' + F.frac('x<sup>2</sup> &minus; x + 1', 'x &minus; 1')) + ' có đồ thị ' + F.m('(C)') + ' như hình vẽ. Biết đồ thị ' + F.m('(C)') + ' có hai điểm cực trị là ' + F.m('A') + ' và ' + F.m('B') + '. Xét điểm ' + F.m('M(x<sub>0</sub>; y<sub>0</sub>)') + ' thuộc ' + F.m('(C)') + ' với ' + F.m('x<sub>0</sub> &gt; 1') + '. Gọi ' + F.m('d<sub>1</sub>, d<sub>2</sub>') + ' lần lượt là khoảng cách từ ' + F.m('M') + ' đến đường tiệm cận đứng và đường tiệm cận xiên của ' + F.m('(C)') + '. Khi biểu thức ' + F.m('P = d<sub>1</sub> + 2d<sub>2</sub>') + ' đạt giá trị nhỏ nhất, diện tích của tam giác ' + F.m('MAB') + ' bằng bao nhiêu (làm tròn kết quả đến hàng phần mười)?' + svg,
                    ans: '0.3'
                };
            } else {
                // Khi P = 2*d1 + 9*sqrt(2)*d2 hoặc d1 = t0 cho trước (t = 2 => S_MAB = 1.5; t = 4 => S_MAB = 3.75)
                const tVal = (step % 4 === 1) ? 2 : 4;
                const x0Val = 1 + tVal; // x0 = 3 hoặc x0 = 5
                const areaMAB = tVal - (1 / tVal); // 1.5 hoặc 3.75
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = ' + F.frac('x<sup>2</sup> &minus; x + 1', 'x &minus; 1')) + ' có đồ thị ' + F.m('(C)') + ' với hai điểm cực trị là ' + F.m('A(0; &minus;1)') + ' và ' + F.m('B(2; 3)') + '. Xét điểm ' + F.m('M(x<sub>0</sub>; y<sub>0</sub>)') + ' thuộc nhánh phải của đồ thị ' + F.m('(C)') + ' có khoảng cách đến đường tiệm cận đứng bằng ' + F.m('d<sub>1</sub> = ' + tVal) + '. Tính diện tích của tam giác ' + F.m('MAB') + '.' + svg,
                    ans: String(areaMAB)
                };
            }
        }
    });

    // MODULE BL12-14: TOÁN THỰC TẾ DỊCH TỄ HỌC – TỐC ĐỘ TRUYỀN BỆNH LỚN NHẤT N'(t) (CÂU 5 PHẦN III)
    window.registerMathTopicGenerator('12', 'g12_bl_toc_do_truyen_benh_lon_nhat', {
        title: '🦠 Toán thực tế Dịch tễ: Tìm tốc độ truyền bệnh lớn nhất v(t) = N\'(t) (Câu 5 Phần III)',
        shortLabel: '🦠 Tốc độ truyền bệnh N\'(t)',
        keywords: /dịch bệnh|số người nhiễm bệnh tích lũy|tốc độ truyền bệnh lớn nhất|675/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 5 Phần III:
            // Số người nhiễm tích lũy đến ngày thứ t (0 <= t <= 2*T0): N(t) = (3*T0)*t^2 - t^3.
            // Tốc độ truyền bệnh: v(t) = N'(t) = 6*T0*t - 3*t^2 = -3*(t - T0)^2 + 3 * T0^2.
            // Đạt GTLN tại ngày t = T0 với tốc độ truyền bệnh lớn nhất là v_max = 3 * T0^2 (người/ngày)!
            // Khi T0 = 15 (N(t) = 45t^2 - t^3): v_max = 3 * 15^2 = 675 người/ngày (Chuẩn 100% đáp số Câu 5 Phần III!)
            const tPeakList = [10, 12, 14, 15, 16, 20]; // 15 là chuẩn đề gốc!
            const t0 = tPeakList[(seed + step) % tPeakList.length];
            const coeffA = 3 * t0;     // 45 ở đề gốc
            const maxDays = 2 * t0;    // 30 ở đề gốc
            const vMax = 3 * t0 * t0;  // 675 ở đề gốc

            return {
                q: '[Toán 12] Sau khi xuất hiện một dịch bệnh, số người nhiễm bệnh tích lũy tính từ ngày phát hiện ca bệnh đầu tiên đến ngày thứ ' + F.m('t (0 &le; t &le; ' + maxDays + ')') + ' được mô hình hóa bởi hàm số ' + F.m('N(t) = ' + coeffA + 't<sup>2</sup> &minus; t<sup>3</sup>') + '. Biết rằng tốc độ truyền bệnh tại thời điểm ' + F.m('t') + ' được xác định bởi đạo hàm ' + F.m('N\'(t)') + '. Tốc độ truyền bệnh lớn nhất là bao nhiêu (đơn vị: người/ngày)?',
                ans: String(vMax)
            };
        }
    });

    // MODULE BL12-15: TOÁN THỰC TẾ XÂY CẦU NGẮN NHẤT NỐI 2 NHÁNH ĐỒ THỊ QUA SÔNG (CÂU 6 PHẦN III)
    window.registerMathTopicGenerator('12', 'g12_bl_cay_cau_ngan_nhat_qua_song', {
        title: '🌉 Toán thực tế Vận dụng cao: Chiều dài cây cầu ngắn nhất nối 2 bờ nhánh sông (Câu 6 Phần III)',
        shortLabel: '🌉 Cây cầu ngắn nhất (439m)',
        keywords: /nhánh sông uốn cong|cây cầu thẳng|ngắn nhất|439/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 6 Phần III:
            // Hai bờ sông được mô hình hóa bởi 2 nhánh của đồ thị y = (x^2 + a*x + b)/(x - 2) = x + 1 + R/(x - 2).
            // Biết đồ thị có 1 điểm cực trị là (1; 1) => a = -1, b = -1, R = 1 => y = x + 1 + 1/(x - 2).
            // Khoảng cách ngắn nhất giữa 2 nhánh của đồ thị y = x + m + R/(x - x0) (với R > 0) là:
            // AB_min = 2 * sqrt(R * (2 + 2*sqrt(2)))!
            // Mỗi đơn vị trên hệ trục tọa độ ứng với scaleM (mét) trên thực tế:
            // Khi R = 1, scaleM = 100 m => Chiều dài cầu ngắn nhất = 100 * 2 * sqrt(2 + 2*sqrt(2)) ≈ 439,47 m => 439 m!
            const scaleList = [100, 150, 200]; // 100m là chuẩn đề gốc (439m)!
            const scaleM = scaleList[(seed + step) % scaleList.length];
            const svg = G12_VNBL_UI.slantHyperbola(2, 'SÔNG', true);

            if (step % 2 === 0) {
                const bridgeLen = Math.round(scaleM * 2 * Math.sqrt(2 + 2 * Math.SQRT2));
                return {
                    q: '[Toán 12] Trong quy hoạch giao thông của một địa phương, phần đất liền ở hai bờ của một nhánh sông uốn cong được mô hình hóa bởi hai nhánh của đồ thị hàm số ' + F.m('y = ' + F.frac('x<sup>2</sup> + ax + b', 'x &minus; 2')) + ' trên hệ trục tọa độ ' + F.m('Oxy') + ' (như hình vẽ), trong đó mỗi đơn vị trên trục tọa độ tương ứng với ' + F.m(scaleM + ' m') + ' trên thực địa. Biết rằng đồ thị hàm số có một điểm cực trị là ' + F.m('(1; 1)') + '. Người ta dự kiến xây một cây cầu thẳng nối điểm ' + F.m('A') + ' ở bờ bên này sang điểm ' + F.m('B') + ' ở bờ đối diện sao cho chiều dài cây cầu ngắn nhất. Chiều dài ngắn nhất của cây cầu đó bằng bao nhiêu mét (làm tròn kết quả đến hàng đơn vị)?' + svg,
                    ans: String(bridgeLen)
                };
            } else {
                // Hỏi giá trị của tổng a + b khi biết đồ thị y = (x^2 + ax + b)/(x - 2) có điểm cực trị là (1; yCD)
                // Vì y'(1) = 0 và y(1) = yCD => a = -yCD, b = -1, a + b = -yCD - 1 (Khi yCD = 1 => a = -1, b = -1 => a + b = -2!)
                const yCD = ((seed + step) % 4) + 1; // 1, 2, 3, 4
                // Từ y(1) = (1 + a + b)/(-1) = yCD => a + b = -1 - yCD!
                const sumAB = -1 - yCD;
                return {
                    q: '[Toán 12] Hai bờ của một nhánh sông được mô hình hóa bởi hai nhánh của đồ thị hàm số ' + F.m('y = ' + F.frac('x<sup>2</sup> + ax + b', 'x &minus; 2')) + ' (như hình vẽ). Biết rằng đồ thị hàm số đạt cực đại tại điểm có tọa độ ' + F.m('(1; ' + yCD + ')') + '. Tính tổng ' + F.m('T = a + b') + '.' + svg,
                    ans: String(sumAB)
                };
            }
        }
    });

    if (typeof window.refreshAdminTopicDropdown === 'function') {
        window.refreshAdminTopicDropdown();
    }
})();
//=========================
(function() {
    if (typeof window.registerMathTopicGenerator !== 'function') return;
    const F = window.IMATHS_FMT;

    // ===================================================================
    // BỘ HÀM VẼ ĐỒ THỊ SVG & BẢNG BIẾN THIÊN - THPT NGUYỄN TRÃI (ĐÀ NẴNG)
    // ===================================================================
    const G12_NT_UI = {
        // 1. Bảng biến thiên hàm phân thức bậc 2/bậc 1 có TCĐ x = xAsym và 2 cực trị (Câu 1 Mã 1101)
        bbtSplitRational: function(xCD, yCD, xAsym, xCT, yCT) {
            return '<div style="overflow-x:auto;margin:8px 0 4px;"><table style="width:100%;border-collapse:collapse;background:#040b16;font-size:11.5px;border:1.5px solid #334155;text-align:center;color:#f8fafc;">' +
                '<tr style="border-bottom:1px solid #334155;"><td style="padding:4px 7px;border-right:1px solid #334155;color:#fde047;font-weight:900;">x</td><td>&minus;&infin;</td><td style="color:#fde047;font-weight:900;">' + xCD + '</td><td></td><td style="color:#f87171;font-weight:900;">' + xAsym + '</td><td></td><td style="color:#4ade80;font-weight:900;">' + xCT + '</td><td>+&infin;</td></tr>' +
                '<tr style="border-bottom:1px solid #334155;"><td style="padding:4px 7px;border-right:1px solid #334155;color:#38bdf8;font-weight:900;">f\'(x)</td><td>+</td><td>0</td><td>&minus;</td><td style="color:#f87171;font-weight:900;">||</td><td>&minus;</td><td>0</td><td>+</td></tr>' +
                '<tr><td style="padding:7px;border-right:1px solid #334155;color:#c084fc;font-weight:900;">y</td><td>&minus;&infin; &nearr;</td><td style="color:#fde047;font-weight:900;">' + yCD + '</td><td>&searr; &minus;&infin;</td><td style="color:#f87171;font-weight:900;">||</td><td>+&infin; &searr;</td><td style="color:#4ade80;font-weight:900;">' + yCT + '</td><td>&nearr; +&infin;</td></tr>' +
            '</table></div>';
        },

        // 2. Bảng biến thiên hàm trùng phương bậc 4 có 3 cực trị -a, 0, a (Câu 6 Mã 1101 & Câu 4, 12 Mã 1102)
        bbtQuarticW: function(aVal, ySide, yMid, openDown) {
            const s1 = openDown ? '+' : '&minus;';
            const s2 = openDown ? '&minus;' : '+';
            const infSide = openDown ? '&minus;&infin;' : '+&infin;';
            return '<div style="overflow-x:auto;margin:8px 0 4px;"><table style="width:100%;border-collapse:collapse;background:#040b16;font-size:11.5px;border:1.5px solid #334155;text-align:center;color:#f8fafc;">' +
                '<tr style="border-bottom:1px solid #334155;"><td style="padding:4px 7px;border-right:1px solid #334155;color:#fde047;font-weight:900;">x</td><td>&minus;&infin;</td><td style="color:#fde047;font-weight:900;">&minus;' + aVal + '</td><td></td><td style="color:#4ade80;font-weight:900;">0</td><td></td><td style="color:#fde047;font-weight:900;">' + aVal + '</td><td>+&infin;</td></tr>' +
                '<tr style="border-bottom:1px solid #334155;"><td style="padding:4px 7px;border-right:1px solid #334155;color:#38bdf8;font-weight:900;">f\'(x)</td><td>' + s1 + '</td><td>0</td><td>' + s2 + '</td><td>0</td><td>' + s1 + '</td><td>0</td><td>' + s2 + '</td></tr>' +
                '<tr><td style="padding:7px;border-right:1px solid #334155;color:#c084fc;font-weight:900;">f(x)</td><td>' + infSide + '</td><td style="color:#fde047;font-weight:900;">' + ySide + '</td><td></td><td style="color:#4ade80;font-weight:900;">' + yMid + '</td><td></td><td style="color:#fde047;font-weight:900;">' + ySide + '</td><td>' + infSide + '</td></tr>' +
            '</table></div>';
        },

        // 3. Đồ thị hàm phân thức bậc nhất / bậc nhất y = (ax + b)/(cx + d) (Câu 7, 12 Mã 1101 & Câu 1 Phần II)
        hyperbolaGraph: function(xAsym, yAsym, xInt, yInt) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 142" width="235" height="135">' +
                '<line x1="18" y1="68" x2="228" y2="68" stroke="#94a3b8" stroke-width="1.5"/><polygon points="232,68 224,64 224,72" fill="#94a3b8"/>' +
                '<line x1="105" y1="132" x2="105" y2="12" stroke="#94a3b8" stroke-width="1.5"/><polygon points="105,8 101,16 109,16" fill="#94a3b8"/>' +
                '<line x1="135" y1="12" x2="135" y2="132" stroke="#f87171" stroke-width="1.4" stroke-dasharray="4 3"/>' +
                '<line x1="18" y1="92" x2="225" y2="92" stroke="#4ade80" stroke-width="1.4" stroke-dasharray="4 3"/>' +
                '<path d="M 22 98 Q 112 102 126 130" fill="none" stroke="#38bdf8" stroke-width="2.4"/>' +
                '<path d="M 144 14 Q 158 82 224 86" fill="none" stroke="#38bdf8" stroke-width="2.4"/>' +
                '<circle cx="105" cy="112" r="3.2" fill="#fde047"/><circle cx="165" cy="68" r="3.2" fill="#fde047"/>' +
                '<text x="124" y="63" fill="#f87171" font-size="10" font-weight="bold">' + xAsym + '</text>' +
                '<text x="86" y="89" fill="#4ade80" font-size="10" font-weight="bold">' + yAsym + '</text>' +
                '<text x="162" y="62" fill="#fde047" font-size="10.5" font-weight="bold">' + xInt + '</text>' +
                '<text x="82" y="116" fill="#fde047" font-size="10.5" font-weight="bold">' + yInt + '</text>' +
                '<text x="93" y="63" fill="#cbd5e1" font-size="10">O</text>' +
            '</svg></div>';
        },

        // 4. Đồ thị hàm bậc ba trên đoạn [-2; 4] hoặc [-1; 5] tìm M, m (Câu 10 Mã 1101 & Câu 11 Mã 1102)
        cubicSegmentMaxMin: function(xLeft, yLeft, y0, xCT, yCT, xRight, yRight) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 142" width="235" height="135">' +
                '<line x1="18" y1="88" x2="228" y2="88" stroke="#94a3b8" stroke-width="1.5"/><polygon points="232,88 224,84 224,92" fill="#94a3b8"/>' +
                '<line x1="88" y1="132" x2="88" y2="12" stroke="#94a3b8" stroke-width="1.5"/><polygon points="88,8 84,16 92,16" fill="#94a3b8"/>' +
                '<line x1="48" y1="88" x2="48" y2="122" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="138" y1="88" x2="138" y2="74" stroke="#fde047" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="88" y1="74" x2="138" y2="74" stroke="#fde047" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="192" y1="88" x2="192" y2="22" stroke="#4ade80" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="88" y1="22" x2="192" y2="22" stroke="#4ade80" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<path d="M 48 122 C 62 56, 76 58, 88 58 C 104 58, 122 74, 138 74 C 158 74, 176 48, 192 22" fill="none" stroke="#38bdf8" stroke-width="2.5"/>' +
                '<circle cx="48" cy="122" r="3" fill="#94a3b8"/><circle cx="88" cy="58" r="3" fill="#fde047"/>' +
                '<circle cx="138" cy="74" r="3.4" fill="#fde047"/><circle cx="192" cy="22" r="3.5" fill="#4ade80"/>' +
                '<text x="38" y="83" fill="#cbd5e1" font-size="10">' + xLeft + '</text>' +
                '<text x="134" y="102" fill="#fde047" font-size="10" font-weight="bold">' + xCT + '</text>' +
                '<text x="188" y="102" fill="#4ade80" font-size="10" font-weight="bold">' + xRight + '</text>' +
                '<text x="72" y="61" fill="#fde047" font-size="10" font-weight="bold">' + y0 + '</text>' +
                '<text x="72" y="78" fill="#fde047" font-size="10" font-weight="bold">' + yCT + '</text>' +
                '<text x="72" y="26" fill="#4ade80" font-size="10.5" font-weight="bold">' + yRight + '</text>' +
                '<text x="76" y="101" fill="#cbd5e1" font-size="10">O</text>' +
            '</svg></div>';
        },

        // 5. Hình Cửa sổ Bảo tàng hình Parabol lắp kính màu hình chữ nhật ABCD (Tự luận Câu 2 Mã 1101 & Câu 1 Mã 1102)
        parabolaWindow: function(hPeak, xPt, yPt, yBar) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 148" width="235" height="140">' +
                '<line x1="18" y1="126" x2="228" y2="126" stroke="#94a3b8" stroke-width="1.6"/><polygon points="232,126 224,122 224,130" fill="#94a3b8"/>' +
                '<line x1="120" y1="138" x2="120" y2="10" stroke="#94a3b8" stroke-width="1.6"/><polygon points="120,6 116,14 124,14" fill="#94a3b8"/>' +
                '<path d="M 48 126 Q 120 -34 192 126" fill="none" stroke="#c084fc" stroke-width="2.2"/>' +
                '<line x1="42" y1="102" x2="198" y2="102" stroke="#38bdf8" stroke-width="1.6"/>' +
                '<rect x="78" y="62" width="84" height="40" fill="rgba(148,163,184,0.35)" stroke="#fde047" stroke-width="2"/>' +
                '<line x1="120" y1="48" x2="156" y2="48" stroke="#cbd5e1" stroke-width="1.1" stroke-dasharray="3 2"/>' +
                '<line x1="156" y1="48" x2="156" y2="126" stroke="#cbd5e1" stroke-width="1.1" stroke-dasharray="3 2"/>' +
                '<circle cx="120" cy="24" r="3.2" fill="#ef4444"/><circle cx="156" cy="48" r="3.2" fill="#ef4444"/>' +
                '<circle cx="78" cy="62" r="3" fill="#fde047"/><circle cx="162" cy="62" r="3" fill="#fde047"/>' +
                '<circle cx="78" cy="102" r="3" fill="#4ade80"/><circle cx="162" cy="102" r="3" fill="#4ade80"/>' +
                '<text x="125" y="24" fill="#fde047" font-size="10" font-weight="bold">' + hPeak + '</text>' +
                '<text x="101" y="51" fill="#cbd5e1" font-size="9.5" font-weight="bold">' + yPt + '</text>' +
                '<text x="162" y="48" fill="#ef4444" font-size="10" font-weight="bold">H</text>' +
                '<text x="152" y="138" fill="#cbd5e1" font-size="9.5" font-weight="bold">' + xPt + '</text>' +
                '<text x="123" y="113" fill="#4ade80" font-size="9.5" font-weight="bold">' + yBar + '</text>' +
                '<text x="65" y="60" fill="#fde047" font-size="10" font-weight="bold">D</text>' +
                '<text x="166" y="60" fill="#fde047" font-size="10" font-weight="bold">C</text>' +
                '<text x="65" y="114" fill="#4ade80" font-size="10" font-weight="bold">A</text>' +
                '<text x="166" y="114" fill="#4ade80" font-size="10" font-weight="bold">B</text>' +
            '</svg></div>';
        }
    };

    // ===================================================================
    // MODULE NT12-01: ĐƠN ĐIỆU & CỰC TRỊ TỪ BẢNG BIẾN THIÊN (CÂU 1, 5, 6 MÃ 1101 & CÂU 4, 7, 12 MÃ 1102)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_nt_bbt_don_dieu_cuc_tri', {
        title: '📊 Bảng biến thiên: Xét tính đơn điệu, Giá trị cực đại & Tiệm cận (THPT Nguyễn Trãi - Phần I)',
        shortLabel: '📊 BBT Đơn điệu & Cực trị',
        keywords: /bảng biến thiên như hình bên|giá trị cực đại của hàm số|số điểm cực trị/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Chuẩn Câu 1 Mã 1101: BBT hàm có TCĐ x = xAsym, đạt CĐ tại xCD (y = yCD), đạt CT tại xCT (y = yCT)
                const xCD   = ((seed + step) % 3) + 2; // 2, 3, 4 (3 ở đề gốc)
                const xAsym = xCD + 1;                 // 3, 4, 5 (4 ở đề gốc)
                const xCT   = xAsym + 4;               // 7, 8, 9 (8 ở đề gốc)
                const yCD   = ((step % 4) + 3);        // 3..6    (4 ở đề gốc)
                const yCT   = -yCD;                    // -4 ở đề gốc
                const tbl   = G12_NT_UI.bbtSplitRational(xCD, yCD, xAsym, xCT, yCT);
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' có bảng biến thiên như hình dưới đây:' + tbl + 'Biết hàm số nghịch biến trên hai khoảng ' + F.m('(a; b)') + ' và ' + F.m('(b; c)') + '. Tính tổng ' + F.m('T = a + b + c') + '.',
                    ans: String(xCD + xAsym + xCT)
                };
            } else {
                // Chuẩn Câu 6 Mã 1101 & Câu 4, 12 Mã 1102: BBT hàm trùng phương có 3 điểm cực trị (-a, 0, a)
                const aVal  = ((seed + step) % 3) + 1; // 1, 2, 3 (2 ở Mã 1101, 1 ở Mã 1102)
                const ySide = ((step % 4) + 1);        // 1..4    (1 ở Mã 1101)
                const yMid  = -(((seed * 2 + step) % 3) + 1); // -1..-3 (-1 ở Mã 1101)
                const tbl   = G12_NT_UI.bbtQuarticW(aVal, ySide, yMid, true);
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' liên tục trên ' + F.m('R') + ' và có bảng biến thiên như hình dưới đây:' + tbl + 'Tính tổng của giá trị cực đại và giá trị cực tiểu của hàm số đã cho.',
                    ans: String(ySide + yMid)
                };
            }
        }
    });

    // ===================================================================
    // MODULE NT12-02: ĐIỂM CỰC ĐẠI, ĐIỂM CỰC TIỂU & NHẬN DIỆN ĐỒ THỊ HÀM BẬC BA (CÂU 2, 3, 9 MÃ 1101 & CÂU 5, 6, 10 MÃ 1102)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_nt_cuc_tri_ham_bac_ba', {
        title: '📈 Hàm số bậc ba: Tìm điểm cực đại x_CĐ, điểm cực tiểu x_CT & Nhận diện đồ thị (Câu 2, 3, 9 Phần I)',
        shortLabel: '📈 Cực trị Hàm bậc ba',
        keywords: /x\^3\+3x\^2-2|-x\^3\+3x\^2\+1|điểm cực đại của hàm số/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Chuẩn Câu 3 Mã 1101: Cho y = x^3 + 3*k*x^2 - c => y' = 3x^2 + 6kx = 0 <=> x = -2k (điểm CĐ) hoặc x = 0 (điểm CT)
                // Khi k = 1, c = 2: y = x^3 + 3x^2 - 2 => Điểm cực đại của hàm số là x = -2 (Chuẩn đáp án D Câu 3 Mã 1101!)
                const k = ((seed + step) % 4) + 1; // 1, 2, 3, 4
                const threeK = 3 * k;
                const c = ((step % 5) + 2);
                const xCD = -2 * k;
                return {
                    q: '[Toán 12] Cho hàm số bậc ba ' + F.m('y = x<sup>3</sup> + ' + threeK + 'x<sup>2</sup> &minus; ' + c) + '. Điểm cực đại của hàm số đã cho là ' + F.m('x = x<sub>0</sub>') + '. Tìm giá trị của ' + F.m('x<sub>0</sub>') + '.',
                    ans: String(xCD)
                };
            } else {
                // Chuẩn Câu 6 Mã 1102: Cho y = -x^3 + 3*k*x^2 + c => y' = -3x^2 + 6kx = 0 <=> x = 0 (điểm CT) và x = 2k (điểm CĐ)
                const k = ((seed + step) % 4) + 1; // 1, 2, 3, 4 (Khi k=1, c=1 => y = -x^3 + 3x^2 + 1)
                const threeK = 3 * k;
                const c = ((step % 4) + 1);
                const yCD = (4 * k * k * k) + c; // Giá trị cực đại tại x = 2k
                return {
                    q: '[Toán 12] Cho hàm số bậc ba ' + F.m('y = &minus;x<sup>3</sup> + ' + threeK + 'x<sup>2</sup> + ' + c) + '. Gọi ' + F.m('x<sub>CT</sub>') + ' là điểm cực tiểu và ' + F.m('y<sub>CĐ</sub>') + ' là giá trị cực đại của hàm số. Tính tổng ' + F.m('T = x<sub>CT</sub> + y<sub>CĐ</sub>') + '.',
                    ans: String(yCD)
                };
            }
        }
    });

    // ===================================================================
    // MODULE NT12-03: TIỆM CẬN ĐỨNG, TIỆM CẬN NGANG & XÉT DẤU HỆ SỐ ĐỒ THỊ PHÂN THỨC (CÂU 7, 11, 12 MÃ 1101 & CÂU 1 PHẦN II)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_nt_do_thi_phan_thuc_abc', {
        title: '🔍 Đồ thị Phân thức: Tiệm cận của y = (3x+2)/(1−x) & Tính a + b + c từ đồ thị (Câu 7, 11, 12 & Phần II)',
        shortLabel: '🔍 Đồ thị y = (ax+b)/(cx+1)',
        keywords: /3x\+2\/1-x|2x\+3\/4-x|tổng a\+b\+c/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const mode = step % 3;

            if (mode === 0) {
                // Chuẩn Câu 11 Mã 1101 (y = (3x+2)/(1-x) => TCĐ x=1, TCN y=-3) & Câu 2 Mã 1102 (y = (2x+3)/(4-x) => TCĐ x=4, TCN y=-2)
                const a = ((seed + step) % 5) + 2; // 2..6
                const d = ((step % 4) + 1);        // 1..4
                // Hàm số y = (a*x + 3) / (d - x) có TCĐ: x = d và TCN: y = -a
                return {
                    q: '[Toán 12] Đồ thị hàm số ' + F.m('y = ' + F.frac(a + 'x + 3', d + ' &minus; x')) + ' có đường tiệm cận đứng là ' + F.m('x = x<sub>0</sub>') + ' và đường tiệm cận ngang là ' + F.m('y = y<sub>0</sub>') + '. Tính tổng ' + F.m('T = x<sub>0</sub> + y<sub>0</sub>') + '.',
                    ans: String(d - a)
                };
            } else if (mode === 1) {
                // Chuẩn Câu 1 Phần II Mã 1101:
                // Cho hàm số y = (a*x + b)/(c*x + 1) có đồ thị nhận x = 1 làm TCĐ (=> c = -1), y = yAsym làm TCN (=> a / c = yAsym => a = -yAsym)
                // và đi qua điểm (xInt; 0) => a*xInt + b = 0 => b = -a*xInt.
                // Khi xAsym = 1, yAsym = -1, xInt = 2: c = -1, a = 1, b = -2, cắt Oy tại (0; -2) => a + b + c = 1 - 2 - 1 = -2!
                const yAsym = -(((seed + step) % 3) + 1); // -1, -2, -3 (-1 ở đề gốc)
                const xInt  = ((step % 3) + 2);           // 2, 3, 4    (2 ở đề gốc)
                const cVal  = -1;                         // Vì TCĐ x = 1 => c*1 + 1 = 0 => c = -1
                const aVal  = -yAsym;                     // Vì TCN y = a/c = -a = yAsym
                const bVal  = -aVal * xInt;               // Giao với Ox tại (xInt; 0)
                const svg   = G12_NT_UI.hyperbolaGraph(1, yAsym, xInt, bVal);
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x) = ' + F.frac('ax + b', 'cx + 1')) + ' (với ' + F.m('a, b, c &isin; R') + ') có đồ thị như hình vẽ bên dưới (tiệm cận đứng ' + F.m('x = 1') + ', tiệm cận ngang ' + F.m('y = ' + yAsym) + ', cắt trục hoành tại ' + F.m('(' + xInt + '; 0)') + ' và cắt trục tung tại ' + F.m('(0; ' + bVal + ')') + '). Tính tổng ' + F.m('S = a + b + c') + '.' + svg,
                    ans: String(aVal + bVal + cVal)
                };
            } else {
                // Chuẩn Câu 2 Phần II Mã 1102:
                // Cho hàm số f(x) = (a*x + b)/(x + c) có TCĐ x = 1 (=> c = -1), TCN y = aVal (=> a = aVal) và cắt Oy tại (0; yInt) (=> b/c = yInt => b = -yInt).
                // Khi aVal = 2, yInt = 1: a = 2, b = -1, c = -1 => a + b + c = 0 (Chuẩn 100% ý d Câu 2 Phần II Mã 1102!)
                const aVal = ((seed + step) % 3) + 2; // 2, 3, 4 (2 ở Mã 1102)
                const cVal = -1;                      // TCĐ x = 1
                const yInt = 1;                       // Cắt Oy tại (0; 1) => b / (-1) = 1 => b = -1
                const bVal = -yInt;
                const svg  = G12_NT_UI.hyperbolaGraph(1, aVal, '1/' + aVal, yInt);
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x) = ' + F.frac('ax + b', 'x + c')) + ' (với ' + F.m('a, b, c &isin; R') + ') có đồ thị nhận đường thẳng ' + F.m('x = 1') + ' làm tiệm cận đứng, đường thẳng ' + F.m('y = ' + aVal) + ' làm tiệm cận ngang và cắt trục tung tại điểm ' + F.m('(0; 1)') + ' như hình vẽ. Tính tổng ' + F.m('S = a + b + c') + '.' + svg,
                    ans: String(aVal + bVal + cVal)
                };
            }
        }
    });

    // ===================================================================
    // MODULE NT12-04: GIÁ TRỊ LỚN NHẤT & NHỎ NHẤT TRÊN ĐOẠN (CÂU 8, 10 MÃ 1101, CÂU 1, 11 MÃ 1102 & TỰ LUẬN CÂU 1, 3)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_nt_max_min_tren_doan_tu_luan', {
        title: '🏆 GTLN & GTNN trên đoạn: Hàm trùng phương, Hàm bậc ba & Đồ thị (Phần I & Phần IV Tự luận)',
        shortLabel: '🏆 Max–Min trên đoạn [a; b]',
        keywords: /x\^4-x\^2\+2|x\^3-6x\^2\+32|2m-3m|m\+2m/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            const mode = step % 4;

            if (mode === 0) {
                // Chuẩn Câu 8 Mã 1101: GTLN của hàm số y = x^4 - k*x^2 + c trên đoạn [0; 3]
                // Khi k = 1, c = 2: y = x^4 - x^2 + 2 trên [0; 3] đạt GTLN tại x = 3 bằng 81 - 9 + 2 = 74 (Chuẩn đáp án A Câu 8 Mã 1101!)
                const k = ((seed + step) % 4) + 1; // 1, 2, 3, 4
                const c = ((step % 5) + 2);        // 2..6
                const kStr = (k === 1) ? '' : String(k);
                const maxVal = 81 - (9 * k) + c;
                return {
                    q: '[Toán 12] Giá trị lớn nhất của hàm số ' + F.m('y = x<sup>4</sup> &minus; ' + kStr + 'x<sup>2</sup> + ' + c) + ' trên đoạn ' + F.m('[0; 3]') + ' bằng bao nhiêu?',
                    ans: String(maxVal)
                };
            } else if (mode === 1) {
                // Chuẩn Câu 10 Mã 1101: Đồ thị hàm số y = f(x) trên đoạn [0; 4] có GTLN M = yRight, GTNN m = yCT => Tính M + 2m
                // Khi y0 = 2, yCT = 1 (tại x = 2), yRight = 6 (tại x = 4) => M = 6, m = 1 => M + 2m = 8 (Chuẩn đáp án D Câu 10 Mã 1101!)
                const yCT    = ((seed + step) % 3) + 1; // 1, 2, 3 (1 ở đề gốc)
                const y0     = yCT + 1;
                const yRight = yCT + ((step % 4) + 5);  // 6..10   (6 ở đề gốc)
                const svg    = G12_NT_UI.cubicSegmentMaxMin(-2, -3, y0, 2, yCT, 4, yRight);
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' liên tục và có đồ thị như hình vẽ bên dưới. Gọi ' + F.m('M') + ' và ' + F.m('m') + ' lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số trên đoạn ' + F.m('[0; 4]') + '. Tính giá trị của biểu thức ' + F.m('T = M + 2m') + '.' + svg,
                    ans: String(yRight + 2 * yCT)
                };
            } else if (mode === 2) {
                // Chuẩn Tự luận Câu 1 Mã 1101: Cho y = f(x) = x^3 - 6x^2 + c trên đoạn [2; 6].
                // y' = 3x^2 - 12x = 0 => x = 4 ∈ [2; 6]. Ta có f(2) = c - 16, f(4) = c - 32 (m), f(6) = c (M).
                // Khi c = 32: M = 32, m = 0 => 2M - 3m = 64 (Chuẩn 100% Đáp án Tự luận Mã 1101!)
                const cList = [32, 35, 40, 50];
                const c = cList[(seed + step) % cList.length];
                const maxM = c;
                const minM = c - 32;
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x) = x<sup>3</sup> &minus; 6x<sup>2</sup> + ' + c) + '. Gọi ' + F.m('M') + ' và ' + F.m('m') + ' lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số ' + F.m('y = f(x)') + ' trên đoạn ' + F.m('[2; 6]') + '. Tính giá trị của biểu thức ' + F.m('P = 2M &minus; 3m') + '.',
                    ans: String(2 * maxM - 3 * minM)
                };
            } else {
                // Chuẩn Tự luận Câu 3 Mã 1102: Cho y = f(x) = 2x^3 - 6x^2 - c trên đoạn [-2; 1].
                // y' = 6x^2 - 12x = 0 => x = 0 ∈ [-2; 1]. f(-2) = -40 - c (m), f(0) = -c (M), f(1) = -4 - c.
                // Hiệu M - m = (-c) - (-40 - c) = 40 (Luôn bằng 40 với mọi c, chuẩn 100% Đáp án Tự luận Mã 1102!)
                const k = ((seed + step) % 3) + 1; // 1, 2, 3 (Khi k=1 là đúng đề gốc: 2x^3 - 6x^2 - 15 => M - m = 40)
                const a2 = 2 * k;
                const b6 = 6 * k;
                const c  = ((step % 5) + 12);
                const diffMM = 40 * k;
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x) = ' + a2 + 'x<sup>3</sup> &minus; ' + b6 + 'x<sup>2</sup> &minus; ' + c) + '. Gọi ' + F.m('M') + ' và ' + F.m('m') + ' lần lượt là giá trị lớn nhất và giá trị nhỏ nhất của hàm số ' + F.m('y = f(x)') + ' trên đoạn ' + F.m('[&minus;2; 1]') + '. Tính giá trị của biểu thức ' + F.m('T = M &minus; m') + '.',
                    ans: String(diffMM)
                };
            }
        }
    });

    // ===================================================================
    // MODULE NT12-05: CẮT 4 GÓC TẤM BÌA 50×120 & 30×80 GẤP HỘP KHÔNG NẮP (CÂU 1 PHẦN III MÃ 1101 & CÂU 4 MÃ 1102)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_nt_cat_bia_50_120_va_30_80', {
        title: '📦 Toán thực tế Hình học: Cắt 4 góc tấm bìa 50×120 cm & 30×80 cm gấp hộp V_max (Câu 1 & 4 Phần III)',
        shortLabel: '📦 Hộp bìa 50×120 & 30×80',
        keywords: /chiều rộng 50cm và chiều dài 120cm|chiều rộng 30cm và chiều dài 80cm/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 1 Phần III Mã 1101 (50 x 120 cm, làm tròn đến hàng đơn vị => 11 cm)
            // & Câu 4 Phần III Mã 1102 (30 x 80 cm, làm tròn đến hàng phần chục => 6,7 cm)
            if (step % 2 === 0) {
                const scaleK = ((seed + step) % 2) + 1; // 1 hoặc 2 (Khi scaleK=1: 50cm x 120cm => x ≈ 10,93 => làm tròn hàng đơn vị = 11!)
                const W = 50 * scaleK;
                const L = 120 * scaleK;
                const xOpt = ((L + W) - Math.sqrt(L * L - L * W + W * W)) / 6;
                const ansUnit = Math.round(xOpt);
                return {
                    q: '[Toán 12] Từ một tấm bìa hình chữ nhật có chiều rộng ' + F.m(W + ' cm') + ' và chiều dài ' + F.m(L + ' cm') + ', người ta cắt ở bốn góc bốn hình vuông bằng nhau có cạnh ' + F.m('x (cm)') + ' và gấp lại để tạo thành một chiếc hộp hình hộp chữ nhật không nắp. Tìm ' + F.m('x') + ' để thể tích chiếc hộp là lớn nhất (kết quả làm tròn đến hàng đơn vị).',
                    ans: String(ansUnit)
                };
            } else {
                // Chuẩn Mã 1102: 30cm x 80cm => x = (110 - sqrt(6400 - 2400 + 900))/6 = (110 - 70)/6 = 40/6 ≈ 6,7 cm!
                const mult = ((seed + step) % 3) + 1; // 1, 2, 3
                const W = 30 * mult;
                const L = 80 * mult;
                const xOpt = (40 * mult) / 6;
                const ansTenth = Math.round(xOpt * 10) / 10;
                return {
                    q: '[Toán 12] Từ một tấm bìa hình chữ nhật có chiều rộng ' + F.m(W + ' cm') + ' và chiều dài ' + F.m(L + ' cm') + ', người ta cắt ở bốn góc bốn hình vuông bằng nhau có cạnh ' + F.m('x (cm)') + ' và gấp lại để tạo thành chiếc hộp hình hộp chữ nhật không nắp. Tìm ' + F.m('x') + ' để thể tích chiếc hộp là lớn nhất (kết quả làm tròn đến hàng phần chục).',
                    ans: String(ansTenth)
                };
            }
        }
    });

    // ===================================================================
    // MODULE NT12-06: TIỆM CẬN XIÊN y = ax + b CỦA HÀM PHÂN THỨC (CÂU 2 PHẦN III MÃ 1101 & CÂU 3 MÃ 1102)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_nt_tiem_can_xien_2a_tru_b', {
        title: '📏 Tiệm cận xiên: Tính 2a − b và a + 2b từ đường tiệm cận xiên y = ax + b (Phần III Mã 1101 & 1102)',
        shortLabel: '📏 TC Xiên (2a−b & a+2b)',
        keywords: /x\^2\+3x\/x-2|x\^2\+3x-4\/x\+2|2a-b|a\+2b/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            if (step % 2 === 0) {
                // Chuẩn Câu 2 Phần III Mã 1101:
                // f(x) = (x^2 + m*x) / (x - d) = x + (m + d) + d*(m + d)/(x - d) => TCX: y = a*x + b với a = 1, b = m + d.
                // Khi m = 3, d = 2: f(x) = (x^2 + 3x)/(x - 2) => a = 1, b = 5 => 2a - b = 2(1) - 5 = -3 (Chuẩn 100% Đáp án Mã 1101!)
                const m = ((seed + step) % 5) + 2; // 2..6 (3 ở đề gốc)
                const d = ((step % 4) + 2);        // 2..5 (2 ở đề gốc)
                const a = 1;
                const b = m + d;
                const ansVal = (2 * a) - b;
                return {
                    q: '[Toán 12] Đồ thị hàm số ' + F.m('f(x) = ' + F.frac('x<sup>2</sup> + ' + m + 'x', 'x &minus; ' + d)) + ' có đường tiệm cận xiên là đường thẳng ' + F.m('y = ax + b') + '. Tính giá trị của biểu thức ' + F.m('T = 2a &minus; b') + '.',
                    ans: String(ansVal)
                };
            } else {
                // Chuẩn Câu 3 Phần III Mã 1102:
                // y = (x^2 + m*x - 4) / (x + d) = x + (m - d) + R/(x + d) => TCX: y = a*x + b với a = 1, b = m - d.
                // Khi m = 3, d = 2: y = (x^2 + 3x - 4)/(x + 2) => a = 1, b = 1 => a + 2b = 1 + 2(1) = 3 (Chuẩn 100% Đáp án Mã 1102!)
                const m = ((seed + step) % 5) + 3; // 3..7 (3 ở đề gốc)
                const d = ((step % 3) + 1);        // 1..3 (2 ở đề gốc)
                const a = 1;
                const b = m - d;
                const ansVal = a + (2 * b);
                return {
                    q: '[Toán 12] Đồ thị hàm số ' + F.m('y = ' + F.frac('x<sup>2</sup> + ' + m + 'x &minus; 4', 'x + ' + d)) + ' có đường tiệm cận xiên là đường thẳng ' + F.m('y = ax + b') + '. Tính giá trị của biểu thức ' + F.m('T = a + 2b') + '.',
                    ans: String(ansVal)
                };
            }
        }
    });

    // ===================================================================
    // MODULE NT12-07: MÔ HÌNH DỊCH BỆNH LOGISTIC N(t) = K / (1 + A·e^(-rt)) (CÂU 4 MÃ 1101 & CÂU 2 MÃ 1102 PHẦN III)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_nt_dich_benh_logistic_tuan', {
        title: '🦠 Toán thực tế Dịch tễ Logistic: Tuần thứ mấy tốc độ lây lan N\'(t) lớn nhất (Phần III Mã 1101 & 1102)',
        shortLabel: '🦠 Dịch bệnh Logistic N(t)',
        keywords: /1\+99e\^-0,46t|1\+49e\^-0,8t|tuần thứ mấy|tốc độ lây lan/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 4 Phần III Mã 1101 & Câu 2 Phần III Mã 1102:
            // Hàm số Logistic: N(t) = K / (1 + A * e^(-r*t)) với t >= 0 (tuần).
            // Đạo hàm cấp hai N''(t) = 0 (tốc độ lây lan N'(t) đạt GTLN tại điểm uốn) khi và chỉ khi:
            // A * e^(-r*t) = 1 <=> t = (ln A) / r!
            // - Mã 1101: K = 1000, A = 99, r = 0,46 => t = ln(99) / 0,46 ≈ 9,989 => làm tròn đến hàng đơn vị là tuần thứ 10!
            // - Mã 1102: K = 5000, A = 49, r = 0,8  => t = ln(49) / 0,8  ≈ 4,865 => làm tròn đến hàng đơn vị là tuần thứ 5!
            const cases = [
                { K: 1000, A: 99, rStr: '0,46', rVal: 0.46, ansWeek: 10 }, // Chuẩn Mã 1101: 10
                { K: 5000, A: 49, rStr: '0,8',  rVal: 0.8,  ansWeek: 5 },  // Chuẩn Mã 1102: 5
                { K: 2000, A: 80, rStr: '0,55', rVal: 0.55, ansWeek: 8 },  // ln(80)/0.55 ≈ 7.97 => 8
                { K: 4000, A: 54, rStr: '0,5',  rVal: 0.5,  ansWeek: 8 }   // ln(54)/0.5  ≈ 7.98 => 8
            ];
            const pk = cases[(seed + step) % cases.length];
            const tPeak = Math.round(Math.log(pk.A) / pk.rVal);

            return {
                q: '[Toán 12] Sau khi phát hiện một dịch bệnh, các chuyên gia y tế ước tính số người nhiễm bệnh theo thời gian ' + F.m('t') + ' (tính bằng tuần) được cho bởi hàm số ' + F.m('N(t) = ' + F.frac(pk.K, '1 + ' + pk.A + 'e<sup>&minus;' + pk.rStr + 't</sup>')) + ' với ' + F.m('t &ge; 0') + '. Hàm số ' + F.m('N\'(t)') + ' biểu thị tốc độ lây lan của dịch bệnh tại thời điểm ' + F.m('t') + '. Hỏi vào khoảng tuần thứ mấy (làm tròn kết quả đến hàng đơn vị) thì tốc độ lây lan của dịch bệnh là lớn nhất?',
                ans: String(tPeak)
            };
        }
    });

    // ===================================================================
    // MODULE NT12-08: TỰ LUẬN CỬA SỔ BẢO TÀNG HÌNH PARABOL LẮP KÍNH MÀU ABCD (CÂU 2 MÃ 1101 & CÂU 1 MÃ 1102 PHẦN IV)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_nt_cua_so_parabol_bao_tang', {
        title: '🏛️ Tự luận Toán thực tế: Diện tích lớn nhất tấm kính màu trong cửa sổ Parabol Bảo tàng (Kèm SVG)',
        shortLabel: '🏛️ Cửa sổ Parabol Bảo tàng',
        keywords: /bảo tàng khoa học|cửa sổ trang trí lớn hình parabol|tấm kính màu|71,6|120,7/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 2 Phần IV Mã 1101 (Đáp số: 71,6 m^2) & Câu 1 Phần IV Mã 1102 (Đáp số: 120,7 m^2):
            // Gắn hệ trục tọa độ Oxy với Oy là trục đối xứng, Ox là mặt sàn nhà:
            // Đỉnh Parabol I(0; hPeak), đi qua điểm H(xPt; yPt) => (P): y = -a * x^2 + hPeak với a = (hPeak - yPt) / xPt^2.
            // Thanh ngang cách sàn yBar (m) => Chiều cao thực dụng từ thanh ngang lên đỉnh là H_eff = hPeak - yBar.
            // Tấm kính hình chữ nhật ABCD có C(c; -a*c^2 + hPeak) => Diện tích S(c) = 2c * (H_eff - a*c^2).
            // Đạo hàm S'(c) = 2*H_eff - 6*a*c^2 = 0 <=> c = sqrt(H_eff / (3*a)).
            // Diện tích lớn nhất: S_max = (4 * H_eff / 3) * sqrt(H_eff / (3*a))!
            const cases = [
                { hPeak: 15, xPt: 5, yPt: 10, yBar: 3, ansArea: 71.6 },  // Chuẩn 100% Mã 1101: a = 1/5, H_eff = 12 => S_max = 32*sqrt(5) ≈ 71.6 m^2!
                { hPeak: 20, xPt: 6, yPt: 14, yBar: 4, ansArea: 120.7 }, // Chuẩn 100% Mã 1102: a = 1/6, H_eff = 16 => S_max = 256*sqrt(2)/3 ≈ 120.7 m^2!
                { hPeak: 15, xPt: 3, yPt: 6,  yBar: 3, ansArea: 32.0 },  // a = 1, H_eff = 12 => c = 2 => S_max = 32 m^2 (Nguyên đẹp!)
                { hPeak: 28, xPt: 4, yPt: 20, yBar: 4, ansArea: 128.0 }  // a = 1/2, H_eff = 24 => c = 4 => S_max = 128 m^2 (Nguyên đẹp!)
            ];
            const pk  = cases[(seed + step) % cases.length];
            const svg = G12_NT_UI.parabolaWindow(pk.hPeak, pk.xPt, pk.yPt, pk.yBar);

            return {
                q: '[Toán 12] Một bảo tàng khoa học muốn lắp đặt một cửa sổ trang trí lớn hình parabol trên bức tường phía tây của tòa nhà. Cửa sổ này có đỉnh cao nhất cách sàn nhà ' + F.m(pk.hPeak + ' m') + '. Một điểm ' + F.m('H') + ' trên khung cửa sổ cách trục đối xứng của cửa sổ ' + F.m(pk.xPt + ' m') + ' và có độ cao ' + F.m(pk.yPt + ' m') + ' so với sàn nhà. Bên trong khung cửa sổ, người thiết kế đặt một tấm kính màu hình chữ nhật ' + F.m('ABCD') + ' với hai đỉnh trên ' + F.m('C, D') + ' nằm trên đường cong parabol và hai đỉnh dưới ' + F.m('A, B') + ' nằm trên thanh ngang cố định cách sàn nhà ' + F.m(pk.yBar + ' m') + ' (như hình vẽ). Diện tích lớn nhất của tấm kính màu là bao nhiêu mét vuông (làm tròn kết quả đến hàng phần chục)?' + svg,
                ans: String(pk.ansArea)
            };
        }
    });

    // ===================================================================
    // MODULE NT12-09: TỰ LUẬN KHOẢNG CÁCH AB GIỮA HAI ĐIỂM CỰC TRỊ HÀM PHÂN THỨC (CÂU 3 MÃ 1101 & CÂU 2 MÃ 1102 PHẦN IV)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_nt_do_dai_ab_hai_cuc_tri_phan_thuc', {
        title: '📐 Tự luận Cực trị: Tính khoảng cách AB giữa hai điểm cực trị của hàm bậc 2/bậc 1 (Phần IV Mã 1101 & 1102)',
        shortLabel: '📐 Độ dài AB 2 cực trị Phân thức',
        keywords: /đạt cực trị tại hai điểm a và b|tính độ dài đoạn ab|-x\^2\+x\+5\/x\+2|x\^2-5x\+7\/x-2/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 3 Phần IV Mã 1101 (y = (-x^2 + x + 5)/(x + 2) => A(-1; 3), B(-3; 7) => AB^2 = 20, AB = 2*sqrt(5))
            // & Câu 2 Phần IV Mã 1102 (y = (x^2 - 5x + 7)/(x - 2) => A(1; -3), B(3; 1) => AB^2 = 20, AB = 2*sqrt(5))
            // Tổng quát: Cho y = x + m + k^2 / (x - x0).
            // Đạo hàm y' = 1 - k^2 / (x - x0)^2 = 0 <=> x - x0 = ±k => x_B - x_A = 2*k.
            // Vì đường thẳng đi qua 2 điểm cực trị của y = (x^2 + bx + c)/(x - x0) luôn có hệ số góc bằng 2 (do y = (2x + b)/1 tại cực trị),
            // nên y_B - y_A = 2 * (x_B - x_A) = 4*k!
            // Suy ra: AB = sqrt((2k)^2 + (4k)^2) = 2*k*sqrt(5) => AB^2 = 20 * k^2 (Nguyên tuyệt đối!)
            const k = ((seed + step) % 3) + 1; // 1, 2, 3 (Khi k = 1 => AB = 2*sqrt(5), AB^2 = 20 chuẩn cả 2 mã đề!)
            const x0 = 2;
            const cConst = 6 + (k * k);        // Để x^2 - 5x + cConst = (x - 2)(x - 3) + k^2
            const abSq = 20 * k * k;

            if (step % 2 === 0) {
                return {
                    q: '[Toán 12] Biết rằng đồ thị hàm số ' + F.m('y = ' + F.frac('x<sup>2</sup> &minus; 5x + ' + cConst, 'x &minus; 2')) + ' đạt cực trị tại hai điểm ' + F.m('A') + ' và ' + F.m('B') + '. Tính bình phương độ dài đoạn thẳng ' + F.m('AB') + ' (tức tính giá trị của ' + F.m('AB<sup>2</sup>') + ').',
                    ans: String(abSq)
                };
            } else {
                const abRound = Math.round(2 * k * Math.sqrt(5) * 100) / 100;
                return {
                    q: '[Toán 12] Biết rằng đồ thị hàm số ' + F.m('y = ' + F.frac('&minus;x<sup>2</sup> + x + ' + (4 + k * k), 'x + 2')) + ' đạt cực trị tại hai điểm ' + F.m('A') + ' và ' + F.m('B') + '. Độ dài đoạn thẳng ' + F.m('AB') + ' có dạng ' + F.m('m' + F.sqrt('5')) + ' (với ' + F.m('m &isin; N*') + '). Tìm giá trị của ' + F.m('m') + '.',
                    ans: String(2 * k)
                };
            }
        }
    });

    if (typeof window.refreshAdminTopicDropdown === 'function') {
        window.refreshAdminTopicDropdown();
    }
})();
(function() {
    if (typeof window.registerMathTopicGenerator !== 'function') return;
    const F = window.IMATHS_FMT;

    // ===================================================================
    // BỘ HÀM VẼ ĐỒ THỊ & BẢNG BIẾN THIÊN VECTOR SVG CHÍNH XÁC TUYỆT ĐỐI
    // ===================================================================
    const G12_IMG3_SVG = {
        // 1. Đồ thị đạo hàm f'(x) cắt trục Ox chính xác tại 3 hoành độ x1, x2, x3 (Chuẩn Câu 1)
        derivCubicExact: function(x1, x2, x3) {
            // Trục Ox: y = 75; Trục Oy: x = 85.
            // Đường cong Bézier đi qua chính xác 3 giao điểm trên trục hoành: (58, 75), (112, 75), (186, 75)
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 140" width="235" height="135">' +
                '<line x1="20" y1="75" x2="228" y2="75" stroke="#94a3b8" stroke-width="1.5"/>' +
                '<polygon points="233,75 225,71 225,79" fill="#94a3b8"/>' +
                '<line x1="85" y1="130" x2="85" y2="12" stroke="#94a3b8" stroke-width="1.5"/>' +
                '<polygon points="85,7 81,15 89,15" fill="#94a3b8"/>' +
                '<path d="M 42 126 C 48 102, 53 88, 58 75 C 68 48, 74 42, 82 42 C 92 42, 102 56, 112 75 C 125 100, 136 114, 150 114 C 164 114, 176 100, 186 75 C 194 55, 201 36, 208 18" fill="none" stroke="#38bdf8" stroke-width="2.4" stroke-linecap="round"/>' +
                '<circle cx="58" cy="75" r="3.2" fill="#fde047"/>' +
                '<circle cx="112" cy="75" r="3.2" fill="#fde047"/>' +
                '<circle cx="186" cy="75" r="3.2" fill="#4ade80"/>' +
                '<text x="48" y="90" fill="#fde047" font-size="10.5" font-weight="bold">' + x1 + '</text>' +
                '<text x="103" y="90" fill="#fde047" font-size="10.5" font-weight="bold">' + x2 + '</text>' +
                '<text x="188" y="90" fill="#4ade80" font-size="10.5" font-weight="bold">' + x3 + '</text>' +
                '<text x="74" y="88" fill="#cbd5e1" font-size="10">O</text>' +
                '<text x="92" y="18" fill="#cbd5e1" font-size="11" font-style="italic">y</text>' +
                '<text x="222" y="90" fill="#cbd5e1" font-size="11" font-style="italic">x</text>' +
                '<text x="210" y="30" fill="#fde047" font-size="11" font-weight="bold" font-style="italic">f\'(x)</text>' +
            '</svg></div>';
        },

        // 2. Bảng biến thiên vẽ bằng Vector SVG có mũi tên chéo chuẩn SGK (Chuẩn Câu 2)
        bbtVectorExact: function(x1, x2, yCT, yCD) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 255 132" width="240" height="128">' +
                '<rect x="10" y="8" width="235" height="116" rx="6" fill="#040b16" stroke="#475569" stroke-width="1.6"/>' +
                '<line x1="10" y1="34" x2="245" y2="34" stroke="#475569" stroke-width="1.4"/>' +
                '<line x1="10" y1="58" x2="245" y2="58" stroke="#475569" stroke-width="1.4"/>' +
                '<line x1="42" y1="8" x2="42" y2="124" stroke="#475569" stroke-width="1.4"/>' +
                // Cột nhãn x, y', y
                '<text x="26" y="25" fill="#fde047" font-size="11.5" font-weight="bold" font-style="italic" text-anchor="middle">x</text>' +
                '<text x="26" y="50" fill="#38bdf8" font-size="11.5" font-weight="bold" font-style="italic" text-anchor="middle">y\'</text>' +
                '<text x="26" y="95" fill="#c084fc" font-size="11.5" font-weight="bold" font-style="italic" text-anchor="middle">y</text>' +
                // Hàng x: -∞, x1, x2, +∞
                '<text x="62" y="25" fill="#e2e8f0" font-size="11" text-anchor="middle">&minus;&infin;</text>' +
                '<text x="118" y="25" fill="#fde047" font-size="11.5" font-weight="bold" text-anchor="middle">' + x1 + '</text>' +
                '<text x="176" y="25" fill="#4ade80" font-size="11.5" font-weight="bold" text-anchor="middle">' + x2 + '</text>' +
                '<text x="226" y="25" fill="#e2e8f0" font-size="11" text-anchor="middle">+&infin;</text>' +
                // Hàng y': -, 0, +, 0, -
                '<text x="90" y="50" fill="#f87171" font-size="13" font-weight="bold" text-anchor="middle">&minus;</text>' +
                '<text x="118" y="50" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">0</text>' +
                '<text x="147" y="50" fill="#4ade80" font-size="13" font-weight="bold" text-anchor="middle">+</text>' +
                '<text x="176" y="50" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">0</text>' +
                '<text x="202" y="50" fill="#f87171" font-size="13" font-weight="bold" text-anchor="middle">&minus;</text>' +
                // Giá trị hàng y: +∞, yCT, yCD, -∞
                '<text x="62" y="75" fill="#e2e8f0" font-size="11" text-anchor="middle">+&infin;</text>' +
                '<text x="118" y="116" fill="#fde047" font-size="11.5" font-weight="bold" text-anchor="middle">' + yCT + '</text>' +
                '<text x="176" y="75" fill="#4ade80" font-size="11.5" font-weight="bold" text-anchor="middle">' + yCD + '</text>' +
                '<text x="226" y="116" fill="#e2e8f0" font-size="11" text-anchor="middle">&minus;&infin;</text>' +
                // 3 Mũi tên biến thiên chuẩn SGK
                '<line x1="74" y1="76" x2="105" y2="105" stroke="#94a3b8" stroke-width="1.5"/>' +
                '<polygon points="108,108 100,105 105,99" fill="#94a3b8"/>' +
                '<line x1="129" y1="106" x2="163" y2="76" stroke="#4ade80" stroke-width="1.7"/>' +
                '<polygon points="166,73 162,81 157,75" fill="#4ade80"/>' +
                '<line x1="187" y1="76" x2="213" y2="105" stroke="#94a3b8" stroke-width="1.5"/>' +
                '<polygon points="216,108 208,105 213,99" fill="#94a3b8"/>' +
            '</svg></div>';
        },

        // 3. Đồ thị hàm số bậc ba a < 0 có cực tiểu (-x0; yCT), cắt Oy tại (0; y0), cực đại (x0; yCD) (Chuẩn Câu 3)
        cubicNegExact: function(x0, yCT, yCD) {
            // Hệ trục: Gốc O(120, 92). Cực tiểu tại (88, 110), Điểm uốn trên Oy tại (120, 74), Cực đại tại (152, 38)
            // Đường cong Bézier đối xứng đi qua chính xác (88, 110), (120, 74), (152, 38) và có tiếp tuyến nằm ngang tại 2 cực trị
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 145" width="235" height="138">' +
                '<line x1="25" y1="92" x2="225" y2="92" stroke="#94a3b8" stroke-width="1.5"/>' +
                '<polygon points="230,92 222,88 222,96" fill="#94a3b8"/>' +
                '<line x1="120" y1="136" x2="120" y2="12" stroke="#94a3b8" stroke-width="1.5"/>' +
                '<polygon points="120,7 116,15 124,15" fill="#94a3b8"/>' +
                // Đường gióng nét đứt từ cực tiểu (-x0; yCT) và cực đại (x0; yCD)
                '<line x1="88" y1="92" x2="88" y2="110" stroke="#fde047" stroke-width="1.3" stroke-dasharray="3 2"/>' +
                '<line x1="88" y1="110" x2="120" y2="110" stroke="#fde047" stroke-width="1.3" stroke-dasharray="3 2"/>' +
                '<line x1="152" y1="92" x2="152" y2="38" stroke="#4ade80" stroke-width="1.3" stroke-dasharray="3 2"/>' +
                '<line x1="120" y1="38" x2="152" y2="38" stroke="#4ade80" stroke-width="1.3" stroke-dasharray="3 2"/>' +
                // Đường cong bậc ba chính xác tuyệt đối
                '<path d="M 62 14 C 71 78, 79 110, 88 110 C 104 110, 136 38, 152 38 C 161 38, 169 70, 178 134" fill="none" stroke="#38bdf8" stroke-width="2.4" stroke-linecap="round"/>' +
                '<circle cx="88" cy="110" r="3.3" fill="#fde047"/>' +
                '<circle cx="152" cy="38" r="3.5" fill="#4ade80"/>' +
                '<text x="75" y="87" fill="#fde047" font-size="10.5" font-weight="bold">&minus;' + x0 + '</text>' +
                '<text x="149" y="106" fill="#4ade80" font-size="10.5" font-weight="bold">' + x0 + '</text>' +
                '<text x="124" y="114" fill="#fde047" font-size="10.5" font-weight="bold">' + yCT + '</text>' +
                '<text x="106" y="42" fill="#4ade80" font-size="10.5" font-weight="bold">' + yCD + '</text>' +
                '<text x="108" y="105" fill="#cbd5e1" font-size="10">O</text>' +
                '<text x="108" y="20" fill="#cbd5e1" font-size="11" font-style="italic">y</text>' +
                '<text x="218" y="106" fill="#cbd5e1" font-size="11" font-style="italic">x</text>' +
            '</svg></div>';
        }
    };

    // ===================================================================
    // MODULE 1 (CHUẨN CÂU 1): ĐỌC ĐỒ THỊ ĐẠO HÀM f'(x) TÌM KHOẢNG ĐƠN ĐIỆU
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_web_c1_do_thi_dao_ham_f_phay', {
        title: '📉 Câu 1: Xét tính đơn điệu của hàm số y = f(x) từ đồ thị đạo hàm f\'(x) (Kèm Đồ thị SVG chuẩn)',
        shortLabel: '📉 Câu 1: Đồ thị f\'(x)',
        keywords: /f'\(x\) có đồ thị như hình vẽ|nghịch biến trên khoảng/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 1: Đồ thị f'(x) cắt trục hoành tại 3 điểm x1 < 0 < x2 < x3.
            // Trên khoảng (x2; x3), đồ thị f'(x) nằm hoàn toàn phía dưới trục Ox (f'(x) < 0) nên hàm số f(x) nghịch biến trên (x2; x3).
            // Khi x1 = -1, x2 = 1, x3 = 4 => nghịch biến trên (1; 4) (Đúng 100% Câu 1 trong ảnh!)
            const x1 = -(((seed + step) % 3) + 1);       // -1, -2, -3 (-1 ở đề gốc)
            const x2 = ((step % 2) + 1);                 // 1, 2       (1 ở đề gốc)
            const x3 = x2 + ((seed * 2 + step) % 4) + 3; // 4..8       (4 ở đề gốc)
            const svg = G12_IMG3_SVG.derivCubicExact(x1, x2, x3);

            if (step % 2 === 0) {
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' xác định, có đạo hàm trên ' + F.m('R') + ' và ' + F.m('f\'(x)') + ' có đồ thị như hình vẽ bên dưới. Biết trên đoạn ' + F.m('[' + x1 + '; ' + x3 + ']') + ', hàm số ' + F.m('y = f(x)') + ' nghịch biến trên khoảng ' + F.m('(a; b)') + '. Tính tổng ' + F.m('T = a + b') + '.' + svg,
                    ans: String(x2 + x3)
                };
            } else {
                // Hỏi khoảng đồng biến (x1; x2) nơi đồ thị f'(x) nằm phía trên trục Ox
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' xác định, có đạo hàm trên ' + F.m('R') + ' và ' + F.m('f\'(x)') + ' có đồ thị như hình vẽ bên dưới. Biết trên đoạn ' + F.m('[' + x1 + '; ' + x3 + ']') + ', hàm số ' + F.m('y = f(x)') + ' đồng biến trên khoảng ' + F.m('(a; b)') + '. Tính độ dài ' + F.m('L = b &minus; a') + ' của khoảng đó.' + svg,
                    ans: String(x2 - x1)
                };
            }
        }
    });

    // ===================================================================
    // MODULE 2 (CHUẨN CÂU 2): ĐỌC BẢNG BIẾN THIÊN TÌM KHOẢNG ĐỒNG BIẾN & CỰC TRỊ
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_web_c2_bbt_chuan_sgk', {
        title: '📊 Câu 2: Xác định khoảng đồng biến & Cực trị từ Bảng biến thiên (Kèm BBT Vector SVG chuẩn)',
        shortLabel: '📊 Câu 2: BBT Đồng biến',
        keywords: /bảng biến thiên như sau|hàm số đồng biến trên khoảng/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 2: Bảng biến thiên có x1 = 0, x2 = 2 (hoặc tổng quát), y' đổi dấu (-) -> 0 -> (+) -> 0 -> (-).
            // Hàm số đồng biến trên khoảng (x1; x2) (tức (0; 2) ở đề gốc), đạt cực tiểu yCT tại x1 và cực đại yCD tại x2.
            const x1  = (step % 2 === 0) ? 0 : -1;
            const x2  = x1 + (((seed + step) % 4) + 2); // Khi x1=0, x2=2 là đúng y hệt Câu 2 trong ảnh!
            const yCT = ((step % 3) + 1);               // 1, 2, 3 (1 ở đề gốc)
            const yCD = yCT + ((seed * 2 + step) % 4) + 3; // 4..9 (4 ở đề gốc)
            const svg = G12_IMG3_SVG.bbtVectorExact(x1, x2, yCT, yCD);

            if (step % 2 === 0) {
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' có bảng biến thiên như hình vẽ bên dưới. Biết hàm số đồng biến trên khoảng ' + F.m('(a; b)') + ', hãy tính tổng ' + F.m('T = a + b') + '.' + svg,
                    ans: String(x1 + x2)
                };
            } else {
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' có bảng biến thiên như hình vẽ bên dưới. Tính hiệu ' + F.m('P = y<sub>CĐ</sub> &minus; x<sub>CĐ</sub>') + ' giữa giá trị cực đại và điểm cực đại của hàm số.' + svg,
                    ans: String(yCD - x2)
                };
            }
        }
    });

    // ===================================================================
    // MODULE 3 (CHUẨN CÂU 3): ĐƯỜNG THẲNG ĐI QUA ĐIỂM CỰC ĐẠI CỦA ĐỒ THỊ BẬC BA
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_web_c3_do_thi_bac_ba_cuc_tri', {
        title: '📈 Câu 3: Đường thẳng đi qua điểm cực đại của đồ thị hàm số bậc ba (Kèm Đồ thị SVG chuẩn)',
        shortLabel: '📈 Câu 3: Đồ thị Bậc ba',
        keywords: /đi qua điểm cực đại của đồ thị|đường cong trong hình bên/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 3: Đồ thị hàm bậc ba y = f(x) có điểm cực tiểu (-x0; yCT) và điểm cực đại M(x0; yCD).
            // Khi x0 = 1, yCT = -1, yCD = 3: Điểm cực đại của đồ thị là M(1; 3), thuộc đường thẳng y = x + 2 (Đáp án C Câu 3!).
            const x0  = ((seed + step) % 2) + 1;          // 1 hoặc 2 (1 ở đề gốc)
            const yCT = -(((step % 2) + 1));              // -1 hoặc -2 (-1 ở đề gốc)
            const yCD = ((seed * 2 + step) % 4) + 3;      // 3, 4, 5, 6 (3 ở đề gốc)
            const svg = G12_IMG3_SVG.cubicNegExact(x0, yCT, yCD);

            if (step % 2 === 0) {
                // Đường thẳng y = x + m đi qua điểm cực đại M(x0; yCD) <=> m = yCD - x0 (Khi x0=1, yCD=3 => m = 2, tức y = x + 2!)
                const mVal = yCD - x0;
                return {
                    q: '[Toán 12] Cho hàm số bậc ba ' + F.m('y = f(x)') + ' có đồ thị là đường cong trong hình bên dưới. Biết đường thẳng ' + F.m('d: y = x + m') + ' đi qua điểm cực đại của đồ thị hàm số đã cho, hãy tìm giá trị của tham số ' + F.m('m') + '.' + svg,
                    ans: String(mVal)
                };
            } else {
                // Tính hệ số góc k của đường thẳng đi qua 2 điểm cực trị A(-x0; yCT) và B(x0; yCD): k = (yCD - yCT) / (2*x0)
                // Chọn yCD = 2*k*x0 + yCT để hệ số góc nguyên đẹp
                const kSlope = ((seed + step) % 3) + 2; // 2, 3, 4
                const yCD_nice = (2 * kSlope * x0) + yCT;
                const svgNice  = G12_IMG3_SVG.cubicNegExact(x0, yCT, yCD_nice);
                return {
                    q: '[Toán 12] Cho hàm số bậc ba ' + F.m('y = f(x)') + ' có đồ thị là đường cong trong hình bên dưới. Đường thẳng đi qua hai điểm cực trị của đồ thị hàm số có hệ số góc ' + F.m('k') + ' bằng bao nhiêu?' + svgNice,
                    ans: String(kSlope)
                };
            }
        }
    });

    if (typeof window.refreshAdminTopicDropdown === 'function') {
        window.refreshAdminTopicDropdown();
    }
})();
(function() {
    if (typeof window.registerMathTopicGenerator !== 'function') return;
    const F = window.IMATHS_FMT;

    // ===================================================================
    // BỘ HÀM VẼ BẢNG BIẾN THIÊN & ĐỒ THỊ VECTOR SVG CHÍNH XÁC TUYỆT ĐỐI (CÂU 7 -> 12)
    // ===================================================================
    const G12_IMG712_SVG = {
        // 1. Bảng biến thiên Câu 7: Có đường gạch đôi || tại x = xAsym, nhánh trái yLeft -> +∞, nhánh phải yRightMin -> yRightMax
        bbtAsymptoteExact: function(xAsym, yLeft, yRightMin, yRightMax) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 255 135" width="240" height="130">' +
                '<rect x="10" y="8" width="235" height="118" rx="6" fill="#040b16" stroke="#475569" stroke-width="1.6"/>' +
                '<line x1="10" y1="34" x2="245" y2="34" stroke="#475569" stroke-width="1.4"/>' +
                '<line x1="10" y1="58" x2="245" y2="58" stroke="#475569" stroke-width="1.4"/>' +
                '<line x1="48" y1="8" x2="48" y2="126" stroke="#475569" stroke-width="1.4"/>' +
                // Đường gạch sọc đôi || tại x = xAsym kéo dài từ dòng f'(x) xuống hết dòng f(x)
                '<line x1="144" y1="34" x2="144" y2="126" stroke="#f87171" stroke-width="1.5"/>' +
                '<line x1="149" y1="34" x2="149" y2="126" stroke="#f87171" stroke-width="1.5"/>' +
                // Cột nhãn x, f'(x), f(x)
                '<text x="29" y="25" fill="#fde047" font-size="11" font-weight="bold" font-style="italic" text-anchor="middle">x</text>' +
                '<text x="29" y="50" fill="#38bdf8" font-size="10.5" font-weight="bold" font-style="italic" text-anchor="middle">f\'(x)</text>' +
                '<text x="29" y="96" fill="#c084fc" font-size="10.5" font-weight="bold" font-style="italic" text-anchor="middle">f(x)</text>' +
                // Hàng x: -∞, xAsym, +∞
                '<text x="66" y="25" fill="#e2e8f0" font-size="11" text-anchor="middle">&minus;&infin;</text>' +
                '<text x="146.5" y="25" fill="#fde047" font-size="11.5" font-weight="bold" text-anchor="middle">' + xAsym + '</text>' +
                '<text x="226" y="25" fill="#e2e8f0" font-size="11" text-anchor="middle">+&infin;</text>' +
                // Hàng f'(x): + || +
                '<text x="98" y="50" fill="#4ade80" font-size="13" font-weight="bold" text-anchor="middle">+</text>' +
                '<text x="194" y="50" fill="#4ade80" font-size="13" font-weight="bold" text-anchor="middle">+</text>' +
                // Nhánh trái: từ yLeft đi lên +∞
                '<text x="62" y="116" fill="#fde047" font-size="11.5" font-weight="bold" text-anchor="middle">' + yLeft + '</text>' +
                '<text x="128" y="74" fill="#e2e8f0" font-size="10.5" font-weight="bold" text-anchor="middle">+&infin;</text>' +
                '<line x1="74" y1="112" x2="114" y2="76" stroke="#38bdf8" stroke-width="1.7"/>' +
                '<polygon points="118,72 114,80 109,75" fill="#38bdf8"/>' +
                // Nhánh phải: từ yRightMin đi lên yRightMax
                '<text x="162" y="116" fill="#4ade80" font-size="11.5" font-weight="bold" text-anchor="middle">' + yRightMin + '</text>' +
                '<text x="230" y="74" fill="#fde047" font-size="11.5" font-weight="bold" text-anchor="middle">' + yRightMax + '</text>' +
                '<line x1="174" y1="112" x2="216" y2="76" stroke="#38bdf8" stroke-width="1.7"/>' +
                '<polygon points="220,72 216,80 211,75" fill="#38bdf8"/>' +
            '</svg></div>';
        },

        // 2. Đồ thị Câu 12: Hàm bậc ba y = x^3 - 3x - c trên đoạn [-2; 2] nằm phía dưới trục Ox
        // Khớp 100% hình gốc: (-2; yMin), CĐ(-1; yMax), cắt Oy tại (0; yMid), CT(1; yMin), (2; yMax)
        cubicSegmentNegExact: function(yMax, yMid, yMin) {
            // Hệ tọa độ chuẩn: O(125, 32). x = -2 -> 61; x = -1 -> 93; x = 0 -> 125; x = 1 -> 157; x = 2 -> 189
            // y = 0 -> 32; y = yMax (-1) -> 50; y = yMid (-3) -> 86; y = yMin (-5) -> 122
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 148" width="235" height="140">' +
                // Trục Ox (ở phía trên) và trục Oy
                '<line x1="22" y1="32" x2="226" y2="32" stroke="#94a3b8" stroke-width="1.5"/>' +
                '<polygon points="231,32 223,28 223,36" fill="#94a3b8"/>' +
                '<line x1="125" y1="142" x2="125" y2="10" stroke="#94a3b8" stroke-width="1.5"/>' +
                '<polygon points="125,5 121,13 129,13" fill="#94a3b8"/>' +
                // Các đường gióng nét đứt chuẩn theo hình Câu 12
                '<line x1="61" y1="32" x2="61" y2="122" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="93" y1="32" x2="93" y2="50" stroke="#fde047" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="157" y1="32" x2="157" y2="122" stroke="#fde047" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="189" y1="32" x2="189" y2="50" stroke="#fde047" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="93" y1="50" x2="189" y2="50" stroke="#fde047" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="61" y1="122" x2="157" y2="122" stroke="#f87171" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                // Đường cong bậc ba khớp tuyệt đối đạo hàm Hermite - Bézier tại 5 điểm (-2;yMin), (-1;yMax), (0;yMid), (1;yMin), (2;yMax)
                '<path d="M 57 136 L 61 122 C 71.7 68, 82.3 50, 93 50 C 103.7 50, 146.3 122, 157 122 C 167.7 122, 178.3 104, 189 50 L 196 14" fill="none" stroke="#38bdf8" stroke-width="2.4" stroke-linecap="round"/>' +
                // Các điểm nút trên đồ thị
                '<circle cx="61" cy="122" r="3" fill="#f87171"/>' +
                '<circle cx="93" cy="50" r="3.4" fill="#fde047"/>' +
                '<circle cx="125" cy="86" r="3" fill="#cbd5e1"/>' +
                '<circle cx="157" cy="122" r="3.4" fill="#f87171"/>' +
                '<circle cx="189" cy="50" r="3" fill="#fde047"/>' +
                // Nhãn hoành độ trên trục Ox: -2, -1, O, 1, 2
                '<text x="53" y="26" fill="#e2e8f0" font-size="10.5" font-weight="bold">&minus;2</text>' +
                '<text x="86" y="26" fill="#fde047" font-size="10.5" font-weight="bold">&minus;1</text>' +
                '<text x="113" y="26" fill="#cbd5e1" font-size="10.5" font-style="italic">O</text>' +
                '<text x="154" y="26" fill="#fde047" font-size="10.5" font-weight="bold">1</text>' +
                '<text x="182" y="26" fill="#e2e8f0" font-size="10.5" font-weight="bold">2</text>' +
                // Nhãn tung độ trên trục Oy: yMax (-1), yMid (-3), yMin (-5)
                '<text x="129" y="62" fill="#fde047" font-size="10.5" font-weight="bold">' + yMax + '</text>' +
                '<text x="129" y="89" fill="#cbd5e1" font-size="10.5" font-weight="bold">' + yMid + '</text>' +
                '<text x="129" y="135" fill="#f87171" font-size="10.5" font-weight="bold">' + yMin + '</text>' +
                '<text x="112" y="16" fill="#cbd5e1" font-size="11" font-style="italic">y</text>' +
                '<text x="220" y="45" fill="#cbd5e1" font-size="11" font-style="italic">x</text>' +
            '</svg></div>';
        }
    };

    // ===================================================================
    // MODULE CÂU 7: XÁC ĐỊNH ĐƯỜNG TIỆM CẬN ĐỨNG & TIỆM CẬN NGANG TỪ BBT (CHUẨN CÂU 7)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_web1_c7_bbt_tiem_can_dung', {
        title: '📊 Câu 7: Tìm phương trình đường tiệm cận đứng & tiệm cận ngang từ Bảng biến thiên (Kèm BBT SVG chuẩn)',
        shortLabel: '📊 Câu 7: BBT Tiệm cận',
        keywords: /đường tiệm cận đứng của đồ thị hàm số có phương trình là|bảng biến thiên/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 7:
            // Tại x = xAsym (x = 1): lim(x -> xAsym-) f(x) = +∞ => x = xAsym là đường tiệm cận đứng!
            // Khi x -> -∞: f(x) -> yLeft (2); khi x -> +∞: f(x) -> yRightMax (5) => có 2 đường TCN là y = yLeft và y = yRightMax.
            const xAsym     = ((seed + step) % 4) + 1;        // 1, 2, 3, 4 (1 ở đề gốc)
            const yLeft     = ((step % 3) + 2);               // 2, 3, 4    (2 ở đề gốc)
            const yRightMin = yLeft + 1;                      // 3, 4, 5    (3 ở đề gốc)
            const yRightMax = yRightMin + ((seed * 2 + step) % 3) + 2; // 5..9 (5 ở đề gốc)
            const svg       = G12_IMG712_SVG.bbtAsymptoteExact(xAsym, yLeft, yRightMin, yRightMax);

            if (step % 2 === 0) {
                // Hỏi trực tiếp phương trình đường tiệm cận đứng x = x0 (Khi xAsym = 1 => Đáp số = 1 chuẩn Đáp án D Câu 7!)
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' có bảng biến thiên như hình vẽ bên dưới. Đường tiệm cận đứng của đồ thị hàm số có phương trình là ' + F.m('x = x<sub>0</sub>') + '. Tìm giá trị của ' + F.m('x<sub>0</sub>') + '.' + svg,
                    ans: String(xAsym)
                };
            } else {
                // Hỏi tổng của hoành độ tiệm cận đứng x = xAsym và các tung độ tiệm cận ngang (y = yLeft, y = yRightMax)
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' có bảng biến thiên như hình vẽ bên dưới. Biết đồ thị hàm số có tiệm cận đứng ' + F.m('x = x<sub>0</sub>') + ' và hai đường tiệm cận ngang ' + F.m('y = y<sub>1</sub>, y = y<sub>2</sub>') + '. Tính tổng ' + F.m('T = x<sub>0</sub> + y<sub>1</sub> + y<sub>2</sub>') + '.' + svg,
                    ans: String(xAsym + yLeft + yRightMax)
                };
            }
        }
    });

    // ===================================================================
    // MODULE CÂU 8: HÀM SỐ LUÔN ĐỒNG BIẾN TRÊN R (CHUẨN CÂU 8)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_web1_c8_ham_dong_bien_tren_r', {
        title: '📈 Câu 8: Nhận diện hàm số luôn đồng biến trên R (y = x³ + bx + c với b > 0)',
        shortLabel: '📈 Câu 8: Đồng biến trên R',
        keywords: /hàm số nào dưới đây luôn đồng biến trên r|x\^3\+5x\+1/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 8: Trong 4 hàm số:
            // (1) y = x^2 - 2x + 2025 (hàm bậc 2 không đơn điệu trên R)
            // (2) y = x^3 + b*x + 1 (với b > 0 => y' = 3x^2 + b > 0, ∀x ∈ R => Luôn đồng biến trên R!)
            // (3) y = (2x - 1)/(x + 1) (không xác định tại x = -1)
            // (4) y = 1/4*x^4 + 2x^2 + 2010 (hàm bậc 4 đổi dấu đạo hàm tại x = 0)
            const bPos = ((seed + step) % 7) + 3; // 3..9 (5 ở đề gốc)
            const x0   = ((step % 3) + 1);        // 1, 2, 3

            if (step % 2 === 0) {
                return {
                    q: '[Toán 12] Cho 4 hàm số sau:<br>' +
                       '(1) ' + F.m('y = x<sup>2</sup> &minus; 2x + 2025') + ';<br>' +
                       '(2) ' + F.m('y = x<sup>3</sup> + ' + bPos + 'x + 1') + ';<br>' +
                       '(3) ' + F.m('y = ' + F.frac('2x &minus; 1', 'x + 1')) + ';<br>' +
                       '(4) ' + F.m('y = ' + F.frac('1', '4') + 'x<sup>4</sup> + 2x<sup>2</sup> + 2010') + '.<br>' +
                       'Gọi ' + F.m('f(x)') + ' là hàm số duy nhất trong 4 hàm số trên luôn đồng biến trên ' + F.m('R') + '. Tính giá trị đạo hàm ' + F.m('f\'(' + x0 + ')') + '.',
                    ans: String(3 * x0 * x0 + bPos)
                };
            } else {
                // Tìm số giá trị nguyên của m ∈ [-K; K] để hàm số y = x^3 + m*x + 1 luôn đồng biến trên R (y' = 3x^2 + m >= 0, ∀x ∈ R <=> m >= 0)
                const K = ((seed + step) % 8) + 5; // 5..12
                // m ∈ {0; 1; 2; ...; K} => có K + 1 giá trị nguyên!
                return {
                    q: '[Toán 12] Có tất cả bao nhiêu giá trị nguyên của tham số ' + F.m('m &isin; [&minus;' + K + '; ' + K + ']') + ' để hàm số ' + F.m('y = x<sup>3</sup> + mx + 1') + ' luôn đồng biến trên ' + F.m('R') + '?',
                    ans: String(K + 1)
                };
            }
        }
    });

    // ===================================================================
    // MODULE CÂU 9: VẬT PHÓNG THẲNG ĐỨNG ĐẠT ĐỘ CAO LỚN NHẤT h(t) (CHUẨN CÂU 9)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_web1_c9_vat_phong_thang_dung', {
        title: '🚀 Câu 9: Thời gian vật phóng thẳng đứng đạt độ cao lớn nhất h(t) = 2 + 24,5t − 4,9t²',
        shortLabel: '🚀 Câu 9: Độ cao h(t) max',
        keywords: /phóng thẳng đứng lên trên|24,5t-4,9t\^2|độ cao lớn nhất/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 9: h(t) = h0 + v0*t - 4,9*t^2.
            // Đạo hàm h'(t) = v0 - 9,8*t = 0 <=> t = v0 / 9,8 (giây).
            // Khi h0 = 2, v0 = 24,5 m/s => t = 24,5 / 9,8 = 2,5 giây (Chuẩn 100% Đáp án C Câu 9!)
            const tPeakList = [2.5, 1.5, 2, 3, 3.5, 4];
            const tPeak = tPeakList[(seed + step) % tPeakList.length];
            const v0    = Math.round(9.8 * tPeak * 10) / 10; // 24.5, 14.7, 19.6, 29.4, 34.3, 39.2
            const h0    = ((step % 4) + 2);                  // 2, 3, 4, 5 m (2m ở đề gốc)
            const v0Str = String(v0).replace('.', ',');

            return {
                q: '[Toán 12] Một vật được phóng thẳng đứng lên trên từ độ cao ' + F.m(h0 + ' m') + ' với vận tốc ban đầu là ' + F.m(v0Str + ' m/s') + '. Trong Vật lí, khi bỏ qua sức cản của không khí thì độ cao ' + F.m('h') + ' (mét) của vật sau ' + F.m('t') + ' (giây) được cho bởi công thức ' + F.m('h(t) = ' + h0 + ' + ' + v0Str + 't &minus; 4,9t<sup>2</sup>') + '. Sau bao nhiêu giây thì vật đạt độ cao lớn nhất?',
                ans: String(tPeak)
            };
        }
    });

    // ===================================================================
    // MODULE CÂU 10: TIỆM CẬN XIÊN y = ax + b CỦA ĐỒ THỊ HÀM BẬC 2 / BẬC 1 (CHUẨN CÂU 10)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_web1_c10_tiem_can_xien_a_3b', {
        title: '📐 Câu 10: Tìm tiệm cận xiên y = ax + b của y = (x² − 2x + 2)/(x − 1) và tính a + 3b',
        shortLabel: '📐 Câu 10: Tiệm cận xiên a+3b',
        keywords: /x\^2-2x\+2\/x-1|tiệm cận xiên y = ax \+ b|a\+3b/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 10:
            // Chia đa thức: y = (a*x^2 + m*x + c) / (x - x0) = a*x + (m + a*x0) + R / (x - x0).
            // Suy ra tiệm cận xiên y = a*x + b với b = m + a*x0.
            // Khi a = 1, m = -2, x0 = 1, c = 2: y = (x^2 - 2x + 2)/(x - 1) = x - 1 + 1/(x - 1) => a = 1, b = -1 => a + 3b = -2 (Chuẩn 100% Đáp án B Câu 10!)
            const a  = 1;
            const x0 = ((step % 3) + 1);                // 1, 2, 3 (1 ở đề gốc)
            const b  = -(((seed + step) % 4) + 1);      // -1, -2, -3, -4 (-1 ở đề gốc)
            const m  = b - (a * x0);                    // Hệ số của x trên tử số
            const c  = (x0 * x0) - (m * x0) + 1;        // Để tử số không chia hết cho (x - x0)
            const mStr = (m >= 0) ? ('+ ' + m + 'x') : ('&minus; ' + Math.abs(m) + 'x');
            const ansVal = a + (3 * b);

            return {
                q: '[Toán 12] Đồ thị hàm số ' + F.m('y = ' + F.frac('x<sup>2</sup> ' + mStr + ' + ' + c, 'x &minus; ' + x0)) + ' có đường tiệm cận xiên là ' + F.m('y = ax + b') + '. Giá trị của biểu thức ' + F.m('T = a + 3b') + ' bằng bao nhiêu?',
                ans: String(ansVal)
            };
        }
    });

    // ===================================================================
    // MODULE CÂU 11: TỌA ĐỘ GIAO ĐIỂM CỦA ĐỒ THỊ HÀM PHÂN THỨC VỚI TRỤC Oy (CHUẨN CÂU 11)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_web1_c11_giao_diem_truc_oy', {
        title: '📍 Câu 11: Tìm tọa độ giao điểm của đồ thị hàm số y = (2x − 3)/(x + 1) với trục Oy',
        shortLabel: '📍 Câu 11: Giao điểm trục Oy',
        keywords: /2x-3\/x\+1|cắt trục oy tại điểm có tọa độ/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 11: Cho hàm số y = (a*x - b)/(x + 1).
            // Giao điểm với trục Oy: cho x = 0 => y = -b => Tọa độ giao điểm là M(0; -b).
            // Khi a = 2, b = 3: y = (2x - 3)/(x + 1) cắt trục Oy tại (0; -3) (Chuẩn 100% Đáp án B Câu 11!)
            const a = ((seed + step) % 5) + 2; // 2..6 (2 ở đề gốc)
            const b = ((step % 6) + 3);        // 3..8 (3 ở đề gốc)
            const yInt = -b;

            return {
                q: '[Toán 12] Đồ thị của hàm số ' + F.m('y = ' + F.frac(a + 'x &minus; ' + b, 'x + 1')) + ' cắt trục tung ' + F.m('Oy') + ' tại điểm có tọa độ là ' + F.m('M(x<sub>0</sub>; y<sub>0</sub>)') + '. Tính giá trị của ' + F.m('y<sub>0</sub>') + ' (tung độ giao điểm).',
                ans: String(yInt)
            };
        }
    });

    // ===================================================================
    // MODULE CÂU 12: TÌM GTNN m VÀ GTLN M TRÊN ĐOẠN [-2; 2] TỪ ĐỒ THỊ (CHUẨN CÂU 12)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_web1_c12_max_min_do_thi_am', {
        title: '📉 Câu 12: Tìm GTNN m và GTLN M của hàm số y = f(x) trên đoạn [−2; 2] từ đồ thị (Kèm Đồ thị SVG chuẩn)',
        shortLabel: '📉 Câu 12: Max–Min trên [−2; 2]',
        keywords: /trên đoạn \[-2; 2\]|m=-5; m=-1|xác định và liên tục trên r/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 12:
            // Hàm số y = x^3 - 3x - c trên đoạn [-2; 2] (với c >= 3 để toàn bộ đồ thị trên [-2; 2] nằm dưới trục Ox):
            // - Đạt GTLN tại x = -1 và x = 2: M = 2 - c (Khi c = 3 => M = -1).
            // - Cắt trục Oy tại (0; -c) (Khi c = 3 => yMid = -3).
            // - Đạt GTNN tại x = -2 và x = 1: m = -2 - c (Khi c = 3 => m = -5).
            // Đúng 100% Đáp án B Câu 12: m = -5; M = -1!
            const c    = ((seed + step) % 4) + 3; // 3, 4, 5, 6 (3 là chuẩn đề gốc!)
            const yMax = 2 - c;                   // -1, -2, -3, -4 (GTLN M)
            const yMid = -c;                      // -3, -4, -5, -6 (Giao điểm Oy)
            const yMin = -2 - c;                  // -5, -6, -7, -8 (GTNN m)
            const svg  = G12_IMG712_SVG.cubicSegmentNegExact(yMax, yMid, yMin);

            if (step % 2 === 0) {
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' xác định và liên tục trên ' + F.m('R') + ', có đồ thị như hình vẽ bên dưới. Gọi ' + F.m('m') + ' và ' + F.m('M') + ' lần lượt là giá trị nhỏ nhất và giá trị lớn nhất của hàm số ' + F.m('y = f(x)') + ' trên đoạn ' + F.m('[&minus;2; 2]') + '. Tính tổng ' + F.m('T = m + M') + '.' + svg,
                    ans: String(yMin + yMax)
                };
            } else {
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' xác định và liên tục trên ' + F.m('R') + ', có đồ thị như hình vẽ bên dưới. Gọi ' + F.m('m') + ' và ' + F.m('M') + ' lần lượt là giá trị nhỏ nhất và giá trị lớn nhất của hàm số ' + F.m('y = f(x)') + ' trên đoạn ' + F.m('[&minus;2; 2]') + '. Tính giá trị của biểu thức ' + F.m('P = 2M &minus; m') + '.' + svg,
                    ans: String(2 * yMax - yMin)
                };
            }
        }
    });

    if (typeof window.refreshAdminTopicDropdown === 'function') {
        window.refreshAdminTopicDropdown();
    }
})();
//================
(function() {
    if (typeof window.registerMathTopicGenerator !== 'function') return;
    const F = window.IMATHS_FMT;

    // ===================================================================
    // BỘ HÀM VẼ BẢNG BIẾN THIÊN & ĐỒ THỊ VECTOR SVG CHÍNH XÁC TUYỆT ĐỐI (CÂU 5 -> 10)
    // ===================================================================
    const G12_IMG510_SVG = {
        // 1. Đồ thị hàm số f(x) = -x^3 + 3a^2*x + c trên đoạn [0; 2a] (Chuẩn Câu 5)
        cubicOnSegment0To2a: function(aVal, y0, yMax, yEnd) {
            const twoA = 2 * aVal;
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 142" width="235" height="135">' +
                '<line x1="25" y1="82" x2="225" y2="82" stroke="#94a3b8" stroke-width="1.5"/>' +
                '<polygon points="230,82 222,78 222,86" fill="#94a3b8"/>' +
                '<line x1="65" y1="132" x2="65" y2="12" stroke="#94a3b8" stroke-width="1.5"/>' +
                '<polygon points="65,7 61,15 69,15" fill="#94a3b8"/>' +
                // Đường gióng tại đỉnh cực đại (a; yMax) và đầu mút phải (2a; yEnd)
                '<line x1="125" y1="82" x2="125" y2="32" stroke="#fde047" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="65" y1="32" x2="125" y2="32" stroke="#fde047" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="185" y1="82" x2="185" y2="122" stroke="#f87171" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                '<line x1="65" y1="122" x2="185" y2="122" stroke="#f87171" stroke-width="1.2" stroke-dasharray="3 2"/>' +
                // Đường cong bậc ba f(x) = -x^3 + 3a^2*x trên đoạn [0; 2a]
                '<path d="M 65 82 C 85 45, 105 32, 125 32 C 145 32, 165 65, 185 122" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>' +
                '<circle cx="65" cy="82" r="3.2" fill="#cbd5e1"/>' +
                '<circle cx="125" cy="32" r="3.6" fill="#fde047"/>' +
                '<circle cx="185" cy="122" r="3.4" fill="#f87171"/>' +
                '<text x="53" y="96" fill="#cbd5e1" font-size="10.5" font-weight="bold">' + y0 + '</text>' +
                '<text x="121" y="96" fill="#fde047" font-size="10.5" font-weight="bold">' + aVal + '</text>' +
                '<text x="180" y="76" fill="#f87171" font-size="10.5" font-weight="bold">' + twoA + '</text>' +
                '<text x="48" y="36" fill="#fde047" font-size="10.5" font-weight="bold">' + yMax + '</text>' +
                '<text x="42" y="126" fill="#f87171" font-size="10.5" font-weight="bold">' + yEnd + '</text>' +
                '<text x="72" y="18" fill="#cbd5e1" font-size="11" font-style="italic">y</text>' +
                '<text x="218" y="96" fill="#cbd5e1" font-size="11" font-style="italic">x</text>' +
            '</svg></div>';
        },

        // 2. Bảng biến thiên hàm trùng phương bậc 4 (4 khoảng, 3 cực trị: -a, 0, a) chuẩn Câu 6
        bbtQuarticExact: function(aVal, yCT, yCD) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 265 135" width="248" height="130">' +
                '<rect x="8" y="8" width="249" height="118" rx="6" fill="#040b16" stroke="#475569" stroke-width="1.6"/>' +
                '<line x1="8" y1="34" x2="257" y2="34" stroke="#475569" stroke-width="1.4"/>' +
                '<line x1="8" y1="58" x2="257" y2="58" stroke="#475569" stroke-width="1.4"/>' +
                '<line x1="38" y1="8" x2="38" y2="126" stroke="#475569" stroke-width="1.4"/>' +
                // Cột nhãn x, y', y
                '<text x="23" y="25" fill="#fde047" font-size="11" font-weight="bold" font-style="italic" text-anchor="middle">x</text>' +
                '<text x="23" y="50" fill="#38bdf8" font-size="11" font-weight="bold" font-style="italic" text-anchor="middle">y\'</text>' +
                '<text x="23" y="95" fill="#c084fc" font-size="11" font-weight="bold" font-style="italic" text-anchor="middle">y</text>' +
                // Hàng x: -∞, -a, 0, a, +∞
                '<text x="55" y="25" fill="#e2e8f0" font-size="10.5" text-anchor="middle">&minus;&infin;</text>' +
                '<text x="102" y="25" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">&minus;' + aVal + '</text>' +
                '<text x="148" y="25" fill="#4ade80" font-size="11" font-weight="bold" text-anchor="middle">0</text>' +
                '<text x="194" y="25" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">' + aVal + '</text>' +
                '<text x="240" y="25" fill="#e2e8f0" font-size="10.5" text-anchor="middle">+&infin;</text>' +
                // Hàng y': -, 0, +, 0, -, 0, +
                '<text x="78" y="50" fill="#f87171" font-size="12.5" font-weight="bold" text-anchor="middle">&minus;</text>' +
                '<text x="102" y="50" fill="#f8fafc" font-size="10.5" font-weight="bold" text-anchor="middle">0</text>' +
                '<text x="125" y="50" fill="#4ade80" font-size="12.5" font-weight="bold" text-anchor="middle">+</text>' +
                '<text x="148" y="50" fill="#f8fafc" font-size="10.5" font-weight="bold" text-anchor="middle">0</text>' +
                '<text x="171" y="50" fill="#f87171" font-size="12.5" font-weight="bold" text-anchor="middle">&minus;</text>' +
                '<text x="194" y="50" fill="#f8fafc" font-size="10.5" font-weight="bold" text-anchor="middle">0</text>' +
                '<text x="217" y="50" fill="#4ade80" font-size="12.5" font-weight="bold" text-anchor="middle">+</text>' +
                // Hàng y: +∞ ↘ yCT ↗ yCD ↘ yCT ↗ +∞
                '<text x="55" y="74" fill="#e2e8f0" font-size="10.5" text-anchor="middle">+&infin;</text>' +
                '<text x="102" y="117" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">' + yCT + '</text>' +
                '<text x="148" y="74" fill="#4ade80" font-size="11" font-weight="bold" text-anchor="middle">' + yCD + '</text>' +
                '<text x="194" y="117" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">' + yCT + '</text>' +
                '<text x="240" y="74" fill="#e2e8f0" font-size="10.5" text-anchor="middle">+&infin;</text>' +
                // 4 mũi tên biến thiên chuẩn xác
                '<line x1="64" y1="77" x2="91" y2="106" stroke="#94a3b8" stroke-width="1.5"/>' +
                '<polygon points="94,109 86,106 91,100" fill="#94a3b8"/>' +
                '<line x1="112" y1="106" x2="138" y2="77" stroke="#4ade80" stroke-width="1.6"/>' +
                '<polygon points="141,74 138,82 133,77" fill="#4ade80"/>' +
                '<line x1="158" y1="77" x2="183" y2="106" stroke="#94a3b8" stroke-width="1.5"/>' +
                '<polygon points="186,109 178,106 183,100" fill="#94a3b8"/>' +
                '<line x1="204" y1="106" x2="230" y2="77" stroke="#4ade80" stroke-width="1.6"/>' +
                '<polygon points="233,74 230,82 225,77" fill="#4ade80"/>' +
            '</svg></div>';
        },

        // 3. Đồ thị hàm phân thức y = (ax + b)/(cx + d) kèm 2 đường tiệm cận và Tâm đối xứng I (Chuẩn Câu 7 & Câu 8)
        hyperbolaCenterExact: function(xAsymLbl, yAsymLbl) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 245 140" width="235" height="134">' +
                '<line x1="18" y1="84" x2="228" y2="84" stroke="#94a3b8" stroke-width="1.4"/>' +
                '<polygon points="233,84 225,80 225,88" fill="#94a3b8"/>' +
                '<line x1="135" y1="132" x2="135" y2="12" stroke="#94a3b8" stroke-width="1.4"/>' +
                '<polygon points="135,7 131,15 139,15" fill="#94a3b8"/>' +
                // Tiệm cận đứng x = x0 (x=95) và Tiệm cận ngang y = y0 (y=52)
                '<line x1="95" y1="12" x2="95" y2="132" stroke="#f87171" stroke-width="1.5" stroke-dasharray="4 3"/>' +
                '<line x1="18" y1="52" x2="225" y2="52" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="4 3"/>' +
                // Hai nhánh Hyperbol đối xứng qua tâm I(95, 52)
                '<path d="M 22 44 Q 78 40 87 14" fill="none" stroke="#38bdf8" stroke-width="2.4" stroke-linecap="round"/>' +
                '<path d="M 103 130 Q 112 64 222 58" fill="none" stroke="#38bdf8" stroke-width="2.4" stroke-linecap="round"/>' +
                '<circle cx="95" cy="52" r="4" fill="#fde047"/>' +
                '<text x="78" y="46" fill="#fde047" font-size="11" font-weight="bold">I</text>' +
                '<text x="68" y="98" fill="#f87171" font-size="10" font-weight="bold">' + xAsymLbl + '</text>' +
                '<text x="140" y="48" fill="#4ade80" font-size="10" font-weight="bold">' + yAsymLbl + '</text>' +
                '<text x="124" y="97" fill="#cbd5e1" font-size="10">O</text>' +
            '</svg></div>';
        },

        // 4. Bảng biến thiên hàm số y = x + k^2/x có vạch sọc đôi || tại x = 0 (Chuẩn Câu 9)
        bbtRationalSumExact: function(kVal) {
            const twoK = 2 * kVal;
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 265 135" width="248" height="130">' +
                '<rect x="8" y="8" width="249" height="118" rx="6" fill="#040b16" stroke="#475569" stroke-width="1.6"/>' +
                '<line x1="8" y1="34" x2="257" y2="34" stroke="#475569" stroke-width="1.4"/>' +
                '<line x1="8" y1="58" x2="257" y2="58" stroke="#475569" stroke-width="1.4"/>' +
                '<line x1="38" y1="8" x2="38" y2="126" stroke="#475569" stroke-width="1.4"/>' +
                // Vạch sọc đôi || tại điểm gián đoạn x = 0
                '<line x1="146" y1="34" x2="146" y2="126" stroke="#f87171" stroke-width="1.5"/>' +
                '<line x1="150" y1="34" x2="150" y2="126" stroke="#f87171" stroke-width="1.5"/>' +
                // Cột nhãn
                '<text x="23" y="25" fill="#fde047" font-size="11" font-weight="bold" font-style="italic" text-anchor="middle">x</text>' +
                '<text x="23" y="50" fill="#38bdf8" font-size="11" font-weight="bold" font-style="italic" text-anchor="middle">y\'</text>' +
                '<text x="23" y="95" fill="#c084fc" font-size="11" font-weight="bold" font-style="italic" text-anchor="middle">y</text>' +
                // Hàng x: -∞, -k, 0, k, +∞
                '<text x="54" y="25" fill="#e2e8f0" font-size="10.5" text-anchor="middle">&minus;&infin;</text>' +
                '<text x="100" y="25" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">&minus;' + kVal + '</text>' +
                '<text x="148" y="25" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">0</text>' +
                '<text x="196" y="25" fill="#4ade80" font-size="11" font-weight="bold" text-anchor="middle">' + kVal + '</text>' +
                '<text x="242" y="25" fill="#e2e8f0" font-size="10.5" text-anchor="middle">+&infin;</text>' +
                // Hàng y': +, 0, -, ||, -, 0, +
                '<text x="76" y="50" fill="#4ade80" font-size="12" font-weight="bold" text-anchor="middle">+</text>' +
                '<text x="100" y="50" fill="#f8fafc" font-size="10.5" font-weight="bold" text-anchor="middle">0</text>' +
                '<text x="124" y="50" fill="#f87171" font-size="12.5" font-weight="bold" text-anchor="middle">&minus;</text>' +
                '<text x="172" y="50" fill="#f87171" font-size="12.5" font-weight="bold" text-anchor="middle">&minus;</text>' +
                '<text x="196" y="50" fill="#f8fafc" font-size="10.5" font-weight="bold" text-anchor="middle">0</text>' +
                '<text x="220" y="50" fill="#4ade80" font-size="12" font-weight="bold" text-anchor="middle">+</text>' +
                // Hàng y
                '<text x="100" y="74" fill="#fde047" font-size="10.5" font-weight="bold" text-anchor="middle">&minus;' + twoK + '</text>' +
                '<text x="196" y="117" fill="#4ade80" font-size="10.5" font-weight="bold" text-anchor="middle">' + twoK + '</text>' +
                '<line x1="60" y1="110" x2="88" y2="78" stroke="#4ade80" stroke-width="1.5"/>' +
                '<line x1="110" y1="78" x2="138" y2="112" stroke="#f87171" stroke-width="1.6"/>' +
                '<line x1="158" y1="74" x2="186" y2="108" stroke="#f87171" stroke-width="1.6"/>' +
                '<line x1="206" y1="108" x2="236" y2="74" stroke="#4ade80" stroke-width="1.5"/>' +
            '</svg></div>';
        },

        // 5. Bảng biến thiên hàm bậc ba a > 0 (-∞ ↗ yCD ↘ yCT ↗ +∞) chuẩn Câu 10
        bbtCubicPosExact: function(xCD, yCD, xCT, yCT) {
            return '<div class="im-svg-box"><svg xmlns="http://www.w3.org/2000/svg" class="im-sci-svg" viewBox="0 0 255 132" width="240" height="128">' +
                '<rect x="10" y="8" width="235" height="116" rx="6" fill="#040b16" stroke="#475569" stroke-width="1.6"/>' +
                '<line x1="10" y1="34" x2="245" y2="34" stroke="#475569" stroke-width="1.4"/>' +
                '<line x1="10" y1="58" x2="245" y2="58" stroke="#475569" stroke-width="1.4"/>' +
                '<line x1="46" y1="8" x2="46" y2="124" stroke="#475569" stroke-width="1.4"/>' +
                // Cột nhãn x, f'(x), f(x)
                '<text x="28" y="25" fill="#fde047" font-size="11" font-weight="bold" font-style="italic" text-anchor="middle">x</text>' +
                '<text x="28" y="50" fill="#38bdf8" font-size="10.5" font-weight="bold" font-style="italic" text-anchor="middle">f\'(x)</text>' +
                '<text x="28" y="95" fill="#c084fc" font-size="10.5" font-weight="bold" font-style="italic" text-anchor="middle">f(x)</text>' +
                // Hàng x: -∞, xCD, xCT, +∞
                '<text x="64" y="25" fill="#e2e8f0" font-size="11" text-anchor="middle">&minus;&infin;</text>' +
                '<text x="118" y="25" fill="#fde047" font-size="11.5" font-weight="bold" text-anchor="middle">' + xCD + '</text>' +
                '<text x="176" y="25" fill="#4ade80" font-size="11.5" font-weight="bold" text-anchor="middle">' + xCT + '</text>' +
                '<text x="226" y="25" fill="#e2e8f0" font-size="11" text-anchor="middle">+&infin;</text>' +
                // Hàng f'(x): +, 0, -, 0, +
                '<text x="91" y="50" fill="#4ade80" font-size="13" font-weight="bold" text-anchor="middle">+</text>' +
                '<text x="118" y="50" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">0</text>' +
                '<text x="147" y="50" fill="#f87171" font-size="13" font-weight="bold" text-anchor="middle">&minus;</text>' +
                '<text x="176" y="50" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">0</text>' +
                '<text x="202" y="50" fill="#4ade80" font-size="13" font-weight="bold" text-anchor="middle">+</text>' +
                // Hàng f(x): -∞ ↗ yCD ↘ yCT ↗ +∞
                '<text x="64" y="116" fill="#e2e8f0" font-size="11" text-anchor="middle">&minus;&infin;</text>' +
                '<text x="118" y="75" fill="#fde047" font-size="11.5" font-weight="bold" text-anchor="middle">' + yCD + '</text>' +
                '<text x="176" y="116" fill="#4ade80" font-size="11.5" font-weight="bold" text-anchor="middle">' + yCT + '</text>' +
                '<text x="226" y="75" fill="#e2e8f0" font-size="11" text-anchor="middle">+&infin;</text>' +
                // 3 Mũi tên biến thiên chuẩn SGK
                '<line x1="75" y1="108" x2="105" y2="77" stroke="#4ade80" stroke-width="1.6"/>' +
                '<polygon points="108,74 105,82 100,77" fill="#4ade80"/>' +
                '<line x1="129" y1="77" x2="162" y2="106" stroke="#f87171" stroke-width="1.6"/>' +
                '<polygon points="165,109 157,106 162,100" fill="#f87171"/>' +
                '<line x1="188" y1="108" x2="214" y2="77" stroke="#4ade80" stroke-width="1.6"/>' +
                '<polygon points="217,74 214,82 209,77" fill="#4ade80"/>' +
            '</svg></div>';
        }
    };

    // ===================================================================
    // MODULE CÂU 5: GIÁ TRỊ LỚN NHẤT CỦA HÀM SỐ f(x) = -x³ + 3x TRÊN ĐOẠN [0; 2]
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_web3_c5_gtln_bac_ba_tren_doan', {
        title: '📈 Câu 5: Tìm giá trị lớn nhất của hàm số f(x) = −x³ + 3x trên đoạn [0; 2] (Kèm Đồ thị SVG chuẩn)',
        shortLabel: '📈 Câu 5: GTLN f(x)=−x³+3x',
        keywords: /giá trị lớn nhất của hàm số f\(x\) = -x\^3 \+ 3x|trên đoạn \[0;2\]/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 5: Xét f(x) = -x^3 + 3*a^2*x + c trên đoạn [0; 2a] (với a >= 1).
            // Đạo hàm f'(x) = -3x^2 + 3*a^2 = 0 <=> x = a ∈ [0; 2a].
            // Ta có: f(0) = c; f(a) = 2*a^3 + c (GTLN); f(2a) = -2*a^3 + c (GTNN).
            // Khi a = 1, c = 0: f(x) = -x^3 + 3x trên [0; 2] có GTLN bằng 2 (Chuẩn 100% Đáp án D Câu 5!).
            const aVal = (step % 2 === 0) ? 1 : (((seed + step) % 3) + 1); // Ưu tiên a = 1 chuẩn đề gốc
            const cVal = (step % 4 === 0) ? 0 : (((seed * 2 + step) % 5) + 1);
            const coeff3a2 = 3 * aVal * aVal;
            const cStr = (cVal === 0) ? '' : (' + ' + cVal);
            const y0   = cVal;
            const yMax = (2 * aVal * aVal * aVal) + cVal;
            const yEnd = (-2 * aVal * aVal * aVal) + cVal;
            const svg  = G12_IMG510_SVG.cubicOnSegment0To2a(aVal, y0, yMax, yEnd);

            return {
                q: '[Toán 12] Giá trị lớn nhất của hàm số ' + F.m('f(x) = &minus;x<sup>3</sup> + ' + coeff3a2 + 'x' + cStr) + ' trên đoạn ' + F.m('[0; ' + (2 * aVal) + ']') + ' (minh họa như đồ thị bên dưới) bằng bao nhiêu?' + svg,
                ans: String(yMax)
            };
        }
    });

    // ===================================================================
    // MODULE CÂU 6: KHOẢNG NGHỊCH BIẾN TỪ BẢNG BIẾN THIÊN HÀM TRÙNG PHƯƠNG (CHUẨN CÂU 6)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_web3_c6_bbt_trung_phuong_nghich_bien', {
        title: '📊 Câu 6: Xét khoảng nghịch biến & cực trị từ Bảng biến thiên hàm trùng phương (Kèm BBT SVG chuẩn)',
        shortLabel: '📊 Câu 6: BBT Trùng phương',
        keywords: /cho hàm số y = f\(x\) có bảng biến thiên|-2 0 2|nghịch biến trên khoảng/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 6: BBT hàm trùng phương có x = -a, 0, a (với a = 2 ở đề gốc), y' đổi dấu (-, 0, +, 0, -, 0, +).
            // Hàm số nghịch biến trên (-∞; -a) và (0; a); đồng biến trên (-a; 0) và (a; +∞).
            const aVal = ((seed + step) % 4) + 1; // 1, 2, 3, 4 (2 ở đề gốc)
            const yCT  = -(((step % 3) + 1));     // -1, -2, -3 (-1 ở đề gốc)
            const yCD  = ((seed * 2 + step) % 4) + 1; // 1, 2, 3, 4 (1 ở đề gốc)
            const svg  = G12_IMG510_SVG.bbtQuarticExact(aVal, yCT, yCD);

            if (step % 2 === 0) {
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' có bảng biến thiên như hình vẽ bên dưới. Biết hàm số nghịch biến trên hai khoảng ' + F.m('(&minus;&infin;; m)') + ' và ' + F.m('(0; n)') + '. Tính hiệu ' + F.m('T = n &minus; m') + '.' + svg,
                    ans: String(aVal - (-aVal))
                };
            } else {
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' có bảng biến thiên như hình vẽ bên dưới. Biết trên đoạn ' + F.m('[&minus;' + aVal + '; ' + aVal + ']') + ', hàm số nghịch biến trên khoảng ' + F.m('(0; a)') + ' và đạt giá trị cực đại bằng ' + F.m('M') + '. Tính tổng ' + F.m('S = a + M') + '.' + svg,
                    ans: String(aVal + yCD)
                };
            }
        }
    });

    // ===================================================================
    // MODULE CÂU 7: SỐ ĐƯỜNG TIỆM CẬN CỦA ĐỒ THỊ HÀM SỐ y = (2x − 1)/(x + 1) (CHUẨN CÂU 7)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_web3_c7_so_duong_tiem_can', {
        title: '📏 Câu 7: Tìm số đường tiệm cận của đồ thị hàm số y = (2x − 1)/(x + 1) (Kèm Đồ thị SVG)',
        shortLabel: '📏 Câu 7: Số đường tiệm cận',
        keywords: /số đường tiệm cận của đồ thị hàm số|2x-1\/x\+1/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 7: Đồ thị hàm số y = (a*x - b)/(x + d) (với a*d + b != 0) có đúng 1 TCĐ (x = -d) và 1 TCN (y = a) => Tổng số đường tiệm cận là 2 (Đáp án C Câu 7!).
            const a = ((seed + step) % 5) + 2; // 2..6 (2 ở đề gốc)
            const d = ((step % 4) + 1);        // 1..4 (1 ở đề gốc)
            const b = ((seed * 2 + step) % 4) + 1;
            const svg = G12_IMG510_SVG.hyperbolaCenterExact('x=&minus;' + d, 'y=' + a);

            if (step % 2 === 0) {
                return {
                    q: '[Toán 12] Tổng số đường tiệm cận đứng và tiệm cận ngang của đồ thị hàm số ' + F.m('y = ' + F.frac(a + 'x &minus; ' + b, 'x + ' + d)) + ' (minh họa như hình vẽ) là bao nhiêu?' + svg,
                    ans: '2'
                };
            } else {
                // Hỏi tích hoặc tổng của giá trị tiệm cận đứng x0 = -d và tiệm cận ngang y0 = a cùng số đường tiệm cận k = 2
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = ' + F.frac(a + 'x &minus; ' + b, 'x + ' + d)) + ' có đồ thị ' + F.m('(C)') + ' như hình vẽ. Gọi ' + F.m('k') + ' là tổng số đường tiệm cận của ' + F.m('(C)') + ', ' + F.m('x = x<sub>0</sub>') + ' là tiệm cận đứng và ' + F.m('y = y<sub>0</sub>') + ' là tiệm cận ngang. Tính giá trị biểu thức ' + F.m('P = k + x<sub>0</sub> + y<sub>0</sub>') + '.' + svg,
                    ans: String(2 - d + a)
                };
            }
        }
    });

    // ===================================================================
    // MODULE CÂU 8: TỌA ĐỘ TÂM ĐỐI XỨNG I CỦA ĐỒ THỊ HÀM SỐ y = (3x − 1)/(2x + 3) (CHUẨN CÂU 8)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_web3_c8_tam_doi_xung_phan_thuc', {
        title: '🎯 Câu 8: Tìm tọa độ tâm đối xứng I của đồ thị hàm số y = (3x − 1)/(2x + 3) (Kèm Đồ thị SVG)',
        shortLabel: '🎯 Câu 8: Tâm đối xứng I',
        keywords: /tọa độ tâm đối xứng i của đồ thị hàm số|3x-1\/2x\+3/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 8: Đồ thị hàm số y = (a*x + b)/(c*x + d) có TCĐ x = -d/c và TCN y = a/c.
            // Tâm đối xứng là giao điểm 2 đường tiệm cận: I(-d/c; a/c).
            // Khi y = (3x - 1)/(2x + 3): I(-3/2; 3/2) (Đúng 100% Đáp án A Câu 8!).
            if (step % 2 === 0) {
                // Giữ đúng cấu trúc y = (a*x - 1)/(2x + d) với a, d lẻ để tâm I(-d/2; a/2)
                const a = ((seed + step) % 4) * 2 + 3; // 3, 5, 7, 9 (3 ở đề gốc)
                const d = ((step % 3) * 2) + 3;        // 3, 5, 7    (3 ở đề gốc)
                // Tọa độ tâm I(x0; y0) = (-d/2; a/2) => 2*y0 - 2*x0 = a + d (Nguyên tuyệt đối!)
                const svg = G12_IMG510_SVG.hyperbolaCenterExact('x=&minus;' + d + '/2', 'y=' + a + '/2');
                return {
                    q: '[Toán 12] Biết tọa độ tâm đối xứng của đồ thị hàm số ' + F.m('y = ' + F.frac(a + 'x &minus; 1', '2x + ' + d)) + ' là điểm ' + F.m('I(x<sub>0</sub>; y<sub>0</sub>)') + ' (giao điểm của hai đường tiệm cận như hình vẽ). Tính giá trị của biểu thức ' + F.m('T = 2y<sub>0</sub> &minus; 2x<sub>0</sub>') + '.' + svg,
                    ans: String(a + d)
                };
            } else {
                // Tâm đối xứng có tọa độ nguyên I(-d; a) của hàm y = (a*x - 1)/(x + d)
                const a = ((seed + step) % 5) + 2;
                const d = ((step % 5) + 2);
                const svg = G12_IMG510_SVG.hyperbolaCenterExact('x=&minus;' + d, 'y=' + a);
                return {
                    q: '[Toán 12] Gọi ' + F.m('I(x<sub>0</sub>; y<sub>0</sub>)') + ' là tâm đối xứng của đồ thị hàm số ' + F.m('y = ' + F.frac(a + 'x &minus; 1', 'x + ' + d)) + ' (như hình vẽ). Tính tích ' + F.m('P = x<sub>0</sub> &middot; y<sub>0</sub>') + '.' + svg,
                    ans: String((-d) * a)
                };
            }
        }
    });

    // ===================================================================
    // MODULE CÂU 9: KHOẢNG NGHỊCH BIẾN CỦA HÀM SỐ y = x + k²/x (CHUẨN CÂU 9)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_web3_c9_nghich_bien_x_cong_k_chia_x', {
        title: '📉 Câu 9: Tìm khoảng nghịch biến của hàm số y = x + 4/x (Kèm BBT Vector SVG chuẩn)',
        shortLabel: '📉 Câu 9: Hàm y = x + 4/x',
        keywords: /hàm số y = x \+ 4\/x nghịch biến trên khoảng/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 9: Cho hàm số y = x + k^2 / x (TXĐ: D = R \ {0}).
            // Đạo hàm y' = 1 - k^2 / x^2 = (x^2 - k^2) / x^2 < 0 <=> x ∈ (-k; 0) hoặc x ∈ (0; k).
            // Lưu ý bẫy kinh điển: KHÔNG được kết luận nghịch biến trên (-k; k) vì hàm số gián đoạn tại x = 0!
            // Khi k = 2 (y = x + 4/x): nghịch biến trên (-2; 0) và (0; 2) (Chuẩn 100% Đáp án B Câu 9!).
            const kVal = ((seed + step) % 5) + 2; // 2, 3, 4, 5, 6 (2 ở đề gốc -> k^2 = 4)
            const kSq  = kVal * kVal;
            const svg  = G12_IMG510_SVG.bbtRationalSumExact(kVal);

            if (step % 2 === 0) {
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = x + ' + F.frac(kSq, 'x')) + ' có bảng biến thiên như hình vẽ bên dưới. Biết hàm số nghịch biến trên hai khoảng ' + F.m('(a; 0)') + ' và ' + F.m('(0; b)') + '. Tính hiệu ' + F.m('T = b &minus; a') + '.' + svg,
                    ans: String(2 * kVal)
                };
            } else {
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = x + ' + F.frac(kSq, 'x')) + ' có bảng biến thiên như hình vẽ bên dưới. Trên miền ' + F.m('x &lt; 0') + ', hàm số nghịch biến trên khoảng ' + F.m('(a; b)') + ' có độ dài lớn nhất. Tính tổng ' + F.m('S = a + b') + '.' + svg,
                    ans: String(-kVal)
                };
            }
        }
    });

    // ===================================================================
    // MODULE CÂU 10: TÌM GIÁ TRỊ CỰC TIỂU TỪ BẢNG BIẾN THIÊN HÀM BẬC BA (CHUẨN CÂU 10)
    // ===================================================================
    window.registerMathTopicGenerator('12', 'g12_web3_c10_gia_tri_cuc_tieu_bbt', {
        title: '📊 Câu 10: Tìm giá trị cực tiểu của hàm số y = f(x) từ Bảng biến thiên (Kèm BBT SVG chuẩn)',
        shortLabel: '📊 Câu 10: Giá trị cực tiểu BBT',
        keywords: /giá trị cực tiểu của hàm số đã cho bằng|-1 2/,
        generate: function(seed, grade, idx) {
            const step = idx || 0;
            // Chuẩn Câu 10:
            // BBT hàm bậc ba có xCD = -1, xCT = 2; f'(x) đổi dấu (+, 0, -, 0, +).
            // Tại x = -1 hàm số đạt cực đại f(-1) = 1; tại x = 2 hàm số đạt cực tiểu f(2) = -2.
            // Lưu ý phân biệt rõ: "Điểm cực tiểu của hàm số" là x = 2, còn "Giá trị cực tiểu của hàm số" là y_CT = -2 (Đáp án A Câu 10!).
            const xCD = -(((seed + step) % 3) + 1);       // -1, -2, -3 (-1 ở đề gốc)
            const xCT = ((step % 3) + 2);                 // 2, 3, 4    (2 ở đề gốc)
            const yCD = ((seed * 2 + step) % 4) + 1;      // 1, 2, 3, 4 (1 ở đề gốc)
            const yCT = -(((seed + step * 2) % 4) + 2);   // -2, -3, -4, -5 (-2 ở đề gốc)
            const svg = G12_IMG510_SVG.bbtCubicPosExact(xCD, yCD, xCT, yCT);

            if (step % 2 === 0) {
                // Hỏi trực tiếp Giá trị cực tiểu của hàm số (Khi yCT = -2 => Đáp số = -2 chuẩn Đáp án A Câu 10!)
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' có bảng biến thiên như hình vẽ bên dưới. Giá trị cực tiểu của hàm số đã cho bằng bao nhiêu?' + svg,
                    ans: String(yCT)
                };
            } else {
                // Hỏi biểu thức kết hợp Giá trị cực tiểu y_CT và Giá trị cực đại y_CD để học sinh không nhầm với hoành độ x
                return {
                    q: '[Toán 12] Cho hàm số ' + F.m('y = f(x)') + ' có bảng biến thiên như hình vẽ bên dưới. Gọi ' + F.m('y<sub>CĐ</sub>') + ' và ' + F.m('y<sub>CT</sub>') + ' lần lượt là giá trị cực đại và giá trị cực tiểu của hàm số đã cho. Tính giá trị của biểu thức ' + F.m('T = 2y<sub>CĐ</sub> &minus; y<sub>CT</sub>') + '.' + svg,
                    ans: String(2 * yCD - yCT)
                };
            }
        }
    });

    if (typeof window.refreshAdminTopicDropdown === 'function') {
        window.refreshAdminTopicDropdown();
    }
})();

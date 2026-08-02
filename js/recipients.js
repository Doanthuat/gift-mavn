/* ============================================================
   DANH SÁCH NGƯỜI NHẬN
   ------------------------------------------------------------
   CÁCH DÙNG: chỉ cần gửi cho mọi người CÙNG MỘT link

       index1.html

   Trang đăng nhập tự nhận biết theo tài khoản/mật khẩu nhập
   vào: nhập của ai thì tự chuyển sang đúng nội dung, đúng
   hình ảnh, đúng nhạc của người đó (field "next" bên dưới).

   Muốn mở sẵn tên riêng ngay trên trang đăng nhập thì gửi
   thêm mã:  index1.html?u=nhu  — nhưng không bắt buộc.

   Mã được nhớ lại sau khi đăng nhập (localStorage) và tự gắn
   vào các trang kế tiếp, nên cả chuỗi trang đều đúng người.

   THÊM NGƯỜI MỚI: copy cả khối "ban2" bên dưới, đổi key và
   điền lại các field. Không cần sửa file HTML nào.
   Lưu ý: mỗi người phải có "user" khác nhau.

   LƯU Ý ĐƯỜNG DẪN ẢNH / NHẠC:
   - card.photo, card.music  -> tính từ
       sinhnhatem-ne-master/happy-birthday-master/index.html
   - heart.background, heart.music -> tính từ
       tiny-heart-master/tiny-heart-master/birthday-mobile/tim.html
   Các field có chữ "html" ở chú thích thì dùng được thẻ HTML
   (<br>, <i class="em-svg em-heart"></i> ...).
   ============================================================ */

var DEFAULT_RECIPIENT = 'mavn';

var RECIPIENTS = {
  mavn: {
    /* --- Đăng nhập (index1.html) --- */
    user: 'tieenssssdsdsdsds',
    pass: '24062004',
    loginTitle: 'Mở khóa!<br>Mật khẩu đúng, trái trim mở.', // html
    loginButton: 'Mở khóa',
    loginError: 'Nhập sai thông tin rồi kìa,Ôi đaooo trym gơ!',
    pageTitle: 'Tặng em ',
    // Đăng nhập đúng thì chuyển tới đây (đường dẫn tính từ index1.html)
    next: './sinhnhatem-ne-master/happy-birthday-master/index.html',

    /* --- Trang thiệp (sinhnhatem-ne-master/happy-birthday-master/index.html) --- */
    card: {
      pageTitle: '😊',
      bannerHeading: 'Xin chào mời người đẹp... ',
      bannerSub: 'Xin lỗi đã làm người đẹp đợi chờ',
      bannerButton: 'Tới luôn ❤',
      music: 'music/chacyeuladay.mp3',

      frontTitle: 'Nhật kí dễ thương',
      name: 'Cát Tiên',
      paragraphs: [ // html
        'Thay mặt Chủ Tịch nước,Chủ tịch Quốc hội,các bộ trưởng, hơn 9 triệu dân Việt Nam cùng hơn 7 tỷ dân trên thế giới,Tặng em với sự dễ thương này &nbsp;<i class="em-svg em-blush"></i>',
        'Em mang năng lượng chữa lành của nhóm. Em không chỉ hiền lành, tốt bụng mà còn vô cùng siêng năng. Nụ cười vui vẻ và sự ân cần của Em luôn khiến mọi người xung quanh cảm thấy dễ chịu và ấm áp, cảm ơn em thời gian qua.'
      ],
      signed: '07 06 2006 <i class="em-svg em-heart"></i>', // html
      nextButton: 'Tiếp tục nào',
      photo: '../../imgthu/n2.jpg'
    },

    /* --- Trang trái tim (tiny-heart-master/.../tim.html) --- */
    heart: {
      pageTitle: '😊',
      bannerHeading: 'Em Tiên...',
      bannerSub: 'Thế giới dành cho em',
      bannerButton: 'Dẹe vào ❤',
      music: './music/phepmau.mp3',
      background: './img/n3.jpg'
    }
  },
  /* --------------------------1TIÊN-------------------------------- */
  tiien: {
    /* --- Đăng nhập (index1.html) --- */
    user: 'tieen',
    pass: '24062004',
    loginTitle: 'Mở khóa!<br>Mật khẩu đúng, trái trim mở.',
    loginButton: 'Mở khóa',
    loginError: 'Nhập sai thông tin rồi kìa,Ôi đaooo trym gơ!',
    pageTitle: '❤️ ',
    next: './sinhnhatem-ne-master/happy-birthday-master/index.html',

    card: {
      pageTitle: '😊',
      bannerHeading: 'Xin chào mời người đẹp... ',
      bannerSub: 'Xin lỗi đã làm người đẹp đợi chờ',
      bannerButton: 'Dẹe vào ❤',
      music: 'music/chacyeuladay.mp3',

      frontTitle: 'Nhật kí dễ thương',
      name: 'Cát Tiên',
      paragraphs: [
        'Thay mặt Chủ Tịch nước,Chủ tịch Quốc hội,các bộ trưởng, hơn 9 triệu dân Việt Nam cùng hơn 7 tỷ dân trên thế giới,Tặng em với sự dễ thương này &nbsp;<i class="em-svg em-blush"></i>',
        'Em mang năng lượng chữa lành của nhóm. Em không chỉ hiền lành, tốt bụng mà còn vô cùng siêng năng. Nụ cười vui vẻ và sự ân cần của Em luôn khiến mọi người xung quanh cảm thấy dễ chịu và ấm áp, cảm ơn em thời gian qua.'
      ],
      signed: '24/06/2004<i class="em-svg em-heart"></i>', // html
      nextButton: 'Tiếp tục nào',
      photo: '../../imgthu/tien01.jpg'
    },

    /* --- Trang trái tim (tiny-heart-master/.../tim.html) --- */
    heart: {
      pageTitle: '😊',
      bannerHeading: 'Em Tiên...',
      bannerSub: 'Thế giới dành cho em',
      bannerButton: 'Dẹe vào ❤',
      music: './music/phepmau.mp3',
      background: '../../../imgthu/tien.jpg'
    }
  },


  //--------------------------------------------2VY----------------------------------
  vy: {
    /* --- Đăng nhập (index1.html) --- */
    user: 'vyy',
    pass: '14022000',
    loginTitle: 'Mở khóa!<br>Mật khẩu đúng, trái trim mở.', // html
    loginButton: 'Mở khóa',
    loginError: 'Nhập sai thông tin rồi kìa,Ôi đaooo trym gơ!',
    pageTitle: '❤️ ',
    // Đăng nhập đúng thì chuyển tới đây (đường dẫn tính từ index1.html)
    next: './sinhnhatem-ne-master/happy-birthday-master/index.html',

    /* --- Trang thiệp (sinhnhatem-ne-master/happy-birthday-master/index.html) --- */
    card: {
      pageTitle: '😊',
      bannerHeading: 'Xin chào mời người đẹp... ',
      bannerSub: 'Xin lỗi đã làm người đẹp đợi chờ',
      bannerButton: 'Dẹe vào ❤',
      music: 'music/chacyeuladay.mp3',

      frontTitle: 'Nhật kí dễ thương',
      name: 'Vy',
      paragraphs: [ // html
        'Thay mặt Chủ Tịch nước,Chủ tịch Quốc hội,các bộ trưởng, hơn 9 triệu dân Việt Nam cùng hơn 7 tỷ dân trên thế giới,Tặng em với sự dễ thương này &nbsp;<i class="em-svg em-blush"></i>',
        'Chị tuy có vẻ ngoài hơi hướng nội hơi nhát xíu với giao diện có chút ít nói và lạnh lùng. Nhưng chị rất hiền và dễ thương, bởi bên trong ấm áp và luôn âm thầm đối xử chân thành với mọi người. Cảm ơn chị vì thời gian qua.'
      ],
      signed: '14/02/2000<i class="em-svg em-heart"></i>', // html
      nextButton: 'Tiếp tục nào',
      photo: '../../imgthu/vy.jpg'
    },

    /* --- Trang trái tim (tiny-heart-master/.../tim.html) --- */
    heart: {
      pageTitle: '😊',
      bannerHeading: 'Chị Vy...',
      bannerSub: 'Thế giới dành cho chị',
      bannerButton: 'Dẹe vào ❤',
      music: './music/phepmau.mp3',
      background: '../../../imgthu/vy1.jpg'
    }
  },

  //---------------------------------------------3Ngân----------------------------------
  cngan: {
    /* --- Đăng nhập (index1.html) --- */
    user: 'cnggan',
    pass: '25041999',
    loginTitle: 'Mở khóa!<br>Mật khẩu đúng, trái trim mở.', // html
    loginButton: 'Mở khóa',
    loginError: 'Nhập sai thông tin rồi kìa,Ôi đaooo trym gơ!',
    pageTitle: '❤️ ',
    // Đăng nhập đúng thì chuyển tới đây (đường dẫn tính từ index1.html)
    next: './sinhnhatem-ne-master/happy-birthday-master/index.html',

    /* --- Trang thiệp (sinhnhatem-ne-master/happy-birthday-master/index.html) --- */
    card: {
      pageTitle: '😊',
      bannerHeading: 'Xin chào mời người đẹp... ',
      bannerSub: 'Xin lỗi đã làm người đẹp đợi chờ',
      bannerButton: 'Dẹe vào ❤',
      music: 'music/chacyeuladay.mp3',

      frontTitle: 'Nhật kí dễ thương',
      name: 'Chị Ngân',
      paragraphs: [ // html
        'Thay mặt Chủ Tịch nước,Chủ tịch Quốc hội,các bộ trưởng, hơn 9 triệu dân Việt Nam cùng hơn 7 tỷ dân trên thế giới,Tặng Chị với sự dễ thương này &nbsp;<i class="em-svg em-blush"></i>',
        'Chị xinh đẹp với tuyệt chiêu hay cọc và nóng tính khiến ai cũng phải sợ hãiiii. Thế nhưng mà, lớp vỏ bọc sừng sỏ ấy chỉ để che giấu một tâm hồn cực kỳ dễ thương, hài hước và vô tư bên trong mà thôi. Cảm ơn chị vì thời gian qua.'
      ],
      signed: '25/04/1999 <i class="em-svg em-heart"></i>', // html
      nextButton: 'Tiếp tục nào',
      photo: '../../imgthu/ngan.jpg'
    },

    /* --- Trang trái tim (tiny-heart-master/.../tim.html) --- */
    heart: {
      pageTitle: '😊',
      bannerHeading: 'Chị Ngân...',
      bannerSub: 'Thế giới dành cho chị',
      bannerButton: 'Dẹe vào ❤',
      music: './music/phepmau.mp3',
      background: '../../../imgthu/ngan1.jpg'
    }
  },



  /* --------------------------4Em tuyết-------------------------------- */
  tuyet: {
    /* --- Đăng nhập (index1.html) --- */
    user: 'tuyett',
    pass: '17082003',
    loginTitle: 'Mở khóa!<br>Mật khẩu đúng, trái trim mở.',
    loginButton: 'Mở khóa',
    loginError: 'Nhập sai thông tin rồi kìa,Ôi đaooo trym gơ!',
    pageTitle: '❤️ ',
    next: './sinhnhatem-ne-master/happy-birthday-master/index.html',

    card: {
      pageTitle: '😊',
      bannerHeading: 'Xin chào mời người đẹp... ',
      bannerSub: 'Xin lỗi đã làm người đẹp đợi chờ',
      bannerButton: 'Dẹe vào ❤',
      music: 'music/chacyeuladay.mp3',

      frontTitle: 'Nhật kí dễ thương',
      name: 'Cát Tiên',
      paragraphs: [
        'Thay mặt Chủ Tịch nước,Chủ tịch Quốc hội,các bộ trưởng, hơn 9 triệu dân Việt Nam cùng hơn 7 tỷ dân trên thế giới,Tặng em với sự dễ thương này &nbsp;<i class="em-svg em-blush"></i>',
        'Em xinh xắn, đáng yêu với những sức hút lạ lùng. Có lúc em thẹn thùng, e ngại như nụ hoa mỏng manh, nhưng cũng có lúc đầy bất ngờ phá cách. Trên hết, Em là một cô gái vô cùng hiểu chuyện và mang tấm lòng nhân hậu. Cảm ơn em thời gian qua.'
      ],
      signed: '17/08/2003<i class="em-svg em-heart"></i>', // html
      nextButton: 'Tiếp tục nào',
      photo: '../../imgthu/tuyet.jpg'
    },

    /* --- Trang trái tim (tiny-heart-master/.../tim.html) --- */
    heart: {
      pageTitle: '😊',
      bannerHeading: 'Em Tuyết...',
      bannerSub: 'Thế giới dành cho em',
      bannerButton: 'Dẹe vào ❤',
      music: './music/phepmau.mp3',
      background: '../../../imgthu/tuyet1.jpg'
    }
  },



  /* --------------------------5Chị Thiii-------------------------------- */
  cthi: {
    /* --- Đăng nhập (index1.html) --- */
    user: 'ctthi',
    pass: '27101997',
    loginTitle: 'Mở khóa!<br>Mật khẩu đúng, trái trim mở.', // html
    loginButton: 'Mở khóa',
    loginError: 'Nhập sai thông tin rồi kìa,Ôi đaooo trym gơ!',
    pageTitle: '❤️ ',
    // Đăng nhập đúng thì chuyển tới đây (đường dẫn tính từ index1.html)
    next: './sinhnhatem-ne-master/happy-birthday-master/index.html',

    /* --- Trang thiệp (sinhnhatem-ne-master/happy-birthday-master/index.html) --- */
    card: {
      pageTitle: '😊',
      bannerHeading: 'Xin chào mời người đẹp... ',
      bannerSub: 'Xin lỗi đã làm người đẹp đợi chờ',
      bannerButton: 'Dẹe vào ❤',
      music: 'music/chacyeuladay.mp3',

      frontTitle: 'Nhật kí dễ thương',
      name: 'Chị Thii',
      paragraphs: [ // html
        'Thay mặt Chủ Tịch nước,Chủ tịch Quốc hội,các bộ trưởng, hơn 9 triệu dân Việt Nam cùng hơn 7 tỷ dân trên thế giới,Tặng Chị với sự dễ thương này &nbsp;<i class="em-svg em-blush"></i>',
        'Trạm phát sóng năng lượng "bất ổn" nhưng cực kỳ đáng yêu của cả hội! Chị luôn nhiệt tình, hoà đồng và mang theo một bầu trời hài hước. Ở đâu có chị Thiii, ở đó ngập tràn tiếng cười và niềm vui đến mức không thể nào kiểm soát nổi. Cảm ơn chị vì thời gian qua.'
      ],
      signed: '27/10/1997<i class="em-svg em-heart"></i>', // html
      nextButton: 'Tiếp tục nào',
      photo: '../../imgthu/thi.jpg'
    },

    /* --- Trang trái tim (tiny-heart-master/.../tim.html) --- */
    heart: {
      pageTitle: '😊',
      bannerHeading: 'Chị Ngân...',
      bannerSub: 'Thế giới dành cho chị',
      bannerButton: 'Dẹe vào ❤',
      music: './music/phepmau.mp3',
      background: '../../../imgthu/thi1.jpg'
    }
  },

  /* --------------------------6Em Hân-------------------------------- */
  han: {
    /* --- Đăng nhập (index1.html) --- */
    user: 'hann',
    pass: '29122003',
    loginTitle: 'Mở khóa!<br>Mật khẩu đúng, trái trim mở.',
    loginButton: 'Mở khóa',
    loginError: 'Nhập sai thông tin rồi kìa,Ôi đaooo trym gơ!',
    pageTitle: '❤️ ',
    next: './sinhnhatem-ne-master/happy-birthday-master/index.html',

    card: {
      pageTitle: '😊',
      bannerHeading: 'Xin chào mời người đẹp... ',
      bannerSub: 'Xin lỗi đã làm người đẹp đợi chờ',
      bannerButton: 'Dẹe vào ❤',
      music: 'music/chacyeuladay.mp3',

      frontTitle: 'Nhật kí dễ thương',
      name: 'Em Hân',
      paragraphs: [
        'Thay mặt Chủ Tịch nước,Chủ tịch Quốc hội,các bộ trưởng, hơn 9 triệu dân Việt Nam cùng hơn 7 tỷ dân trên thế giới,Tặng em với sự dễ thương này &nbsp;<i class="em-svg em-blush"></i>',
        'Nàng thơ xinh đẹp mang giao diện lạnh lùng, hướng nội lúc bình thường, nhưng hệ điều hành lại tự động chuyển sang "hướng ngoại toàn phần" ngay khi có chút men bia. Sự lột xác đáng yêu này luôn là điểm nhấn bùng nổ của mọi cuộc vui. Cảm ơn em thời gian qua.'
      ],
      signed: '29/12/2003<i class="em-svg em-heart"></i>', // html
      nextButton: 'Tiếp tục nào',
      photo: '../../imgthu/han.jpg'
    },

    /* --- Trang trái tim (tiny-heart-master/.../tim.html) --- */
    heart: {
      pageTitle: '😊',
      bannerHeading: 'Em Hân...',
      bannerSub: 'Thế giới dành cho em',
      bannerButton: 'Dẹe vào ❤',
      music: './music/phepmau.mp3',
      background: '../../../imgthu/han1.jpg'
    }
  },


  /* --------------------------7Chị Thùy-------------------------------- */
  cthuy: {
    /* --- Đăng nhập (index1.html) --- */
    user: 'ccthuy',
    pass: '22061996',
    loginTitle: 'Mở khóa!<br>Mật khẩu đúng, trái trim mở.', // html
    loginButton: 'Mở khóa',
    loginError: 'Nhập sai thông tin rồi kìa,Ôi đaooo trym gơ!',
    pageTitle: '❤️ ',
    // Đăng nhập đúng thì chuyển tới đây (đường dẫn tính từ index1.html)
    next: './sinhnhatem-ne-master/happy-birthday-master/index.html',

    /* --- Trang thiệp (sinhnhatem-ne-master/happy-birthday-master/index.html) --- */
    card: {
      pageTitle: '😊',
      bannerHeading: 'Xin chào mời người đẹp... ',
      bannerSub: 'Xin lỗi đã làm người đẹp đợi chờ',
      bannerButton: 'Dẹe vào ❤',
      music: 'music/chacyeuladay.mp3',

      frontTitle: 'Nhật kí dễ thương',
      name: 'Chị Thuỳ',
      paragraphs: [ // html
        'Thay mặt Chủ Tịch nước,Chủ tịch Quốc hội,các bộ trưởng, hơn 9 triệu dân Việt Nam cùng hơn 7 tỷ dân trên thế giới,Tặng Chị với sự dễ thương này &nbsp;<i class="em-svg em-blush"></i>',
        'Người chị hiền lành, dễ thương với dáng vẻ hay bẽn lẽn, thẹn thùng. Dù đôi lúc còn e ngại, nhưng chính sự thuần khiết, chân thành và tấm lòng vô cùng tốt bụng của chị lại là điều khiến mọi người luôn trân trọng. Cảm ơn chị vì thời gian qua.'
      ],
      signed: '22/06/1996<i class="em-svg em-heart"></i>', // html
      nextButton: 'Tiếp tục nào',
      photo: '../../imgthu/thuy.jpg'
    },

    /* --- Trang trái tim (tiny-heart-master/.../tim.html) --- */
    heart: {
      pageTitle: '😊',
      bannerHeading: 'Chị Thuỳ...',
      bannerSub: 'Thế giới dành cho chị',
      bannerButton: 'Dẹe vào ❤',
      music: './music/phepmau.mp3',
      background: '../../../imgthu/thuy1.jpg'
    }
  },

  /* --------------------------8em Trinh-------------------------------- */
  trinh: {
    /* --- Đăng nhập (index1.html) --- */
    user: 'trrinh',
    pass: '08092005',
    loginTitle: 'Mở khóa!<br>Mật khẩu đúng, trái trim mở.',
    loginButton: 'Mở khóa',
    loginError: 'Nhập sai thông tin rồi kìa,Ôi đaooo trym gơ!',
    pageTitle: '❤️ ',
    next: './sinhnhatem-ne-master/happy-birthday-master/index.html',

    card: {
      pageTitle: '😊',
      bannerHeading: 'Xin chào mời người đẹp... ',
      bannerSub: 'Xin lỗi đã làm người đẹp đợi chờ',
      bannerButton: 'Dẹe vào ❤',
      music: 'music/chacyeuladay.mp3',

      frontTitle: 'Nhật kí dễ thương',
      name: 'Em Trinh',
      paragraphs: [
        'Thay mặt Chủ Tịch nước,Chủ tịch Quốc hội,các bộ trưởng, hơn 9 triệu dân Việt Nam cùng hơn 7 tỷ dân trên thế giới,Tặng em với sự dễ thương này &nbsp;<i class="em-svg em-blush"></i>',
        'Em Trinh xinh rái sở hữu nét mâu thuẫn siêu đáng yêu: ngoại hình xinh xắn, ngọt ngào cùng tính cách có phần e ngại, nhưng một khi đã mở lời thì lại vô cùng "mạnh miệng" và sắc sảo. Một cá tính cực kỳ cuốn hút. Cảm ơn em thời gian qua.'
      ],
      signed: '08/09/2005<i class="em-svg em-heart"></i>', // html
      nextButton: 'Tiếp tục nào',
      photo: '../../imgthu/trinh.jpg'
    },

    /* --- Trang trái tim (tiny-heart-master/.../tim.html) --- */
    heart: {
      pageTitle: '😊',
      bannerHeading: 'Em Trinh...',
      bannerSub: 'Thế giới dành cho em',
      bannerButton: 'Dẹe vào ❤',
      music: './music/phepmau.mp3',
      background: '../../../imgthu/trinh1.jpg'
    }
  },


  /* --------------------------9em Hảo-------------------------------- */
  hao: {
    /* --- Đăng nhập (index1.html) --- */
    user: 'hhao',
    pass: '06112005',
    loginTitle: 'Mở khóa!<br>Mật khẩu đúng, trái trim mở.',
    loginButton: 'Mở khóa',
    loginError: 'Nhập sai thông tin rồi kìa,Ôi đaooo trym gơ!',
    pageTitle: '❤️ ',
    next: './sinhnhatem-ne-master/happy-birthday-master/index.html',

    card: {
      pageTitle: '😊',
      bannerHeading: 'Xin chào mời người đẹp... ',
      bannerSub: 'Xin lỗi đã làm người đẹp đợi chờ',
      bannerButton: 'Dẹe vào ❤',
      music: 'music/chacyeuladay.mp3',

      frontTitle: 'Nhật kí dễ thương',
      name: 'Em Hảo',
      paragraphs: [
        'Thay mặt Chủ Tịch nước,Chủ tịch Quốc hội,các bộ trưởng, hơn 9 triệu dân Việt Nam cùng hơn 7 tỷ dân trên thế giới,Tặng em với sự dễ thương này &nbsp;<i class="em-svg em-blush"></i>',
        'Cảnh báo mức độ xinh xắn và dễ thương của em có tính "sát thương" cực cao, đủ sức làm rung rinh bất cứ ai! Dù ít gặp em và bình thường Hảo khá ít nói, nhưng lúc cần thiết lại vô cùng rôm rả, đặc biệt là em rất hiểu chuyện và tinh tế. Cảm ơn em khoảng thời gian qua.'
      ],
      signed: '06/11/2005<i class="em-svg em-heart"></i>', // html
      nextButton: 'Tiếp tục nào',
      photo: '../../imgthu/hao.jpg'
    },

    /* --- Trang trái tim (tiny-heart-master/.../tim.html) --- */
    heart: {
      pageTitle: '😊',
      bannerHeading: 'Em Hảo...',
      bannerSub: 'Thế giới dành cho em',
      bannerButton: 'Dẹe vào ❤',
      music: './music/phepmau.mp3',
      background: '../../../imgthu/hao1.jpg'
    }
  },


  /* --------------------------10em Thiên-------------------------------- */
  thien: {
    /* --- Đăng nhập (index1.html) --- */
    user: 'thienn',
    pass: '11102003',
    loginTitle: 'Mở khóa!<br>Mật khẩu đúng, trái trim mở.',
    loginButton: 'Mở khóa',
    loginError: 'Nhập sai thông tin rồi kìa,Ôi đaooo trym gơ!',
    pageTitle: '❤️ ',
    next: './sinhnhatem-ne-master/happy-birthday-master/index.html',

    card: {
      pageTitle: '😊',
      bannerHeading: 'Xin chào mời người đẹp... ',
      bannerSub: 'Xin lỗi đã làm người đẹp đợi chờ',
      bannerButton: 'Dẹe vào ❤',
      music: 'music/chacyeuladay.mp3',

      frontTitle: 'Nhật kí dễ thương',
      name: 'Em Thiên',
      paragraphs: [
        'Thay mặt Chủ Tịch nước,Chủ tịch Quốc hội,các bộ trưởng, hơn 9 triệu dân Việt Nam cùng hơn 7 tỷ dân trên thế giới,Tặng em với sự dễ thương này &nbsp;<i class="em-svg em-blush"></i>',
        'Em Thiên đa tài vừa xinh đẹp, dễ thương lại cực kỳ giỏi giang, tháo vát trong công việc. Dù thỉnh thoảng áp lực khiến em hơi cộc cằn, nhưng khả năng chuyển đổi tức thì từ chế độ cau có sang đáng yêu chỉ trong chớp mắt chính là "siêu năng lực" không ai sánh bằng của em Thiên luôn. Cảm ơn em khoảng thời gian qua.'
      ],
      signed: '11/10/2003<i class="em-svg em-heart"></i>', // html
      nextButton: 'Tiếp tục nào',
      photo: '../../imgthu/thien.jpg'
    },

    /* --- Trang trái tim (tiny-heart-master/.../tim.html) --- */
    heart: {
      pageTitle: '😊',
      bannerHeading: 'Em Thiên...',
      bannerSub: 'Thế giới dành cho em',
      bannerButton: 'Dẹe vào ❤',
      music: './music/phepmau.mp3',
      background: '../../../imgthu/thien1.jpg'
    }
  },

  /* --------------------------11em Quyên-------------------------------- */
  quyen: {
    /* --- Đăng nhập (index1.html) --- */
    user: 'quyyen',
    pass: '07082002',
    loginTitle: 'Mở khóa!<br>Mật khẩu đúng, trái trim mở.',
    loginButton: 'Mở khóa',
    loginError: 'Nhập sai thông tin rồi kìa,Ôi đaooo trym gơ!',
    pageTitle: '❤️ ',
    next: './sinhnhatem-ne-master/happy-birthday-master/index.html',

    card: {
      pageTitle: '😊',
      bannerHeading: 'Xin chào mời người đẹp... ',
      bannerSub: 'Xin lỗi đã làm người đẹp đợi chờ',
      bannerButton: 'Dẹe vào ❤',
      music: 'music/chacyeuladay.mp3',

      frontTitle: 'Nhật kí dễ thương',
      name: 'Em Quyên',
      paragraphs: [
        'Thay mặt Chủ Tịch nước,Chủ tịch Quốc hội,các bộ trưởng, hơn 9 triệu dân Việt Nam cùng hơn 7 tỷ dân trên thế giới,Tặng em với sự dễ thương này &nbsp;<i class="em-svg em-blush"></i>',
        'Em dễ thương với tính cách thích trêu đùa, tếu táo. Đôi khi những lời nói nghịch ngợm của em dễ làm người khác hiểu lầm, nhưng sâu thẳm bên trong, Quyên là một người vô cùng tinh tế, tốt bụng và luôn mang đến niềm vui cho mọi người. Cảm ơn em khoảng thời gian qua.'
      ],
      signed: '07/08/2002<i class="em-svg em-heart"></i>', // html
      nextButton: 'Tiếp tục nào',
      photo: '../../imgthu/quyen.jpg'
    },

    /* --- Trang trái tim (tiny-heart-master/.../tim.html) --- */
    heart: {
      pageTitle: '😊',
      bannerHeading: 'Em Quyên...',
      bannerSub: 'Thế giới dành cho em',
      bannerButton: 'Dẹe vào ❤',
      music: './music/phepmau.mp3',
      background: '../../../imgthu/quyen1.jpg'
    }
  },


};

/* ============================================================
   Helper – không cần sửa phần dưới
   ============================================================ */
(function (global) {
  var STORAGE_KEY = 'recipientCode';

  function readStore() {
    try { return global.localStorage.getItem(STORAGE_KEY) || ''; } catch (e) { return ''; }
  }

  function writeStore(code) {
    try { global.localStorage.setItem(STORAGE_KEY, code); } catch (e) { /* chế độ ẩn danh */ }
  }

  // Mã lấy từ ?u= trên URL, nếu không có thì lấy mã đã nhớ, cuối cùng là mã mặc định.
  function getRecipientCode() {
    var m = global.location.search.match(/[?&]u=([^&]*)/);
    if (m && m[1]) {
      var code = decodeURIComponent(m[1].replace(/\+/g, ' '));
      if (RECIPIENTS[code]) { writeStore(code); return code; }
    }
    var saved = readStore();
    if (RECIPIENTS[saved]) return saved;
    return DEFAULT_RECIPIENT;
  }

  function getRecipient() {
    return RECIPIENTS[getRecipientCode()] || RECIPIENTS[DEFAULT_RECIPIENT];
  }

  // Dò trong cả danh sách xem tài khoản/mật khẩu vừa nhập là của ai.
  // Trả về { code, data } nếu khớp, null nếu không khớp ai cả.
  // Nhờ vậy mọi người dùng chung 1 link: nhập của ai thì vào nội dung người đó.
  function findByLogin(user, pass) {
    var u = String(user == null ? '' : user).trim();
    var p = String(pass == null ? '' : pass);
    for (var code in RECIPIENTS) {
      if (!Object.prototype.hasOwnProperty.call(RECIPIENTS, code)) continue;
      var r = RECIPIENTS[code];
      // tên đăng nhập không phân biệt chữ hoa/thường, mật khẩu thì có
      if (String(r.user).toLowerCase() === u.toLowerCase() && String(r.pass) === p) {
        return { code: code, data: r };
      }
    }
    return null;
  }

  // Gắn ?u=<mã> vào một link để chuyển trang mà vẫn giữ đúng người.
  // Truyền forceCode khi đã biết chắc người nhận (vd: vừa đăng nhập xong) —
  // nếu không, ?u= cũ trên URL sẽ được ưu tiên và có thể ra sai người.
  function withRecipient(url, forceCode) {
    var code = (forceCode && RECIPIENTS[forceCode]) ? forceCode : getRecipientCode();
    if (!code) return url;
    var hash = '', i = url.indexOf('#');
    if (i >= 0) { hash = url.slice(i); url = url.slice(0, i); }
    return url + (url.indexOf('?') >= 0 ? '&' : '?') + 'u=' + encodeURIComponent(code) + hash;
  }

  // Đổ nội dung vào element theo id, bỏ qua nếu không có id hoặc không có dữ liệu.
  function setHTML(id, value) {
    var el = document.getElementById(id);
    if (el && value != null) el.innerHTML = value;
  }

  function setAttr(id, attr, value) {
    var el = document.getElementById(id);
    if (el && value != null) el.setAttribute(attr, value);
  }

  global.Recipient = {
    code: getRecipientCode,
    get: getRecipient,
    login: findByLogin,
    link: withRecipient,
    remember: writeStore,
    setHTML: setHTML,
    setAttr: setAttr
  };

  // Tự động kiểm tra đăng nhập
  function checkAuth() {
    var path = global.location.pathname.toLowerCase();
    // Bỏ qua kiểm tra nếu đang ở trang login (index1.html)
    if (path.indexOf('index1.html') > -1) {
      return;
    }

    // Nếu đang ở các trang khác, yêu cầu phải có session đăng nhập hợp lệ
    var currentCode = getRecipientCode();
    if (global.sessionStorage.getItem('isLoggedIn_' + currentCode) !== 'true') {
      var scripts = document.getElementsByTagName('script');
      var rootUrl = '';
      for (var i = 0; i < scripts.length; i++) {
        var src = scripts[i].src;
        if (src && src.indexOf('/js/recipients.js') > -1) {
          rootUrl = src.substring(0, src.indexOf('/js/recipients.js'));
          break;
        }
      }
      if (rootUrl) {
        global.location.replace(rootUrl + '/index1.html');
      } else {
        // Fallback for some environments
        global.location.replace('/index1.html');
      }
    }
  }

  checkAuth();
})(window);

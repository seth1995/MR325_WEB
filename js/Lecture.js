
		$(function () {
			var sWidth = $("#focus").width();
			var len = $("#focus ul li").length;
			var index1 = 0;
			var index2 = 0;
			var index3 = 0;
			var picTimer;
			var if_hide=0;
			var btn = "<div class='btnBg'></div><div class='btn'>";
			for (var i = 0; i < len; i++) {
				btn += "<span></span>";
			}
			btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>";
			$("#focus").append(btn);
			$("#focus .btnBg").css("opacity", 0);
			$("#focus .btn span").css("opacity", 0.4).mouseenter(function () {
				index = $("#focus .btn span").index(this);
				showPics(index);
			}).eq(0).trigger("mouseenter");
			$("#focus .preNext").css("opacity", 0.0).hover(function () {
				$(this).stop(true, false).animate({ "opacity": "0.5" }, 300);
			}, function () {
				$(this).stop(true, false).animate({ "opacity": "0" }, 300);
			});
			$("#focus .pre").click(function () {
				if (index3 != index1) {
					index3 = index1;
					index2 = Math.floor(index1);
				}
				else {
					index2 -= 1;
				}
				$("#drag").val(index2);
				if (index == -1) { index = len - 1; }
				showPics(index2);
			});
			$(window).resize(function () {
				if ($(window).width() < 900) {
                     if_hide=1;
					$("#navigate_box").hide(10);
				}
				else {
					if_hide=0;
					$("#navigate_box").show(10);
				}

			})
			$("#focus .next").click(function () {
				if (index3 != index1) {
					index3 = index1;
					index2 = Math.ceil(index1);
				}
				else {
					index2 += 1;
				}
				$("#drag").val(index2);
				if (index == len) { index = 0; }
				showPics(index2);
			});
			$("#drag").mousemove(function () {
				index1 = $(this).val();
				showPics(index1);
			})
			$("#drag").change(function () {
				index1 = $(this).val();
				showPics(index1);
			})
			$("#focus ul").css("width", sWidth * (len));
			function showPics(index) {
				var nowLeft = -index * sWidth;
				$("#focus ul").stop(true, false).animate({ "left": nowLeft }, 1000);

			}
			$("#fh5co-header").hover(function () {
				if(if_hide==1){
				$("#navigate_box").show(1000);
				}
			})
			$("#fh5co-header").mouseleave(function () {
				if(if_hide==1){
				$("#navigate_box").hide(1000);
				}
			})
		});
	
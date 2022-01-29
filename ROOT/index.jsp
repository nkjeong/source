<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
		<link rel="stylesheet" href="/css/css.css">
	</head>
	<body>
		<section class="layout">
			<section class="layoutWrite">
				<section class="writeSection">
					<section class="itemWrite">
						<article>
							<input type="text" class="inputStyle" placeholder="상품명을 입력하세요">
						</article>
						<article>
							<input type="number" value="45">px
						</article>
					</section>
					<section class="itemWrite">
						<article class="titleProperties btnBold">
							굵게
						</article>
						<article class="titleProperties btnUnderline">
							밑줄
						</article>
						<article class="titleProperties fontColor">
							<article class="fontColorLabel">색상</article>
							<article class="fontColorApply" style="background-color:#000000;"></article>
							<article class="fontColorApply" style="background-color:#999999;"></article>
							<article class="fontColorApply" style="background-color:#3b5162;"></article>
							<article class="fontColorApply" style="background-color:#dcdcdc;"></article>
							<article class="fontColorApply" style="background-color:#e64a19;"></article>
						</article>
						<article class="titleProperties init">
							초기화
						</article>
					</section>
				</section>
				<section class="writeSection">
					<section class="itemWrite">
						<article>
							<input type="text" class="inputStyleSub" placeholder="품번 혹은 짧은 설명을 입력하세요">
						</article>
					</section>
				</section>
				<section class="writeSection">
					<section class="itemWrite">
						<article class="setRepresentativeImg">
							<div>대표이미지 넣기</div>
							<div style="font-size:11px; text-align:center">파일명은 영문, 사이즈는 1000*1000(px)<br>jpg, png 파일만 업로드</div>
							<form>
								<input type="file" class="setRepresentativeImgInput" hidden>
							</form>
						</article>
					</section>
					<section class="itemWrite">
						<article class="progress">
							<article class="progressBar">
								<article class="progressBarFill"></article>
							</article>
						</article>
					</section>
				</section>
			</section>
			<section class="layoutView">
				<section style="display: flex; justify-content: center; align-items: center; width:100%; height:80px;">
					<article style="font-weight:bold; font-size:45px; color:#999999; text-decoration:underline;"></article>
				</section>
				<section style="display: flex; justify-content: center; align-items: center; width:100%;">
					<article style="font-size:14px;"></article>
				</section>
				<section style="display: flex; justify-content: center; align-items: center; width:100%; height:650px;">
					<article style="width:600px; height:600px; border:solid 1px #eeeeee; border-radius: 10px;"></article>
				</section>
			</section>
		</section>
		<script src="/script/script.js"></script>
	</body>
</html>
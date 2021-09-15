import React from "react";
import PropTypes from "props-type";
import AlbumList from "./components/AlbumList";

AlbumFeature.PropTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      avatar:
        "https://avatar-ex-swe.nixcdn.com/song/2021/03/12/e/2/9/e/1615554946033.jpg",
      bgImage:
        "https://avatar-ex-swe.nixcdn.com/singer/avatar/2021/07/13/0/6/d/2/1626145766324_600.jpg",
      coverImage:
        "https://avatar-ex-swe.nixcdn.com/playlist/2021/05/04/3/b/6/d/1620100988545_500.jpg",
      creator: "Phúc Chinh",
      lyric: "https://lrc-nct.nixcdn.com/2021/03/22/2/8/d/4/1616360845396.lrc",
      music:
        "https://aredir.nixcdn.com/NhacCuaTui1012/TheLuong-PhucChinh-6971140.mp3?st=Gjvx3xDEIBRMoGsc2wLqkA&e=1631635351",
      title: "Thê Lương",
      url:
        "https://www.nhaccuatui.com/bai-hat/the-luong-phuc-chinh.nmxw6tXZyBQy.html"
    },
    {
      id: 2,
      avatar:
        "https://avatar-ex-swe.nixcdn.com/song/2021/09/09/f/c/f/d/1631181753902.jpg",
      bgImage:
        "https://avatar-ex-swe.nixcdn.com/singer/avatar/2019/10/29/a/a/d/4/1572318457703_600.jpg",
      coverImage:
        "https://avatar-ex-swe.nixcdn.com/playlist/2021/05/04/3/b/6/d/1620100988545_500.jpg",
      creator: "Masew, Masiu, B Ray, TAP",
      lyric: "https://lrc-nct.nixcdn.com/null",
      music:
        "https://aredir.nixcdn.com/NhacCuaTui1021/CuoiThoi-MasewMasiuBRayTAPVietNam-7085648.mp3?st=Fdf-94PGaMjuqak7C3FJzw&e=1631635351",
      title: "Cưới Thôi",
      url:
        "https://www.nhaccuatui.com/bai-hat/cuoi-thoi-masew-ft-masiu-ft-b-ray-ft-tap.SQTZSysfmPRJ.html"
    },
    {
      id: 3,
      avatar:
        "https://avatar-ex-swe.nixcdn.com/song/2021/08/15/a/7/9/2/1629021746388.jpg",
      bgImage:
        "https://avatar-ex-swe.nixcdn.com/singer/avatar/2020/08/13/a/9/8/e/1597294555540_600.jpg",
      coverImage:
        "https://avatar-ex-swe.nixcdn.com/playlist/2021/05/04/3/b/6/d/1620100988545_500.jpg",
      creator: "Tăng Duy Tân",
      lyric: "https://lrc-nct.nixcdn.com/2021/08/15/d/8/0/6/1629022926567.lrc",
      music:
        "https://aredir.nixcdn.com/Warner_Audio72/DaVu-TangDuyTan-7068051.mp3?st=Kp17_rGyQ2uLyHv7v6chDg&e=1631635351",
      title: "Dạ Vũ",
      url:
        "https://www.nhaccuatui.com/bai-hat/da-vu-tang-duy-tan.8Q8yLCcES92H.html"
    }
  ];
  return (
    <div>
      <h2>Có thể bạn muốn nghe</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;

import { baseURL, https, TOKEN_CYBERSOFT } from "./configURL";
import axios from "axios";

export const moviesServ = {
  // getListMovie: () => {
  //   return axios({
  //     url: `${baseURL}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP06`,
  //     method: "GET",
  //     headers: {
  //       TokenCyberSoft: TOKEN_CYBERSOFT,
  //     },
  //   });
  // },
  getListMovie: () => {
    let uri = `/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP06`;
    return https.get(uri);
  },
  // getMoviByTheater: () => {
  //   return axios({
  //     url: `${baseURL}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP05`,
  //     // https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01
  //     method: "GET",
  //     headers: {
  //       TokenCyberSoft: TOKEN_CYBERSOFT,
  //     },
  //   });
  // },
  getMoviByTheater: () => {
    let uri = "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP05";
    return https.get(uri);
  },
};

import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { moviesServ } from "../../services/movieService";
import ItemTabMovie from "./ItemTabMovie";

export default function TabMovie() {
  let [dataMovie, setDataMovie] = useState([]);
  useEffect(() => {
    moviesServ
      .getMoviByTheater()
      .then((res) => {
        console.log(res);
        setDataMovie(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderContent = () => {
    return dataMovie.map((heThongRap, index) => {
      return (
        <Tabs.TabPane
          tab={<img className="w-16 h-16" src={heThongRap.logo} />}
          key={index}
        >
          <Tabs tabPosition="left" style={{ height: 500 }}>
            {heThongRap.lstCumRap.map((cumRap) => {
              return (
                <Tabs.TabPane
                  tab={
                    <div className="w-48 text-left">
                      <p className="text-gray=700 truncate">
                        {cumRap.tenCumRap}
                      </p>
                      <p className="text-gray=700 truncate">{cumRap.diaChi}</p>
                    </div>
                  }
                  key={cumRap.maCumRap}
                >
                  <div
                    style={{ height: 500, overflowY: "scroll" }}
                    className="h-32 scrollbar scrollbar-thumb-custom scrollbar-track-custom-light overflow-y-scroll"
                  >
                    {cumRap.danhSachPhim.map((phim) => {
                      return <ItemTabMovie data={phim} />;
                    })}
                  </div>
                </Tabs.TabPane>
              );
            })}
          </Tabs>
        </Tabs.TabPane>
      );
    });
  };
  return (
    <div>
      <Tabs style={{ height: 500 }} defaultActiveKey="1" tabPosition="left">
        {renderContent()}
      </Tabs>
    </div>
  );
}

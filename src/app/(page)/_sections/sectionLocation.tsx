"use client";
import { SectionTitleGroupComponent } from "./sectionTitleGroup";
import Script from "next/script";
import Link from "next/link";
import { SectionButtonComponent } from "./sectionButton";
import { sendGTMEvent } from "@next/third-parties/google";
import { Button } from "@/components/ui/button";

export const SectionLocationComponent = () => {
  const initializeMap = () => {
    const mapOptions = {
      center: new window.naver.maps.LatLng(35.3025826, 127.9693245),
      zoom: 15,
      minZoom: 12,
      scaleControl: false,
      mapDataControl: false,
      zoomControl: true,
      marker: true,
    };
    const mapDiv = document.getElementById("map");
    const map = new window.naver.maps.Map(mapDiv, mapOptions);
    const marker = new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(35.3025826, 127.9693245),
      map: map,
    });
  };
  const handleCenterButtonClick = () => {
    sendGTMEvent({ event: "click_btn", btn_name: "MapCenterBtn" });
    initializeMap();
  };

  return (
    <div className="flex w-full flex-col gap-5">
      <SectionTitleGroupComponent
        title1="찾아오시는 길"
        title2="The Location"
      />
      <div className="relative flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div id="map" style={{ width: "100%", height: "300px" }}></div>
          <Button
            variant={"outline"}
            onClick={handleCenterButtonClick}
            className="absolute text-black right-1 top-1"
          >
            매장찾기
          </Button>
        </div>
        <div className="flex justify-end">
          <Link
            href={
              "https://map.naver.com/p/entry/place/1980392936?c=15.00,0,0,0,dh"
            }
            target="_blank"
            onClick={() =>
              sendGTMEvent({
                event: "click_btn",
                btn_name: "CheckNaverBtn",
              })
            }
          >
            <SectionButtonComponent>
              네이버 지도에서 찾기
            </SectionButtonComponent>
          </Link>
        </div>
      </div>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
        onReady={initializeMap}
      />
      <div className="space-y-1">
        <h4 className="text-lg font-semibold">넓은 전용 주차장 완비</h4>
        <p>
          매장 내에 넓은 전용 주차장이 있어 주차에 불편함이 없습니다. 남강을
          드라이브하며 아름다운 자연을 감상하는 길에, 잠시 들러 맛있는 마카롱을
          맛보러 오세요.
        </p>
      </div>
    </div>
  );
};

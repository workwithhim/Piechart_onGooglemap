import { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar";
import GoogleMapComponent from '../../components/GoogleMap/GoogleMap';
import CFooter from "../Layout";
import "./Home.scss";
import { IPieDetail } from '../../type';

export default function Home() {
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 40.730610,
    lng: -73.935242,
  });
  const [pieDetail, setPieDetail] = useState<IPieDetail>({
    towerName: '',
    latitude: 0,
    longitude: 0,
    rotate: 0,
    radius: 6.44,
    items: []
  });
  const [createFlag, setCreateFlag] = useState(false);
  const [editFlag, setEditFlag] = useState(false);
  const handleCreatePie = (data: IPieDetail) => {
    setPieDetail(data);
    setCreateFlag(true);
  }
  const [openPopup, setOpenPopup] = useState('hide');
  const handleChangeCenter = (lat: number, lng: number) => {
    if (isNaN(lat) || isNaN(lng)) {
      return;
    }
    setCenter({
      lat: lat,
      lng: lng
    })
  }
  return (
    <>
      <GoogleMapComponent
        changecCenter={center}
        move={setCenter}
        pieDetail={pieDetail}
        createFlag={createFlag}
        setCreateFlag={setCreateFlag}
        setEditFlag={setEditFlag}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        setPieDetail={setPieDetail}
      />

      <CFooter
        pieEDetail={pieDetail}
        editFlag={editFlag}
        setEditFlag={setEditFlag}
        center={center}
        pieCreate={handleCreatePie}
        setCenter={handleChangeCenter}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      />
    </>
  )
}
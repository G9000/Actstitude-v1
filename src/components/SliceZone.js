import React from "react"
import CareerSlice from "./prismic slice/CareerSlice"
import CareerContact from "./prismic slice/CareerContact"
import ContactGallery from "./prismic slice/MasonaryGallery"
import ServiceSlice from "./prismic slice/homepage/HomeService"
import ClienteleSlice from "./prismic slice/homepage/HomeClientele"
import HomeCTASlice from "./prismic slice/homepage/HomeCta"
import AddressSlice from "./prismic slice/contactpage/ContactAddress"

const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    career_opening: CareerSlice,
    career_contact: CareerContact,
    image: ContactGallery,
    services: ServiceSlice,
    clientele: ClienteleSlice,
    call_to_action: HomeCTASlice,
    address: AddressSlice,
  }

  const sliceZoneContent = sliceZone.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type]
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />
    }
    return null
  })

  return <main>{sliceZoneContent}</main>
}

export default SliceZone

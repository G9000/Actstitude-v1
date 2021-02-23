import React from "react"
import CareerSlice from "./prismic slice/CareerSlice"
import CareerContact from "./prismic slice/CareerContact"

const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    career_opening: CareerSlice,
    career_contact: CareerContact,
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

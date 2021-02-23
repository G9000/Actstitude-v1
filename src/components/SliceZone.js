import React from "react"
import SliceTitle from "./prismic slice/SliceTitle"
import CareerContact from "./prismic slice/CareerContact"

const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    career_opening: SliceTitle,
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

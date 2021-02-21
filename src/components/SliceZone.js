import React from "react"
import CareerModule from "./Prismic Slice/CareerModule"

const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    singapore_opening: CareerModule,
  }
  const sliceZoneContent = sliceZone.map((slice, index) => {
    const SliceComponent = sliceComponents[slice.slice_type]
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />
    }
    return null
  })
  return <main className="container">{sliceZoneContent}</main>
}

export default SliceZone

import './CatGallery.css'
type Props = {
  images: string[]
}
export default function CatGallery({ images }: Props) {

  return (
    <div className="cat-container">
      {
        images.map((image) => (
          <img className='card' style={{ "width": "300px" }} src={image} />
        ))
      }
    </div >
  )
}

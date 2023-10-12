import Image from "next/image"

export default function Footer(){
    return(
        <div className="d-flex flex-md-row flex-column justify-content-between mx-sm-2 mx-md-5 mt-5">
            <div className="align-item-center"> 
                <p>Brunch.js</p>
                <p>(859) 867-5309</p>
            </div>
            <div className="d-none d-md-block text-center image-container w-100"><Image src="/img/brunch-icon.png" className="object-fit-contain position-absolute" height="100" width="100" alt="brunch logo" priority /></div>
            <div>
                <p>348 E Main St</p>
                <p>Lexington, KY 40507</p>
                <p>©Tanner909 Development</p>
            </div>
            {/* <div className="container">
                <div className="row text-center d-flex bg-primary">
                    <div className="col-4">
                        
                    </div>
                    <div className="col-4">
                        <p>Hello Worlds</p>
                        
                    </div>
                    <div className="col-4">
                        <p>348 E Main St</p>
                        <p>Lexington, KY 40507</p>
                        <p>©Tanner909 Development</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
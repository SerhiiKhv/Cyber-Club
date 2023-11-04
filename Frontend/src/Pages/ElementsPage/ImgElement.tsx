import React from "react";

type ImgElementType = {
    images: string[]
    size: number
    classNameComponent?: string
    classNameImg?: string
}
export const ImgElement: React.FC<ImgElementType> = ({
                                                         size,
                                                         classNameComponent,
                                                         classNameImg,
                                                         images
                                                     }) => {

    function createImgElement(size: number, images: string[], className?: string) {
        const imgElements = [];

        for (let i = 0; i < size; i++) {
            imgElements.push(
                <img
                    key={i}
                    src={images[i]}
                    alt={`Image ${i}`}
                    className={className || 'h-96 w-full object-cover object-center'}
                />
            );
        }

        return imgElements;
    }

    return (
        <div className={classNameComponent}>
            {createImgElement(size, images, classNameImg)}
        </div>
    )
}

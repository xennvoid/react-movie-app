import React from "react"
import ContentLoader from "react-content-loader";

const CardSkeleton: React.FC = (props) => (
    <ContentLoader
        speed={2}
        width={290}
        height={473}
        viewBox="0 0 290 473"
        backgroundColor="#c2c2c2"
        foregroundColor="#a29a9a"
        {...props}
    >
        <rect x="0" y="0" rx="10" ry="10" width="256" height="320" />
    </ContentLoader>
)

export default CardSkeleton;
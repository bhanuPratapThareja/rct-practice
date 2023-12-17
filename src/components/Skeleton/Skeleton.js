import { Skeleton } from "@mui/material"

function SkeletonLoader({ times }) {
    const boxes = Array(times).fill(0).map((_, i) => {
            return <Skeleton key={i} animation="wave" width={'100%'} height={80} style={{ marginBottom: 2}} />
    })
    return boxes
}
export default SkeletonLoader
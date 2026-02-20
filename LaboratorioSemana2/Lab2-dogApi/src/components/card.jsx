export const Card = ({imageUrl }) => {
    return (
        <section style={{height: 500}}>
            <img src={imageUrl} alt="perrito" style={{ width: "300px",height: "300px"}}/>
        </section>
    )
}


export default Card

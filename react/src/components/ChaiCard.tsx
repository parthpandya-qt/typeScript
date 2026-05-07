type ChaiCardProps = {
    name: string;
    price: number;
    isSpecial?: boolean;
};

export function ChaiCard({ name, price, isSpecial = false }: ChaiCardProps) {
    return (
        <article>
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            {isSpecial && <p className="special">Special Offer!</p>}
        </article>
    );
}
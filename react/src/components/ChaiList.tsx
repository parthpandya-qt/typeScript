import type { Chai } from '../types';
import { ChaiCard } from './ChaiCard';

interface ChaiListProps {
    chaiList: Chai[];
}

export function ChaiList({ chaiList }: ChaiListProps) {
    return (
        <div>
            {chaiList.map((chai) => (
                <ChaiCard
                    key={chai.id}
                    name={chai.name}
                    price={chai.price}
                />
            ))}
        </div>
    );
}
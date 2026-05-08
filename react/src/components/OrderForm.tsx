import { useState } from 'react';

interface OrderFormProps {
    onSubmit(order: { name: string; cups: number }): void;
}

export function OrderForm({ onSubmit }: OrderFormProps) {

    const [name, setName] = useState<string>('Masala');
    const [cups, setCups] = useState<number>(1);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onSubmit({ name, cups });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCups(Number(e.target.value) || 0)
                }
                value={cups}
                placeholder="Cups"
            />

            <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                }
                value={name}
                placeholder="Chai Name"
            />
        </form>
    );
}
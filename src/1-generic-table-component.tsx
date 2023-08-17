import React from 'react';

interface TableProps<TItem> {
    items: TItem[];
    renderItem: (item: TItem) => React.ReactNode;
}

export const Table = <TItem,>(props: TableProps<TItem>) => {
    return <div>Hello {props.items.length}</div>;
}

export const Component = () => {
    return (
        <>
            <Table
                items={[{ id: "1", firstName: 'Alexey' }]}
                renderItem={(item) => {
                    return <div>{item.firstName}</div>;
                }}
            ></Table>
            <Table
                items={[{ id: "1", name: 'Bandit' }]}
                renderItem={(item) => {
                    return <div>{item.name}</div>;
                }}
            ></Table>
        </>
    )
};

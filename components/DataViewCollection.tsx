import { Fragment, Component } from 'react';
import { Text, TextProps } from './Themed';

type DataViewCollectionProps = {
    favoriteDataCollection: Array<Object>;
};

export default function DataViewCollection(props: DataViewCollectionProps) {
    const { favoriteDataCollection, ...otherProps } = props;
    return (
        <Fragment>
            if (favoriteDataCollection && favoriteDataCollection.length) {
                favoriteDataCollection.map(favoriteItem => {
                    return <Text>favoriteItem.title</Text>;
                })
            } else {
                <Text></Text>
            }
        </Fragment>
    );
}
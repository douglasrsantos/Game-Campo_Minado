import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Field from './Field'

export default (props: any) => {
    const rows = props.board.map((row: any, r: any) => {
        const columns = row.map((field: any, c: any) => {
            return <Field {...field} key={c}
                onOpen={() => props.onOpenField(r, c)}
                onSelect={() => props.onSelectField(r, c)} />
        })
        return <SafeAreaView style={{ flexDirection: 'row' }} key={r}>{columns}</SafeAreaView>
    })
    return <SafeAreaView style={styles.container}>{rows}</SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE'
    }
})
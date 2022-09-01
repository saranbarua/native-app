import React from 'react'
import { Pressable } from 'react-native'
import { colors, spacing } from '../theme'
import Text from './texts/text'

export default function Button({ title, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={{
                flex: 1,
                backgroundColor: "white",
                marginRight: spacing[2],
                borderRadius: spacing[4],
                paddingVertical: spacing[3],
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <Text style={{ color: colors.black }}>{title}</Text>
        </Pressable>
    )
}
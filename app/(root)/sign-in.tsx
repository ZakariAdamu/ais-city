import { View, Text } from 'react-native'
import React from 'react'
import { ViewProps } from 'react-native'
import { FC, ReactElement } from 'react'

interface SignInProps {}

const SignIn: FC<SignInProps> = (): ReactElement => {
    return (
        <View>
            <Text>sign-in</Text>
        </View>
    )
}

export default SignIn


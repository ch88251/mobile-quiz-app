import { Text, View, TextInput, Pressable, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';

export default function LoginScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      return Alert.alert("Error", "Please fill in all fields");
    }
    setLoading(true);
    console.log({
      email,
      password,
    });
    router.replace("/(tabs)/");
  };

  return (
    <View className='flex-1'>
      <View className='w-full px-4'>
        <Text className='text-3xl mb-4 font-bold text-gray text-center'>Log In</Text>
        <Text className='text-lg text-gray-600'>Email Address</Text>
        <TextInput
			    className='w-full border-[1px] py-4 rounded-md mb-3 text-white font-bold'
			    value={email}
			    onChangeText={setEmail}
		    />
        <Text className='text-lg text-gray-600'>Password</Text>
        <TextInput
          className='w-full border-[1px] py-4 rounded-md mb-3 text-white font-bold'
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />     
        <Pressable
          className={`w-full ${
            loading ? "bg-orange-200" : "bg-orange-600"
          } rounded-xl p-4 border-[1px] border-orange-200`}
          disabled={loading}
          onPress={() => handleLogin()}
        >
          <Text className='text-white text-center font-bold text-xl'>
            {loading ? "Authenticating..." : "Sign in"}
          </Text>
        </Pressable>
        <Text className='text-center mt-2 text-orange-600'>
          Don't have an account?{" "}
          <Link href='/register'>
            <Text className='text-green-600'>Register</Text>
          </Link>
        </Text>           
      </View>
    </View>
  );
}

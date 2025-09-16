import CodeCard from "@/components/home/CodeCard";
import Feedback from "@/components/home/Feedback";
import { HeartPlus, Send } from "lucide-react";

export default function Home() {
    return <div className="space-y-8">
        <div className="flex justify-between items-center">
            <div className="space-y-1">
                <p className="text-xl">Today's Tip</p>
                <p className="text-xs text-white/80">Sep 16, 2025</p>
            </div>
            <div className="flex gap-2">
                <div className="bg-white/10 rounded-full p-2">
                    <Send size={18} />
                </div>
                <div className="bg-white/10 rounded-full p-2">
                    <HeartPlus  size={18}/>
                </div>
            </div>
        </div>

        <div className="space-y-3">
            <p className="text-3xl font-semibold">Use FlatList instead of ScrollView for long lists to optimize performance</p>
            <p className="border border-lime-400 px-4 py-1 rounded-full w-fit">React Native</p>
        </div>

        <div className="space-y-6">
            <CodeCard
                topText="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                codeText={`import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default App;`}
                bottomText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            />

            <Feedback />
        </div>
    </div>
}
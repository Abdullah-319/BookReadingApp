import React from "react";
import { SafeAreaView } from "react-native";
import BookList from "./BookList";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BookList />
    </SafeAreaView>
  );
};

export default App;

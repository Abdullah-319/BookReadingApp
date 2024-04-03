import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import useFetchBooks from "./useFetchBooks";

const BookList = () => {
  const { books, loading } = useFetchBooks();
  const [search, setSearch] = useState("");
  const [rtl, setRtl] = useState(false);

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Abdullah's Book Store</Text>
      <TextInput
        style={styles.input}
        value={search}
        onChangeText={setSearch}
        placeholder="Search by book name"
      />
      <TouchableOpacity style={styles.button} onPress={() => setRtl(!rtl)}>
        <Text style={styles.buttonText}>{rtl ? "To English" : "To Urdu"}</Text>
      </TouchableOpacity>
      <FlatList
        data={filteredBooks}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image
              style={styles.bookImage}
              source={{ uri: item.coverPhotoUri }}
            />
            <Text style={[styles.text, { textAlign: rtl ? "right" : "left" }]}>
              Title: {item.title}
            </Text>
            <Text style={[styles.text, { textAlign: rtl ? "right" : "left" }]}>
              Author: {item.author.name}
            </Text>
            <Text style={[styles.text, { textAlign: rtl ? "right" : "left" }]}>
              Category: {item.category.name}
            </Text>
            <Text style={[styles.text, { textAlign: rtl ? "right" : "left" }]}>
              Published: {item.isPublished ? "Yes" : "No"}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5DC",
  },
  input: {
    height: 40,
    borderColor: "#8B4513",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#FFF8DC",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#8B4513",
  },
  button: {
    backgroundColor: "#8B4513",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#8B4513",
    backgroundColor: "#FFF8DC",
  },
  bookImage: {
    width: 100,
    height: 150,
    resizeMode: "cover",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5DC",
  },
  text: {
    color: "#8B4513",
  },
});

export default BookList;

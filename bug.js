This error occurs when using the FlatList component in React Native and attempting to render items that contain a null or undefined value.  It's especially tricky because it doesn't always throw a clear error message, sometimes just resulting in a blank space where the item should be, or a seemingly random crash.

```javascript
//Buggy Code
<FlatList
  data={myData}
  renderItem={({ item }) => (
    <Text>{item.name}</Text> //Error if item.name is null or undefined
  )}
/>
```
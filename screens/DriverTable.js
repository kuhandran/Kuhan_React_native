import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
 
export default class ExampleFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['ID', 'Name', 'Phone'],
      tableData: []
    }
  }
 
  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }

  componentDidMount() {
    this.getData();
  }

  getData = base => {

    let CompleteDetails = [];
    let init = {
      method: "GET",
      headers: new Headers(),
      mode: "cors",
      cache: "default"
    };
    fetch("https://jsonplaceholder.typicode.com/users", init)
      .then(response => response.json())
      .then(info => {

        for(let i = 0; i < info.length; i++){
            let childArray = info[i];
            let eachDriverDetails = [];
            eachDriverDetails.push(childArray.id);
            eachDriverDetails.push(childArray.name)
            eachDriverDetails.push(childArray.phone)

            CompleteDetails.push(eachDriverDetails)

            console.log(childArray.name,"index", i)
            this.setState({
                tableData:CompleteDetails
            })
    
         
         }
        console.log(" CompleteDetails ",CompleteDetails)
      });
  };
 
  render() {
    const state = this.state;
 
 
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});
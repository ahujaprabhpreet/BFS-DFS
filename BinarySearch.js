
            function binarySearch(list, value){
                // initialising the start, center and end of the list
                let start = 0
                let end = list.length - 1
                let center = Math.floor((start+end)/2)
                
                //using while loop and checking if the center is not the number and start is still less than the end
                while(list[center] !== value && start <  end){
                    //if the value is less than the center, we'll not consider the larger half. so end=center-1
                    if (value < list[center]){
                    end = center - 1
                    } 
                    //if the value is greater than the center, we'll not consider the smaller half. so start=center+1
                    else {
                    start = center + 1
                    }   
                    //finding the center of the smaller list created  
                    center = Math.floor((start + end) / 2)
                }
                
                //if the number is not found, return -1 or else if found return the index of the number
                return (list[center] !== value) ? -1 : center
            }  
            function input(){

                var list,num
                //getting the list and the number from the html text fields
                list = document.getElementById("listTxt").value 
                num = document.getElementById("numTxt").value
                
                //Printing the entered list
                document.write("Entered List : ")
                document.writeln(list) 
                document.writeln("<br>")

                //Printing the number user is searching for
                document.write("Number searched : ")
                document.writeln(num)
                document.writeln("<br>")

                //storing the individual numbers in an array from the input taken from the user as string
                var each = list.split(" ")
                var eachNumberArray = each.map(Number);
                
                //calling the binary search method to search the number and printing it
                document.write("Position of the number : ")
                document.write(binarySearch(eachNumberArray,Number(num)))

            }
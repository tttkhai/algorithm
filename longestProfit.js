function longestProfit(data) {
    var max = 1, len = 1;
      
    // traverse the array from the 2nd element
    for (var i=1; i<n; i++)
    {
        // if current element if greater than previous
        // element, then this element helps in building
        // up the previous increasing subarray encountered
        // so far
        if (arr[i] > arr[i-1])
            len++;
        else
        {
            // check if 'max' length is less than the length
            // of the current increasing subarray. If true,
            // then update 'max'
            if (max < len)
            {
                max = len;
            }

            // reset 'len' to 1 as from this element
            // again the length of the new increasing
            // subarray is being calculated   
            len = 1;   
        }   
    }
      
    // comparing the length of the last
    // increasing subarray with 'max'
    if (max < len)
    {
        max = len;
    }
     
    // required maximum length
    return max;
}

const num = [-1, 9, 0 ,8 , -5, 6, -24]
console.log(longestProfit(num))
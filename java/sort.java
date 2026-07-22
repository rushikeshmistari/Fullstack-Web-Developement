public class sort{
    public static void main(String[] args) {
        int[] arr = {1,4,2,3,5,7,0};
        int min=arr[0];
        for(int i=0;i<=6;i++){
            for(int j=i+1;j<=6;j++){
                if (min >=arr[j]){
                    arr[i]=arr[j];
                }
            }
        }
    }
}
package main

import (
	"context"
	"fmt"
	"google.golang.org/grpc"
	calculatorpb "grpc_multi_language_clients/clients/golang/calculatorspb"
	"log"
)

func main()  {

	address := "localhost:50051"
	cc, err := grpc.Dial(address,grpc.WithInsecure())
	if err != nil {
		log.Panicf("Unable to establish client connection: %v",err)
	}
	defer cc.Close()

	numService := calculatorpb.NewCalculatorServiceClient(cc)

	doSum(numService)
}

func doSum(numService calculatorpb.CalculatorServiceClient) {

	fmt.Println("Doing sum...")

	req := calculatorpb.SumRequest{
		FirstNum:  1,
		SecondNum: 2,
	}

	resp, err := numService.Sum(context.Background(),&req)
	if err != nil {
		fmt.Println("Error getting response: ",err)
	} else {
		fmt.Println("Response: ",resp.String())
	}

}

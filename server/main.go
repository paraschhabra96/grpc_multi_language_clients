package main

import (
	"context"
	"fmt"
	"google.golang.org/grpc"
	calculatorpb "grpc_multi_language_clients/server/calculatorspb"
	"log"
	"net"
)

type server struct {}

func (s *server) Sum(ctx context.Context, request *calculatorpb.SumRequest) (*calculatorpb.SumResponse, error) {

	fmt.Println("In sum function")

	num1 := request.GetFirstNum()
	num2 := request.GetSecondNum()
	result := num1 + num2

	resp := calculatorpb.SumResponse{Result: result}

	fmt.Println("Returning response...")

	return &resp,nil
}

func (s *server) UnimplementedCalculatorServiceServer() {

}

func main()  {


	address := "0.0.0.0:50051"
	lis, err := net.Listen("tcp",address)
	if err != nil {
		log.Panicf("Failed to listen: %v",address)
	}
	s := grpc.NewServer()
	calculatorpb.RegisterCalculatorServiceServer(s,&server{})
	fmt.Println("Starting server...")
	if err:=s.Serve(lis);err != nil {
		log.Fatalf("Failed to serve: %v",err)
	}


}



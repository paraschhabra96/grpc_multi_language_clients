import grpc
# from calculatorpb.calculator_pb2 import SumRequest
# from calculatorpb.calculator_pb2_grpc import CalculatorServiceStub

import calculator_pb2
import calculator_pb2_grpc

# from .calculatorpb import calculator_pb2
# from .calculatorpb import calculator_pb2_grpc


def run():
    request = calculator_pb2.SumRequest(first_num=2,second_num=3)

    with grpc.insecure_channel('localhost:50051') as channel:
        stub = calculator_pb2_grpc.CalculatorServiceStub(channel)
        response = stub.Sum(request)
    print("Sum is: " + str(response.result))


if __name__ == '__main__':
    run()
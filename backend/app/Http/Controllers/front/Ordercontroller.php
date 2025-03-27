<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Orderitems;
use Illuminate\Http\Request;

use function Laravel\Prompts\form;

class Ordercontroller extends Controller
{
    public function order (Request $request)
    {
        if(!empty($request->cart)){
            $order = new Order();
            $order->user_id = mt_rand(10, 69);
            $order->subtotal = $request->subtotal;
            $order->grand_total = $request->grand_total;
            $order->shipping = $request->shipping;
            $order->payment_status = $request->payment_status;
            $order->status = $request->status;
            $order->name = $request->name;
            $order->email = $request->email;
            $order->mobile = $request->mobile;
            $order->address = $request->address;
            $order->city = $request->city;
            $order->state = $request->state;
            $order->zip = $request->zip;
            $order->save();

            foreach($request->cart as $item)
            {
                $orderitem = new Orderitems();
                $orderitem->order_id = $order->id;
                $orderitem->product_id = $item['product_id'];
                $orderitem->price = $item['qty'] * $item['price'];
                $orderitem->unit_price = $item['price'];
                $orderitem->quantity = $item['qty'];
                $orderitem->title = $item['title'];
                $orderitem->save();

                return response()->json([
                    "status" => 200,
                    "message" => "your place order successful"
                ]);

            }
        }
        else{
            return response()->json([
                "status" => 400,
                "message" => "your cart is empty"
            ]);
        }
    }

   
}

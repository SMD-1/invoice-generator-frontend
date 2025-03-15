import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/Label";
import Image from "next/image";

export default function Home() {
  return (
    <div className="dark min-h-screen bg-zinc-900">
      <div className="mx-6">
        <div className="flex w-full flex-col md:flex-row gap-2 ">
          {/* left */}
          <div className="flex flex-col md:flex-row mt-20 md:w-1/2 w-full md:gap-3">
            {/* Bill from */}
            <div className="flex md:w-1/2 w-full flex-col gap-y-4">
              <h1 className="dark: text-zinc-50 md:mb-4 text-2xl font-bold">
                Bill From:
              </h1>
              <div className="flex w-full md:max-w-sm max-w-lg items-center gap-4">
                <Label htmlFor="bill_from_name" className="w-[100px]">
                  Name:
                </Label>
                <Input
                  id="bill_from_name"
                  type="text"
                  className="dark:border-gray-500 dark:text-gray-200 bg-muted shadow-none"
                />
              </div>
              <div className="flex w-full md:max-w-sm max-w-lg items-center gap-4">
                <Label htmlFor="bill_from_email" className="w-[100px]">
                  Email:
                </Label>
                <Input
                  id="bill_from_email"
                  type="email"
                  className="dark:border-gray-500 dark:text-gray-200 bg-muted shadow-none"
                />
              </div>
              <div className="flex w-full md:max-w-sm max-w-lg items-center gap-4">
                <Label htmlFor="bill_from_phone" className="w-[100px]">
                  Mobile No:
                </Label>
                <Input
                  id="bill_from_phone"
                  type="text"
                  className="dark:border-gray-500 dark:text-gray-200 bg-muted shadow-none"
                />
              </div>
              <div className="flex w-full md:max-w-sm max-w-lg items-center gap-4">
                <Label htmlFor="bill_from_address" className="w-[100px]">
                  Address:
                </Label>
                <Input
                  id="bill_from_address"
                  type="text"
                  className="dark:border-gray-500 dark:text-gray-200 bg-muted shadow-none"
                />
              </div>
              <div className="flex w-full md:max-w-sm max-w-lg items-center gap-4">
                <Label htmlFor="bill_from_city" className="w-[100px]">
                  City:
                </Label>
                <Input
                  id="bill_from_city"
                  type="text"
                  className="dark:border-gray-500 dark:text-gray-200 bg-muted shadow-none"
                />
              </div>
              <div className="flex w-full md:max-w-sm max-w-lg items-center gap-4">
                <Label htmlFor="bill_from_pin_code" className="w-[100px]">
                  Zip:
                </Label>
                <Input
                  id="bill_from_pin_code"
                  type="text"
                  className="dark:border-gray-500 dark:text-gray-200 bg-muted shadow-none"
                />
              </div>
            </div>
            {/* Bill to */}
            <div className="flex md:w-1/2 w-full flex-col md:mt-0 mt-8 gap-y-4">
              <h1 className="dark: text-zinc-50 md:mb-4 text-2xl font-bold">
                Bill To:
              </h1>
              <div className="flex w-full md:max-w-sm max-w-lg items-center gap-4">
                <Label htmlFor="bill_from_name" className="w-[100px]">
                  Name:
                </Label>
                <Input
                  id="bill_from_name"
                  type="text"
                  className="dark:border-gray-500 dark:text-gray-200 bg-muted shadow-none"
                />
              </div>
              <div className="flex w-full md:max-w-sm max-w-lg items-center gap-4">
                <Label htmlFor="bill_from_email" className="w-[100px]">
                  Email:
                </Label>
                <Input
                  id="bill_from_email"
                  type="email"
                  className="dark:border-gray-500 dark:text-gray-200 bg-muted shadow-none"
                />
              </div>
              <div className="flex w-full md:max-w-sm max-w-lg items-center gap-4">
                <Label htmlFor="bill_from_phone" className="w-[100px]">
                  Mobile No:
                </Label>
                <Input
                  id="bill_from_phone"
                  type="text"
                  className="dark:border-gray-500 dark:text-gray-200 bg-muted shadow-none"
                />
              </div>
              <div className="flex w-full md:max-w-sm max-w-lg items-center gap-4">
                <Label htmlFor="bill_from_address" className="w-[100px]">
                  Address:
                </Label>
                <Input
                  id="bill_from_address"
                  type="text"
                  className="dark:border-gray-500 dark:text-gray-200 bg-muted shadow-none"
                />
              </div>
              <div className="flex w-full md:max-w-sm max-w-lg items-center gap-4">
                <Label htmlFor="bill_from_city" className="w-[100px]">
                  City:
                </Label>
                <Input
                  id="bill_from_city"
                  type="text"
                  className="dark:border-gray-500 dark:text-gray-200 bg-muted shadow-none"
                />
              </div>
              <div className="flex w-full md:max-w-sm max-w-lg items-center gap-4">
                <Label htmlFor="bill_from_pin_code" className="w-[100px]">
                  Zip:
                </Label>
                <Input
                  id="bill_from_pin_code"
                  type="text"
                  className="dark:border-gray-500 dark:text-gray-200 bg-muted shadow-none"
                />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="md:w-1/2 w-full pb-2 md:px-2 mt-20 md:dark:bg-zinc-800 md:dark:border-gray-700 md:dark:border dark:border-opacity-50 dark:shadow-lg">
            <h1 className="dark: text-zinc-50 md:mb-4 text-2xl font-bold">
              Live Preview:
            </h1>
            {/* Live preview start here */}
            <div className="flex flex-col bg-zinc-50 text-zinc-800 md:p-4 p-2 gap-1 border border-amber-900">
              {/* Heading */}
              <div className="flex justify-between">
                <div className="flex flex-col w-1/2">
                  {/* Billing from */}
                  <div className="flex flex-col text-xs">
                    <h3 className="text-sm font-medium">Billing From:</h3>
                    <p>Billing From Name</p>
                    <p>Billing From Address,</p>
                    <p>Billing From city,</p>
                    <p>Billing from Pincode</p>
                    <p>Billing From Mobile no</p>
                  </div>
                </div>
                <div className="flex flex-col items-end w-1/2">
                  <div className="relative w-[100px] h-[100px]">
                    <Image
                      fill
                      alt="image"
                      src="/image.png"
                      className="object-cover outline-none border-none"
                    />
                  </div>
                  <div className="flex flex-wrap md:text-lg text-sm">
                    <h1 className=" font-bold">Invoice No:</h1>
                    <span className="md:ml-3 ml-1">#INV-000100000</span>
                  </div>
                </div>
              </div>
              <div className="h-[1px] w-full bg-zinc-400 opacity-50"></div>
              {/* address */}
              <div className="flex justify-between">
                <div className="flex flex-col">
                  {/* Billing from */}
                  <div className="flex flex-col text-xs">
                    <h3 className="text-sm font-medium">Billing To:</h3>
                    <p>Billing To Name</p>
                    <p>Billing To Address,</p>
                    <p>Billing To city,</p>
                    <p>Billing To Pincode</p>
                    <p>Billing To Mobile no</p>
                  </div>
                </div>
                <div className="flex max-w-1/2">
                  <h4 className="whitespace-nowrap font-bold mr-2">
                    Billing Date:
                  </h4>
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                    03/15/2025
                  </p>
                </div>
                {/* add other details here */}
              </div>
              <div className="h-[1px] w-full bg-zinc-400 opacity-50"></div>
              {/* Item list */}

              <div className="h-[1px] w-full bg-zinc-400 opacity-50"></div>
              {/* Footer */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

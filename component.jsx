import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveLine } from "@nivo/line"

export default function Component() {
  return (
    <>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Credit Card Recommendation</CardTitle>
          <CardDescription>Get personalized credit card recommendations based on your spending habits.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" placeholder="Enter your age" type="number" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="annual-income">Annual Income</Label>
              <Input id="annual-income" placeholder="Enter your annual income" type="number" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="transportation">Transportation</Label>
              <Select id="transportation">
                <SelectTrigger>
                  <SelectValue placeholder="Select transportation type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">Public Transportation</SelectItem>
                  <SelectItem value="private">Private Vehicle</SelectItem>
                  <SelectItem value="both">Both</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="shopping-categories">Shopping Categories</Label>
              <Checkbox.Group>
                <div className="grid grid-cols-2 gap-2">
                  <Label className="flex items-center gap-2">
                    <Checkbox id="category-grocery" value="grocery" />
                    Grocery
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox id="category-dining" value="dining" />
                    Dining
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox id="category-travel" value="travel" />
                    Travel
                  </Label>
                  <Label className="flex items-center gap-2">
                    <Checkbox id="category-entertainment" value="entertainment" />
                    Entertainment
                  </Label>
                </div>
              </Checkbox.Group>
            </div>
            <Button className="w-full" type="submit">
              Get Recommendations
            </Button>
          </form>
        </CardContent>
      </Card>
      <div className="mt-8 grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Recommended Credit Cards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Chase Freedom Unlimited</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    No annual fee, 1.5% cash back on all purchases
                  </p>
                </div>
                <Button variant="outline">Apply</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">American Express Blue Cash Preferred</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    6% cash back at grocery stores, 3% at gas stations and select department stores
                  </p>
                </div>
                <Button variant="outline">Apply</Button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Citi Double Cash</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    2% cash back on all purchases (1% when you buy, 1% when you pay)
                  </p>
                </div>
                <Button variant="outline">Apply</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Your Spending Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <h3 className="font-medium">Monthly Spending</h3>
                <BarChart className="w-full aspect-[16/9]" />
              </div>
              <div>
                <h3 className="font-medium">Annual Income vs Spending</h3>
                <LineChart className="w-full aspect-[16/9]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}


function LineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}

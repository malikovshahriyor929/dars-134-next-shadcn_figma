import { CalendarDemo } from "@/components/calendardemo";
import CodeBlock from "@/components/codeblack";
import TerminalTabs from "@/components/terminal";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Selection from "@/shared/generics/selection";
import { Calendar } from "lucide-react";
interface Props {
  params: {
    component?: string;
  };
}
const DocsForComponent: React.FC<Props> = ({ params }) => {
  const componentName = params?.component || "Card";

  return (
    <div className=" flex flex-col gap-2 w-[90%]  mx-auto mt-5   ">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <p>Home</p>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{componentName}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-[30px] font-bold">{componentName}</h1>
      <p className="text-[#71717a]">
        Displays a {componentName} with header, content, and footer.
      </p>
      {componentName == "Card" ? (
        <div className="mt-5">
          <Selection one="Preview" two="Code" />
          <Card className="mt-5 bg-background">
            <CardHeader>
              <div className="flex justify-between items-center ">
                <div>
                  <Select>
                    <SelectTrigger className="w-[140px]">
                      <span className="text-primary/50">Style: </span> New York
                    </SelectTrigger>
                    <SelectContent>New York</SelectContent>
                  </Select>
                </div>
                <div>
                  <Button size="sm">Open in</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="mx-auto  ">
              <Card className="w-[350px] bg-background">
                <CardHeader>
                  <CardTitle>Create project</CardTitle>
                  <CardDescription>
                    Deploy your new project in one-click.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label id="name">Name</Label>
                        <Input
                          id="name"
                          className="!bg-background"
                          placeholder="Name of your project"
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label id="framework">Framework</Label>
                        <Select>
                          <SelectTrigger
                            id="framework"
                            className="!bg-background"
                          >
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="next">Next.js</SelectItem>
                            <SelectItem value="sveltekit">SvelteKit</SelectItem>
                            <SelectItem value="astro">Astro</SelectItem>
                            <SelectItem value="nuxt">Nuxt.js</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="!bg-background">
                    Cancel
                  </Button>
                  <Button>Deploy</Button>
                </CardFooter>
              </Card>
            </CardContent>
          </Card>
          <br />
          <Selection one="Installation" two="" className="text-[20px] " />
          <br />
          <Selection one="CLI" two="Manual" />
          <TerminalTabs />
        </div>
      ) : (
        <div className="mt-5">
          <Selection one="Preview" two="Code" />
          <Card className="mt-5 bg-background">
            <CardHeader>
              <div className="flex justify-between items-center ">
                <div>
                  <Select>
                    <SelectTrigger className="w-[140px]">
                      <span className="text-primary/50">Style: </span> New York
                    </SelectTrigger>
                    <SelectContent>New York</SelectContent>
                  </Select>
                </div>
                <div>
                  <Button size="sm">Open in</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="mx-auto  ">
              <CalendarDemo />
            </CardContent>
          </Card>
          <br />
          <Selection one="Installation" two="" className="text-[20px] " />
          <br />
          <Selection one="CLI" two="Manual" />
          <TerminalTabs />
        </div>
      )}
      <div className="my-5">
        <Selection one="Usage" two="" className="text-xl " />
        <Card className="mt-5">
          <CodeBlock />
        </Card>
      </div>
    </div>
  );
};

export default DocsForComponent;

"use client";

import { CircleQuestionMarkIcon, GalleryVerticalEnd } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useRef, useEffect } from "react";

const formSchema = z.object({
  workspace: z
    .string()
    .min(2, {
      message: "Workspace name must be at least 2 characters.",
    })
    .max(50, {
      message: "Workspace name must be at most 50 characters.",
    }),
  url: z
    .string()
    .min(2, {
      message: "Workspace URL must be at least 2 characters.",
    })
    .max(50, {
      message: "Workspace URL must be at most 50 characters.",
    }),
  region: z.enum(["us", "eu"]),
});

export function WorkspaceStep({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showInfo, setShowInfo] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [animationHeight, setAnimationHeight] = useState("0px");
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showInfo && !isAnimating) {
      // Opening animation
      setIsAnimating(true);
      setShouldRender(true);

      // First animate to 80px
      requestAnimationFrame(() => {
        setAnimationHeight("80px");
      });

      // After animation completes, set to auto
      setTimeout(() => {
        setAnimationHeight("auto");
        setIsAnimating(false);
      }, 300);
    } else if (!showInfo && !isAnimating) {
      // Closing animation
      if (shouldRender) {
        setIsAnimating(true);

        // First set to 80px if it was auto
        if (animationHeight === "auto") {
          setAnimationHeight("80px");

          // Then animate to 0
          requestAnimationFrame(() => {
            setTimeout(() => {
              setAnimationHeight("0px");
            }, 10);
          });
        } else {
          // Already has pixel value, just animate to 0
          setAnimationHeight("0px");
        }

        // After animation completes, hide content
        setTimeout(() => {
          setShouldRender(false);
          setIsAnimating(false);
        }, 300);
      }
    }
  }, [showInfo, isAnimating, shouldRender, animationHeight]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workspace: "",
      url: "",
      region: "eu",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <a
                href="#"
                className="flex flex-col items-center gap-2 font-medium"
              >
                <div className="flex size-8 items-center justify-center rounded-md">
                  <GalleryVerticalEnd className="size-6" />
                </div>
                <span className="sr-only">Acme Inc.</span>
              </a>
              <h1 className="text-2xl font-bold">Create a new workspace</h1>
              <div className="text-center text-sm">
                Workspaces are shared environments where your teams can work on
                projects together.
              </div>
            </div>
            <Card>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="workspace"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Workspace Name</FormLabel>
                            <FormControl>
                              <Input placeholder="My Workspace" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="url"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Workspace URL</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground text-sm">
                                  linear.app/
                                </span>
                                <Input className="pl-20" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs flex items-center justify-between">
                      <div className="space-x-2">
                        <span className="text-muted-foreground">
                          Workspace will be hosted in the{" "}
                        </span>
                        <FormField
                          control={form.control}
                          name="region"
                          render={({ field }) => (
                            <FormItem className="inline-block ml-auto">
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="us">
                                    United States
                                  </SelectItem>
                                  <SelectItem value="eu">
                                    European Union
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        className="rounded-full"
                        size="icon"
                        onClick={() => setShowInfo(!showInfo)}
                      >
                        <CircleQuestionMarkIcon className="size-5 text-muted-foreground" />
                      </Button>
                    </div>
                    {shouldRender && (
                      <div
                        ref={infoRef}
                        aria-hidden={!showInfo}
                        className="overflow-hidden transition-all duration-300 ease-in-out"
                        style={{
                          height: animationHeight,
                          opacity: showInfo ? 1 : 0,
                        }}
                      >
                        <div className="pt-4 mb-6 text-sm text-muted-foreground">
                          The region that will host the data for the workspace.
                          This can <span className="font-medium">not</span> be
                          changed later.
                        </div>
                      </div>
                    )}
                  </div>

                  <Button type="submit" className="w-full">
                    Create Workspace
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </form>
      </Form>
    </div>
  );
}

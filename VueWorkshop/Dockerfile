FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["VueWorkshop/VueWorkshop.csproj", "VueWorkshop/"]
RUN dotnet restore "VueWorkshop/VueWorkshop.csproj"
COPY . .
WORKDIR "/src/VueWorkshop"
RUN dotnet build "VueWorkshop.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "VueWorkshop.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "VueWorkshop.dll"]
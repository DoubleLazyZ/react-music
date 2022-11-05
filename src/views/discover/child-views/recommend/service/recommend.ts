import wgRequest from "@/service";

export function getBanners() {
  return wgRequest.get({
    url: '/banner'
  })
}

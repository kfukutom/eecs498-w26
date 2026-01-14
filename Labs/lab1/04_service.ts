interface APIResponse {
    data: string,
    timestamp: number;
}

interface Metadata {
    params: any;
}

// Skeleton API call, similar to that of 485 JS code.
const fetchData = new Promise<APIResponse>((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve({
                data: "Success!",
                timestamp: Date.now()
            });
        }, 1000);
    } catch (error) {
        reject(error);
    }
})
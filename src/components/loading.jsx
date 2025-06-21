import loading from "/src/assets/loading.webp";
export default function Loading() {
    return (
        <div className="flex justify-center items-center h-[90vh]">
            <img src={loading} alt="loading" />
        </div>
    );
}
